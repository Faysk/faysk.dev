# faysk.dev

Personal portfolio for DevOps, infrastructure, CI/CD and production operations.

- Production: https://faysk.dev
- Repository: https://github.com/Faysk/faysk.dev
- Lab: https://lab.faysk.dev
- Contact: contato@faysk.dev

## Purpose

The root domain is a fast, low-maintenance introduction to Faysk's work. It prioritises three things:

1. shipped work;
2. relevant professional experience;
3. a clear operating approach.

Experiments stay in the lab and larger projects remain in their own repositories. The portfolio links to them instead of becoming a heavy application.

## Current structure

The home page is intentionally short:

- a text-led introduction with a clear DevOps proposition;
- selected client work and technical experiments with authentic screenshots;
- a compact delivery note with verifiable build signals;
- reverse-chronological professional experience;
- delivery, infrastructure and operations capabilities;
- an on-site email composer, plus GitHub and the browser lab.

The visual system uses one accent colour, editorial rows instead of repeated card grids, responsive type and hairline borders for hierarchy.

## Stack

- Astro 6
- TypeScript
- CSS
- Cloudflare Pages
- a small static output with no client-side framework or paid runtime service

## Project layout

~~~text
faysk.dev/
├── public/
│   ├── assets/
│   ├── _headers
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── components/
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   ├── pages/
│   │   └── index.astro
│   └── styles/
├── astro.config.mjs
└── package.json
~~~

## Editing content

Most portfolio content lives in src/data/projects.ts:

- site: title, description and external URLs;
- projects: published work shown on the homepage;
- careerTimeline: professional experience in reverse chronological order;
- capabilities: the three core areas in the approach section.

Add published work to projects:

~~~ts
{
  name: "Project name",
  type: "client work",
  status: "live",
  url: "https://example.com",
  repo: "https://github.com/Faysk/example",
  image: "/assets/img/projects/example.jpg",
  imageAlt: "Concise description of the real project screenshot",
  description: "One concise sentence about the problem and outcome.",
  stack: ["Astro", "TypeScript", "Cloudflare"],
  featured: true
}
~~~

Do not add placeholder projects. A smaller selection of real, reviewable work is more useful than an inventory of future ideas.

Project screenshots live in public/assets/img/projects. Capture the real production interface, keep the viewport consistent and update the alt text whenever the image changes.

## Local development

Requirements: Node.js 22 or newer.

~~~powershell
npm install
npm run dev
~~~

The local server runs at http://127.0.0.1:4321/.

Quality checks:

~~~powershell
npm run check
npm run build
~~~

Preview the static build:

~~~powershell
npm run preview
~~~

## Contact composer

The contact section is deliberately static and free:

~~~text
Form fields → local mailto draft → contato@faysk.dev
                                → Email Routing → private inbox
~~~

The browser builds the draft locally. The site does not submit, store or process the visitor's name, email, subject or message. The visitor reviews the draft in their configured email application and presses **Send** there.

This avoids a paid email-sending service, a server endpoint and anti-bot infrastructure. The trade-off is that the visitor needs an email application configured on the device. A direct mailto link remains available below the form.

contato@faysk.dev is the only destination exposed by the site. The private forwarding inbox is intentionally absent from the repository and browser bundle.

## Deployment

Recommended Cloudflare Pages settings:

~~~text
Framework preset: Astro
Build command:    npm run build
Build output:     dist
Production branch: main
Node version:     22 or newer
~~~

public/_headers provides cache and security headers for the deployed site. No Pages Function, Worker secret, Turnstile widget or Email Sending subscription is required.

## Content guidelines

- Lead with outcomes, then mention technology.
- Keep project descriptions to one useful sentence.
- Add case studies only when there is enough context to explain the problem, constraints and result.
- Keep navigation small and avoid adding a section unless it introduces new information.
- Maintain keyboard focus, reduced-motion behaviour and responsive layouts at high zoom.
- Prefer static content; add client-side JavaScript only when it creates clear user value.

## Suggested next steps

1. Publish one case study with measurable outcomes and before/after context.
2. Add privacy-friendly analytics only if there is a concrete question to answer.
3. Recheck project screenshots and external links whenever a project changes.

## Licence

MIT.
