export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  // Old Hipercube personal URL → BlackHex
  if (host === "klausterra.hipercube.ia.br") {
    return Response.redirect("https://www.blackhex.com.br/", 301);
  }

  return context.next();
}
