import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const roots = [".github", "functions", "scripts", "src", "public"];
const files = ["README.md", "SECURITY.md", ".env.example", "astro.config.mjs", "package.json", "tsconfig.json"];
const ignoredExtensions = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".woff", ".woff2", ".pdf"]);
const findings = [];

const patterns = [
  ["private key", /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/],
  ["GitHub token", /\bgh[pousr]_[A-Za-z0-9]{30,}\b/],
  ["Resend API key", /\bre_[A-Za-z0-9_-]{20,}\b/],
  ["AWS access key", /\bAKIA[A-Z0-9]{16}\b/],
  ["OpenAI-style secret", /\bsk-[A-Za-z0-9_-]{32,}\b/]
];

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const info = await stat(full);
    if (info.isDirectory()) {
      await walk(full);
      continue;
    }
    if (!ignoredExtensions.has(extname(name).toLowerCase())) files.push(full);
  }
}

for (const root of roots) {
  try {
    await walk(root);
  } catch {
    // Optional directory.
  }
}

for (const file of [...new Set(files)]) {
  let content;
  try {
    content = await readFile(file, "utf8");
  } catch {
    continue;
  }

  for (const [label, pattern] of patterns) {
    if (pattern.test(content)) findings.push(relative(".", file) + ": possible " + label);
  }
}

if (findings.length) {
  throw new Error("Potential committed secrets detected:\n" + findings.map((item) => " - " + item).join("\n"));
}

console.log("secret-pattern scan passed");
