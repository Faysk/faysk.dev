import { readdir, stat, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const dist = new URL("../dist/", import.meta.url);
const root = dist.pathname;
const urls = [];

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const info = await stat(full);
    if (info.isDirectory()) await walk(full);
    else if (name === "index.html") {
      const rel = relative(root, full).split(sep).join("/");
      if (rel === "index.html" || rel === "404/index.html") continue;
      urls.push("https://faysk.dev/" + rel.replace(/index\.html$/, ""));
    }
  }
}

await walk(root);
urls.sort();
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => "  <url><loc>" + url + "</loc></url>"),
  "</urlset>",
  ""
].join("\n");

await writeFile(join(root, "sitemap.xml"), xml, "utf8");
console.log("sitemap:", urls.length, "URLs");
