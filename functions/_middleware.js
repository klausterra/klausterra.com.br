/** Redirect legacy Hipercube host to BlackHex. */
export async function onRequest(context) {
  const url = new URL(context.request.url)
  if (url.hostname === 'klausterra.hipercube.ia.br') {
    return Response.redirect(
      `https://klausterra.blackhex.com.br${url.pathname}${url.search}`,
      301,
    )
  }
  return context.next()
}
