export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  if (host === "klausterra.blackhex.com.br" && (url.pathname === "/" || url.pathname === "")) {
    url.pathname = "/links/";
    return Response.redirect(url.toString(), 302);
  }
  return context.next();
}
