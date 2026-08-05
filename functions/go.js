// Server-side App Store handoff — the mechanism GitHub Pages couldn't do.
// The very first navigation to /go answers with an HTTP 302 whose Location
// is the App Store scheme, handled by the OS before the in-app browser's
// JS/navigation policies are involved. This is the strongest remaining
// candidate for escaping Instagram's in-app browser (client-side attempts
// are all blocked — see get/test.html).
export function onRequest({ request }) {
  const ua = request.headers.get("user-agent") || "";
  const APP_STORE_SCHEME = "itms-apps://apps.apple.com/app/id6760143052";

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return new Response(null, {
      status: 302,
      headers: {
        "Location": APP_STORE_SCHEME,
        "Cache-Control": "no-store",
      },
    });
  }

  // Android / desktop: hand off to the interstitial, which explains
  // iPhone-only status resp. forwards to the App Store web page.
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "https://pocsomm.com/get/",
      "Cache-Control": "no-store",
    },
  });
}
