const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUEST_ID_PATTERN = /^[a-zA-Z0-9_-]{8,128}$/;
const MAX_BODY_BYTES = 16 * 1024;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function clean(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

export async function onRequestPost({ request, env }) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return json({ ok: false, error: "unsupported_media_type" }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "payload_too_large" }, 413);
  }

  let raw;
  try {
    raw = await request.text();
  } catch {
    return json({ ok: false, error: "invalid_body" }, 400);
  }

  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "payload_too_large" }, 413);
  }

  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const website = clean(input.website, 200);
  if (website) return json({ ok: true });

  const name = clean(input.name, 100);
  const email = clean(input.email, 254);
  const subject = clean(input.subject, 140).replace(/[\r\n]+/g, " ");
  const message = clean(input.message, 4000);
  const locale = clean(input.locale, 8);
  const requestId = clean(input.requestId, 128);

  if (
    name.length < 2 ||
    subject.length < 3 ||
    message.length < 10 ||
    !EMAIL_PATTERN.test(email) ||
    !REQUEST_ID_PATTERN.test(requestId)
  ) {
    return json({ ok: false, error: "invalid_fields" }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM) {
    return json({ ok: false, error: "delivery_not_configured" }, 503);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": "Bearer " + env.RESEND_API_KEY,
      "content-type": "application/json",
      "idempotency-key": "portfolio-contact/" + requestId
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO || "contato@faysk.dev"],
      reply_to: email,
      subject: "[faysk.dev] " + subject,
      text: [
        "Name: " + name,
        "Reply email: " + email,
        "Locale: " + locale,
        "",
        message
      ].join("\n")
    })
  });

  if (!response.ok) {
    return json({ ok: false, error: "delivery_failed" }, 502);
  }

  return json({ ok: true }, 200);
}

export function onRequest() {
  return json({ ok: false, error: "method_not_allowed" }, 405);
}
