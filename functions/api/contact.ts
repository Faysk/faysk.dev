interface Env {
  RESEND_API_KEY?: string;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
}

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

const jsonResponse = (body: Record<string, string>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
      "X-Content-Type-Options": "nosniff"
    }
  });

const isValidEmail = (value: string) =>
  value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const readBody = async (request: Request, maximumBytes: number) => {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let byteLength = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    byteLength += value.byteLength;
    if (byteLength > maximumBytes) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
};

export const onRequestPost = async ({
  request,
  env
}: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const origin = request.headers.get("Origin");
  if (!origin || origin !== new URL(request.url).origin) {
    return jsonResponse({ error: "Request origin could not be verified." }, 403);
  }

  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
    return jsonResponse({ error: "Expected a JSON request." }, 415);
  }

  const contentLength = Number(request.headers.get("Content-Length") ?? 0);
  if (contentLength > 8192) {
    return jsonResponse({ error: "Message is too large." }, 413);
  }

  let rawBody: string | null;
  try {
    rawBody = await readBody(request, 8192);
  } catch {
    return jsonResponse({ error: "Message could not be read." }, 400);
  }

  if (rawBody === null) {
    return jsonResponse({ error: "Message is too large." }, 413);
  }

  let decoded: unknown;
  try {
    decoded = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: "Message could not be read." }, 400);
  }

  if (typeof decoded !== "object" || decoded === null || Array.isArray(decoded)) {
    return jsonResponse({ error: "Message fields are invalid." }, 400);
  }
  const payload = decoded as Partial<ContactMessage>;

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject =
    typeof payload.subject === "string" ? payload.subject.trim().replace(/[\r\n]+/g, " ") : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";

  if (website) {
    return jsonResponse({ error: "Message could not be sent." }, 400);
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    !isValidEmail(email) ||
    subject.length < 3 ||
    subject.length > 140 ||
    message.length < 10 ||
    message.length > 4000
  ) {
    return jsonResponse({ error: "Check the message fields and try again." }, 400);
  }

  const apiKey = env.RESEND_API_KEY?.trim();
  const from = env.CONTACT_FROM?.trim();
  const to = env.CONTACT_TO?.trim();
  if (!apiKey || !from || !isValidEmail(to ?? "")) {
    return jsonResponse({ error: "Email delivery is not configured yet." }, 503);
  }

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website contact: ${subject}`,
        text: `Name: ${name}\nReply email: ${email}\n\n${message}`
      })
    });
  } catch {
    return jsonResponse({ error: "Email delivery failed. Please use the direct email link." }, 502);
  }

  if (!resendResponse.ok) {
    return jsonResponse({ error: "Email delivery failed. Please use the direct email link." }, 502);
  }

  return jsonResponse({ message: "Your message has been sent." }, 200);
};
