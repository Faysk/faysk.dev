const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  let input;
  try {
    input = await request.json();
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

  if (name.length < 2 || subject.length < 3 || message.length < 10 || !EMAIL_PATTERN.test(email)) {
    return json({ ok: false, error: "invalid_fields" }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM) {
    return json({ ok: false, error: "delivery_not_configured" }, 503);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": "Bearer " + env.RESEND_API_KEY,
      "content-type": "application/json"
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
