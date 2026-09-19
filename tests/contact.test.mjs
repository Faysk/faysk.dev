import test from "node:test";
import assert from "node:assert/strict";
import { onRequest, onRequestPost } from "../functions/api/contact.js";

const validPayload = {
  name: "Renan Test",
  email: "renan@example.com",
  subject: "Portfolio contact",
  message: "This is a sufficiently long test message.",
  website: "",
  locale: "en",
  requestId: "123e4567-e89b-12d3-a456-426614174000"
};

function request(payload, headers = {}) {
  return new Request("https://faysk.dev/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...headers
    },
    body: typeof payload === "string" ? payload : JSON.stringify(payload)
  });
}

test("rejects unsupported methods", async () => {
  const response = onRequest();
  assert.equal(response.status, 405);
  assert.deepEqual(await response.json(), { ok: false, error: "method_not_allowed" });
});

test("rejects malformed JSON", async () => {
  const response = await onRequestPost({
    request: request("{"),
    env: {}
  });
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, "invalid_json");
});

test("rejects oversized declared payloads before parsing", async () => {
  const response = await onRequestPost({
    request: request(validPayload, { "content-length": String(20 * 1024) }),
    env: {}
  });
  assert.equal(response.status, 413);
  assert.equal((await response.json()).error, "payload_too_large");
});

test("silently accepts honeypot submissions", async () => {
  const response = await onRequestPost({
    request: request({ ...validPayload, website: "https://spam.example" }),
    env: {}
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test("validates required fields and request id", async () => {
  const response = await onRequestPost({
    request: request({ ...validPayload, email: "not-an-email", requestId: "tiny" }),
    env: {}
  });
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, "invalid_fields");
});

test("returns a safe configuration error when delivery is not configured", async () => {
  const response = await onRequestPost({
    request: request(validPayload),
    env: {}
  });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error, "delivery_not_configured");
});

test("sends a validated idempotent email request", async () => {
  const originalFetch = globalThis.fetch;
  let captured;

  globalThis.fetch = async (url, init) => {
    captured = { url, init };
    return new Response(JSON.stringify({ id: "email_123" }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  };

  try {
    const response = await onRequestPost({
      request: request(validPayload),
      env: {
        RESEND_API_KEY: "re_test",
        CONTACT_FROM: "Faysk <contact@example.com>",
        CONTACT_TO: "contato@faysk.dev"
      }
    });

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
    assert.equal(captured.url, "https://api.resend.com/emails");
    assert.equal(captured.init.method, "POST");
    assert.equal(captured.init.headers.authorization, "Bearer re_test");
    assert.equal(
      captured.init.headers["idempotency-key"],
      "portfolio-contact/" + validPayload.requestId
    );

    const body = JSON.parse(captured.init.body);
    assert.deepEqual(body.to, ["contato@faysk.dev"]);
    assert.equal(body.reply_to, validPayload.email);
    assert.match(body.subject, /^\[faysk\.dev\]/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("does not leak provider errors", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response("provider failure", { status: 500 });

  try {
    const response = await onRequestPost({
      request: request(validPayload),
      env: {
        RESEND_API_KEY: "re_test",
        CONTACT_FROM: "Faysk <contact@example.com>"
      }
    });

    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { ok: false, error: "delivery_failed" });
  } finally {
    globalThis.fetch = originalFetch;
  }
});
