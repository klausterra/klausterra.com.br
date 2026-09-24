const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "*",
  "cache-control": "public, max-age=300",
};

const ALLOWED_HOSTS = new Set([
  "lnkd.in",
  "linkedin.com",
  "www.linkedin.com",
]);

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: JSON_HEADERS,
  });
}

function extractActivityId(url) {
  const decoded = decodeURIComponent(url);

  const patterns = [
    /activity-(\d{10,})/i,
    /urn:li:activity:(\d{10,})/i,
    /urn%3Ali%3Aactivity%3A(\d{10,})/i,
  ];

  for (const pattern of patterns) {
    const match = decoded.match(pattern);
    if (match) return match[1];
  }

  return null;
}

export async function onRequestGet(context) {
  const requestUrl = new URL(context.request.url);
  const raw = requestUrl.searchParams.get("url");

  if (!raw) {
    return json(
      {
        ok: false,
        error: "missing_url",
        usage: "/api/resolve-link?url=https%3A%2F%2Flnkd.in%2Fp%2F...",
      },
      400,
    );
  }

  let current;
  try {
    current = new URL(raw);
  } catch {
    return json({ ok: false, error: "invalid_url" }, 400);
  }

  if (
    current.protocol !== "https:" ||
    current.hostname.toLowerCase() !== "lnkd.in" ||
    !current.pathname.startsWith("/p/")
  ) {
    return json(
      {
        ok: false,
        error: "unsupported_url",
        message: "Only https://lnkd.in/p/... links are accepted.",
      },
      400,
    );
  }

  const chain = [];
  const maxHops = 6;

  try {
    for (let hop = 0; hop < maxHops; hop += 1) {
      const response = await fetch(current.toString(), {
        method: "GET",
        redirect: "manual",
        headers: {
          accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
          "accept-language": "pt-BR,pt;q=0.9,en;q=0.8",
        },
      });

      const location = response.headers.get("location");
      chain.push({
        url: current.toString(),
        status: response.status,
        location,
      });

      if (!location) break;

      const next = new URL(location, current);
      const nextHost = next.hostname.toLowerCase();

      if (next.protocol !== "https:" || !ALLOWED_HOSTS.has(nextHost)) {
        return json(
          {
            ok: false,
            error: "unexpected_redirect_host",
            host: nextHost,
            chain,
          },
          502,
        );
      }

      current = next;

      if (
        (nextHost === "linkedin.com" || nextHost === "www.linkedin.com") &&
        (next.pathname.includes("/posts/") ||
          next.pathname.includes("/feed/update/") ||
          next.href.includes("urn:li:activity"))
      ) {
        break;
      }
    }

    const finalUrl = current.toString();
    const activityId = extractActivityId(finalUrl);

    return json({
      ok: true,
      inputUrl: raw,
      finalUrl,
      activityId,
      activityUrn: activityId ? `urn:li:activity:${activityId}` : null,
      candidatePostUrns: activityId
        ? [
            `urn:li:share:${activityId}`,
            `urn:li:ugcPost:${activityId}`,
          ]
        : [],
      chain,
    });
  } catch (error) {
    return json(
      {
        ok: false,
        error: "resolve_failed",
        message: error instanceof Error ? error.message : String(error),
        chain,
      },
      502,
    );
  }
}
