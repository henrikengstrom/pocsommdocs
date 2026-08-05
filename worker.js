// Server-side App Store handoff — the mechanism GitHub Pages couldn't do.
//
// /go answers the very first navigation with an HTTP 302 to the App Store
// scheme, handled by the OS before an in-app browser's JS/navigation
// policies are involved. Strongest remaining candidate for escaping
// Instagram's in-app browser (all client-side attempts are blocked — see
// get/test.html). /go-web is the comparison: same server redirect but to
// the regular https App Store page.
//
// Every other request falls through to the static site.

const APP_STORE_WEB = "https://apps.apple.com/app/id6760143052";
const APP_STORE_SCHEME = "itms-apps://apps.apple.com/app/id6760143052";

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
    const { pathname } = new URL(request.url);
    const ua = request.headers.get("user-agent") || "";

    if (pathname === "/go") {
      if (/iPhone|iPad|iPod/i.test(ua)) {
        return redirect(APP_STORE_SCHEME);
      }
      // Android / desktop: the interstitial explains iPhone-only status
      // resp. forwards to the App Store web page.
      return redirect("https://pocsomm.com/get/");
    }

    if (pathname === "/go-web") {
      return redirect(APP_STORE_WEB);
    }

    return env.ASSETS.fetch(request);
  },
};
