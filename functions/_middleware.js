export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  // Redireciona domínios legados diretamente para o domínio canônico oficial
  if (host === "klausterra.hipercube.ia.br" || host === "www.klausterra.blackhex.com.br") {
    return Response.redirect(`https://klausterra.blackhex.com.br${url.pathname}${url.search}`, 301);
  }

  // Redireciona requisições HTTP inseguras para HTTPS no domínio oficial
  const proto = context.request.headers.get("x-forwarded-proto");
  if (proto === "http" && host === "klausterra.blackhex.com.br") {
    return Response.redirect(`https://klausterra.blackhex.com.br${url.pathname}${url.search}`, 301);
  }

  return context.next();
}
