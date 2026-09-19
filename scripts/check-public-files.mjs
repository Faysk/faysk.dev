import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = "dist";
const required = [
  "robots.txt",
  "sitemap.xml",
  "humans.txt",
  "site.webmanifest",
  ".well-known/security.txt"
];

for (const path of required) {
  await access(join(root, path));
}

const robots = await readFile(join(root, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://faysk.dev/sitemap.xml")) {
  throw new Error("robots.txt is missing the canonical sitemap URL");
}

const security = await readFile(join(root, ".well-known/security.txt"), "utf8");
for (const field of ["Contact:", "Canonical:", "Policy:", "Expires:", "Preferred-Languages:"]) {
  if (!security.includes(field)) {
    throw new Error("security.txt is missing " + field);
  }
}

const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
if (sitemap.includes("<loc>https://faysk.dev/</loc>")) {
  throw new Error("locale redirect root must not be indexed in sitemap");
}
if (/\/404\/?<\/loc>/.test(sitemap)) {
  throw new Error("404 must not be indexed in sitemap");
}
if (!sitemap.includes("<loc>https://faysk.dev/en/</loc>")) {
  throw new Error("English home missing from sitemap");
}
if (!sitemap.includes("<loc>https://faysk.dev/pt/</loc>")) {
  throw new Error("Portuguese home missing from sitemap");
}

const manifest = JSON.parse(await readFile(join(root, "site.webmanifest"), "utf8"));
if (!manifest.name || !manifest.short_name || !manifest.start_url) {
  throw new Error("web manifest is missing required product metadata");
}

console.log("public file validation passed");
