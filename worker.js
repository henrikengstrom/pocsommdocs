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
// Every other request falls through to the static site.

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
      const isInApp = /Instagram|FBAN|FBAV|FB_IAB|TikTok|musical_ly|Snapchat|Line\//i.test(ua);
      if (!isInApp && /iPhone|iPad|iPod/i.test(ua)) {
        return redirect(APP_STORE_SCHEME);
      }
      return redirect("https://pocsomm.com/get/");
    }

    return env.ASSETS.fetch(request);
  },
};
