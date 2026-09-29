export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  // Redireciona domínios legados e variações diretamente para o domínio canônico oficial
  if (
    host === "klausterra.blackhex.com.br" ||
    host === "www.klausterra.blackhex.com.br" ||
    host === "klausterra.hipercube.ia.br" ||
    host === "www.klausterra.com.br"
  ) {
    return Response.redirect(`https://klausterra.com.br${url.pathname}${url.search}`, 301);
  }

  // Redireciona requisições HTTP inseguras para HTTPS no domínio oficial
  const proto = context.request.headers.get("x-forwarded-proto");
  if (proto === "http" && host === "klausterra.com.br") {
    return Response.redirect(`https://klausterra.com.br${url.pathname}${url.search}`, 301);
  }

  const shortLinks = {
    "/talk": "/community-talk/?mtm_campaign=community-talk-2026&mtm_source=short-link",
  };
  const shortTarget = shortLinks[url.pathname.replace(/\/+$/, "").toLowerCase()];
  if (shortTarget) {
    return Response.redirect(`https://klausterra.com.br${shortTarget}`, 302);
  }

  return context.next();
}
