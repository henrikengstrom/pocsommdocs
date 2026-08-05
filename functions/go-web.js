// Comparison experiment for /go: same server-side 302, but to the regular
// https App Store page instead of the itms-apps scheme. Tests whether
// Instagram's browser treats an apps.apple.com SERVER redirect on initial
// navigation differently from an in-page link tap (which it blocks).
export function onRequest() {
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "https://apps.apple.com/app/id6760143052",
      "Cache-Control": "no-store",
    },
  });
}
