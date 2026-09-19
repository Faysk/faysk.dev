import { readFile, access } from "node:fs/promises";
import { join } from "node:path";

const required = [
  "en/index.html",
  "pt/index.html",
  "en/cv/index.html",
  "pt/cv/index.html",
  "en/work/faysk-dev/index.html",
  "pt/work/faysk-dev/index.html",
  "404.html",
  "sitemap.xml"
];

for (const file of required) await access(join("dist", file));

for (const file of ["en/index.html", "pt/index.html", "en/cv/index.html", "pt/cv/index.html"]) {
  const html = await readFile(join("dist", file), "utf8");
  for (const token of ['<meta name="description"', '<link rel="canonical"', 'hreflang="en"', 'hreflang="pt"', 'property="og:title"']) {
    if (!html.includes(token)) throw new Error(file + " missing " + token);
  }
}

console.log("dist validation passed");
