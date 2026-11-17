#!/usr/bin/env python3
"""Keep the translated guide pages wired together.

English guides live at the site root (/<slug>.html); translations live in
/<lang>/<slug>.html. Run this after adding or changing any guide page:

    python3 tools/i18n_guides.py

For every guide version that exists it:
  - sets <html lang>, the canonical URL and og:url;
  - fills the <!-- HREFLANG --> block with alternate links to every
    existing language version (plus x-default = English);
  - fills the <!-- LANGS --> block in the nav with a language switcher;
  - points the logo/brand link at the home page in that language;
and regenerates sitemap.xml.

The tools/ folder is listed in .assetsignore, so it is never published.
"""
import datetime
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://pocsomm.com"

GUIDES = [
    "wine-markup-calculator",
    "how-much-do-restaurants-mark-up-wine",
    "how-to-tell-if-restaurant-wine-is-good-value",
    "how-to-choose-wine-from-a-restaurant-wine-list",
    "best-apps-to-scan-a-restaurant-wine-list",
    "pocsomm-vs-vivino",
]

# code used in the URL folder -> (html lang / hreflang, name shown in the switcher)
LANGS = [
    ("en", "en", "English"),
    ("fr", "fr", "Français"),
    ("it", "it", "Italiano"),
    ("es", "es", "Español"),
    ("ja", "ja", "日本語"),
    ("zh", "zh-Hans", "中文"),
]

# Pages outside the guides that belong in the sitemap.
OTHER_PAGES = [
    ("/", "2026-11-17"),
    ("/privacy-policy", "2026-11-12"),
    ("/terms-of-service", "2026-07-29"),
]


def path_for(code, slug):
    return f"{ROOT}/{slug}.html" if code == "en" else f"{ROOT}/{code}/{slug}.html"


def url_for(code, slug):
    return f"{SITE}/{slug}" if code == "en" else f"{SITE}/{code}/{slug}"


def home_for(code):
    return "/" if code == "en" else f"/?lang={code}"


def replace_block(s, name, content):
    pattern = re.compile(rf"<!-- {name}:BEGIN -->.*?<!-- {name}:END -->", re.S)
    if not pattern.search(s):
        raise SystemExit(f"missing <!-- {name}:BEGIN/END --> markers")
    return pattern.sub(lambda _: f"<!-- {name}:BEGIN -->{content}<!-- {name}:END -->", s, count=1)


def main():
    sitemap_urls = []
    for slug in GUIDES:
        present = [(c, hl, n) for c, hl, n in LANGS if os.path.exists(path_for(c, slug))]
        for code, hreflang, _ in present:
            f = path_for(code, slug)
            s = open(f, encoding="utf-8").read()
            url = url_for(code, slug)

            s = re.sub(r'<html lang="[^"]*">', f'<html lang="{hreflang}">', s, count=1)
            s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', s, count=1)
            s = re.sub(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{url}">', s, count=1)

            alts = "".join(
                f'\n    <link rel="alternate" hreflang="{hl}" href="{url_for(c, slug)}">'
                for c, hl, _ in present
            )
            alts += f'\n    <link rel="alternate" hreflang="x-default" href="{url_for("en", slug)}">\n    '
            s = replace_block(s, "HREFLANG", alts)

            links = []
            for c, hl, n in present:
                if c == code:
                    links.append(f'<span class="lang current" aria-current="page">{n}</span>')
                else:
                    href = f"/{slug}" if c == "en" else f"/{c}/{slug}"
                    links.append(f'<a class="lang" href="{href}" hreflang="{hl}" lang="{hl}">{n}</a>')
            switcher = f'<span class="langs">{"".join(links)}</span>'
            s = replace_block(s, "LANGS", switcher)

            # Brand links go to the home page in this language.
            s = re.sub(r'<a href="/(\?lang=[a-z]+)?"><img src="/logo.png"',
                       f'<a href="{home_for(code)}"><img src="/logo.png"', s, count=1)
            s = re.sub(r'<a href="/(\?lang=[a-z]+)?">PocSomm</a>\n        <span class="spacer">',
                       f'<a href="{home_for(code)}">PocSomm</a>\n        <span class="spacer">', s, count=1)

            open(f, "w", encoding="utf-8").write(s)
            sitemap_urls.append((url, datetime.date.fromtimestamp(os.path.getmtime(f)).isoformat()))
        print(f"{slug}: {', '.join(c for c, _, _ in present)}")

    entries = [(SITE + p, d) for p, d in OTHER_PAGES] + sitemap_urls
    body = "".join(f"  <url>\n    <loc>{u}</loc>\n    <lastmod>{d}</lastmod>\n  </url>\n" for u, d in entries)
    xml = ('<?xml version="1.0" encoding="UTF-8"?>\n'
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
           f"{body}</urlset>\n")
    open(f"{ROOT}/sitemap.xml", "w", encoding="utf-8").write(xml)
    print(f"sitemap.xml: {len(entries)} URLs")


if __name__ == "__main__":
    main()
