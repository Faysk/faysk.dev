import { readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const limits = {
  css: 120 * 1024,
  js: 90 * 1024,
  html: 180 * 1024
};

const violations = [];

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const info = await stat(full);
    if (info.isDirectory()) {
      await walk(full);
      continue;
    }

    const ext = name.split(".").pop();
    const limit = limits[ext];
    if (limit && info.size > limit) {
      violations.push(relative("dist", full) + ": " + info.size + " bytes > " + limit);
    }
  }
}

await walk("dist");

if (violations.length) {
  throw new Error("Performance budget exceeded:\n" + violations.join("\n"));
}

console.log("performance budgets passed");
