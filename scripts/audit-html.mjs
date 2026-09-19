import { access, readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = "dist";
const failures = [];
const htmlFiles = [];

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const info = await stat(full);
    if (info.isDirectory()) await walk(full);
    else if (name.endsWith(".html")) htmlFiles.push(full);
  }
}

function fail(file, message) {
  failures.push(relative(root, file) + ": " + message);
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gis)]
      .map(([, name, , value]) => [name.toLowerCase(), value])
  );
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function resolveInternal(pathname) {
  const clean = decodeURIComponent(pathname.split("#")[0].split("?")[0]);
  if (!clean || clean === "/") return join(root, "index.html");

  const rel = clean.replace(/^\/+/, "");
  if (extname(rel)) return join(root, rel);

  const direct = join(root, rel);
  const index = join(direct, "index.html");
  const html = direct + ".html";

  if (await exists(index)) return index;
  if (await exists(html)) return html;
  return index;
}

await walk(root);

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const rel = relative(root, file).replaceAll("\\", "/");

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) fail(file, "expected exactly one h1, found " + h1Count);

  const ids = [...html.matchAll(/\sid=(["'])(.*?)\1/gis)].map((match) => match[2]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) fail(file, "duplicate id #" + id);
    seen.add(id);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gis)) {
    const attrs = attributes(match[0]);
    if (!("alt" in attrs)) fail(file, "image missing alt attribute: " + match[0].slice(0, 120));
    if (attrs.src?.startsWith("/")) {
      const target = join(root, attrs.src.replace(/^\/+/, "").split("?")[0]);
      if (!(await exists(target))) fail(file, "missing image asset " + attrs.src);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*>/gis)) {
    const attrs = attributes(match[0]);
    const href = attrs.href;
    if (!href) continue;

    if (/^javascript:/i.test(href)) fail(file, "javascript: URL is not allowed");

    if (attrs.target === "_blank") {
      const relTokens = new Set((attrs.rel || "").toLowerCase().split(/\s+/).filter(Boolean));
      if (!relTokens.has("noopener")) fail(file, "target=_blank link missing rel=noopener: " + href);
    }

    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/api/")) {
      const target = await resolveInternal(href);
      if (!(await exists(target))) fail(file, "broken internal link " + href);
    }
  }

  for (const match of html.matchAll(/<button\b[^>]*>/gis)) {
    const attrs = attributes(match[0]);
    if (!attrs.type) fail(file, "button missing explicit type");
  }

  if (/localhost|127\.0\.0\.1/.test(html)) fail(file, "contains localhost reference");

  if (rel.startsWith("en/") && !/<html\b[^>]*\blang=["']en["']/i.test(html)) {
    fail(file, "English route missing lang=en");
  }

  if (rel.startsWith("pt/") && !/<html\b[^>]*\blang=["']pt["']/i.test(html)) {
    fail(file, "Portuguese route missing lang=pt");
  }

  if (rel.startsWith("en/") || rel.startsWith("pt/")) {
    if (!/<link\b[^>]*rel=["']canonical["']/i.test(html)) fail(file, "missing canonical link");
    if (!/hreflang=["']en["']/i.test(html)) fail(file, "missing English hreflang");
    if (!/hreflang=["']pt["']/i.test(html)) fail(file, "missing Portuguese hreflang");
  }

  if (rel === "404.html" && !/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    fail(file, "404 page must be noindex");
  }
}

if (failures.length) {
  throw new Error("HTML audit failed:\n" + failures.map((item) => " - " + item).join("\n"));
}

console.log("HTML audit passed for", htmlFiles.length, "pages");
