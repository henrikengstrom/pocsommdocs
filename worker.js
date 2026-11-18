// /go — the universal "get the app" link, safe to use anywhere (bio links,
// QR codes, email signatures, social posts):
//   - iPhone in a real browser → 302 to the App Store scheme (direct open)
//   - iPhone in an IN-APP browser (Instagram/Facebook/TikTok…) → 302 to the
//     /get interstitial. Verified 2026-08-05: Instagram blocks App Store
//     handoffs at EVERY layer — client-side taps/schemes (see get/test.html)
//     AND server-side 302s on the initial navigation, to both itms-apps://
//     and apps.apple.com (white screen both ways). The interstitial's
//     "open in external browser" instructions are the practical optimum.
//   - Android/desktop → /get (explains iPhone-only resp. forwards to store)
//
// Campaign codes: /go?ct=share (share card) and /go?ct=style (taste-style
// share) carry an App Store Connect campaign token through every route, so
// App Analytics can count installs per campaign. Nothing is logged or stored
// here; Apple does the counting. Apple only attributes `ct` together with the
// provider token `pt` (App Store Connect → App Analytics → Campaigns →
// Generate Campaign Link; it's the number after `pt=`).
//
// Every other request falls through to the static site.

const APP_STORE_SCHEME = "itms-apps://apps.apple.com/app/id6760143052";
const PROVIDER_TOKEN = ""; // TODO(Henrik): paste the pt= value from App Store Connect

// Only short, plain campaign names pass through; anything else is dropped.
function campaignToken(url) {
  const ct = url.searchParams.get("ct") || "";
  return /^[A-Za-z0-9_-]{1,40}$/.test(ct) ? ct : "";
}

function storeQuery(ct) {
  if (!ct) return "";
  const params = new URLSearchParams();
  if (PROVIDER_TOKEN) params.set("pt", PROVIDER_TOKEN);
  params.set("ct", ct);
  params.set("mt", "8");
  return "?" + params.toString();
}

function redirect(location) {
  return new Response(null, {
    status: 302,
    headers: {
      "Location": location,
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    const ua = request.headers.get("user-agent") || "";

    if (pathname === "/go") {
      const isInApp = /Instagram|FBAN|FBAV|FB_IAB|TikTok|musical_ly|Snapchat|Line\//i.test(ua);
      const ct = campaignToken(url);
      if (!isInApp && /iPhone|iPad|iPod/i.test(ua)) {
        return redirect(APP_STORE_SCHEME + storeQuery(ct));
      }
      // Keep the code on /get so it survives "open in external browser".
      return redirect("https://pocsomm.com/get/" + (ct ? "?ct=" + ct : ""));
    }

    return env.ASSETS.fetch(request);
  },
};
