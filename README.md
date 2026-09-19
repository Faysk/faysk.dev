# faysk.dev

Personal engineering portfolio for **Renan Silva / Faysk**.

- Production: https://faysk.dev
- LinkedIn: https://www.linkedin.com/in/-renansilva/
- GitHub: https://github.com/Faysk
- Lab: https://lab.faysk.dev

## Product goal

The site is designed as evidence, not just a résumé. It presents infrastructure, DevOps, automation and product engineering through real work, experiments and inspectable technical decisions.

The portfolio intentionally does **not** depend on having a long client list. Personal products, labs and private systems are presented according to what they actually are.

## V2 architecture

- Astro 6
- TypeScript
- CSS
- static output
- Cloudflare Pages
- optional Cloudflare Pages Function for contact delivery
- English and Portuguese routes
- System / Light / Dark theme
- no client-side UI framework

Primary routes:

~~~text
/
├── en/
│   ├── cv/
│   └── work/<slug>/
└── pt/
    ├── cv/
    └── work/<slug>/
~~~

The root route chooses an initial locale from the visitor's saved preference or browser language. Explicit language choices are persisted.

## Content model

Portfolio content lives primarily in:

~~~text
src/data/site.ts
src/data/projects.ts
src/i18n/index.ts
~~~

Projects are classified honestly as products, production builds, labs, private systems or portfolio work. Case studies focus on problem, delivery, result and technical surface.

Commercial metrics are only added when they are real and verifiable.

## Development

Node.js 22 or newer.

~~~bash
npm ci
npm run dev
~~~

Quality checks:

~~~bash
npm run check
npm run build
npm run validate
~~~

The build also generates the sitemap. Validation checks critical generated routes, metadata and initial performance budgets.

## Contact endpoint

The form progressively enhances from an email fallback to direct delivery:

~~~text
Browser
  ↓
POST /api/contact
  ↓
Cloudflare Pages Function
  ↓
Resend
  ↓
contato@faysk.dev
~~~

If the endpoint is unavailable or not configured, the browser opens a local mail draft instead of discarding the visitor's message.

Required production variables:

~~~text
RESEND_API_KEY
CONTACT_FROM
CONTACT_TO
~~~

CONTACT_TO defaults to contato@faysk.dev.

Copy .env.example for local configuration and **never commit real keys**.

Before enabling direct delivery in production:

1. verify the sending domain with the email provider;
2. set the secrets in Cloudflare Pages;
3. test the endpoint from the production domain;
4. add Turnstile/rate limiting when abuse warrants it.

## Theme

Theme preference cycles through:

~~~text
System → Light → Dark
~~~

System mode respects prefers-color-scheme. A tiny head script applies the effective theme before paint to avoid a light/dark flash.

## Internationalisation

Canonical language routes:

~~~text
/en/
/pt/
~~~

Each localized page includes canonical and hreflang metadata. Content and navigation do not rely on client-side translation.

## Case studies

Every current project has an English and Portuguese route. The structure is intentionally reusable so smaller personal projects can become strong portfolio evidence without pretending they were client engagements.

The faysk.dev case study also documents its own delivery architecture.

## CV

The web CV is available at:

~~~text
/en/cv/
/pt/cv/
~~~

It includes print CSS so the browser can save a clean PDF. The long-term goal is to keep web and downloadable CV content derived from the same factual source.

## Quality gates

GitHub Actions runs:

- production dependency audit;
- Astro type checking;
- static build;
- generated-route validation;
- metadata checks;
- performance budgets.

Dependabot monitors npm tooling and GitHub Actions monthly.

Current initial per-file budgets:

~~~text
CSS  ≤ 120 KB
JS   ≤ 90 KB
HTML ≤ 180 KB
~~~

These are guardrails, not performance targets. Real Core Web Vitals remain the product metric.

## Security and privacy

public/_headers contains the security policy for static content.

The site also publishes:

~~~text
/.well-known/security.txt
/humans.txt
~~~

The contact endpoint validates input server-side and includes a honeypot. Messages are delivered by email and are not intentionally stored in a site database.

Do not expose deployment secrets, private infrastructure, customer data or credentials in case studies.

## Deployment

Cloudflare Pages:

~~~text
Framework preset: Astro
Build command: npm run build
Build output: dist
Node: 22+
~~~

The main branch remains production. Significant work should arrive through reviewed pull requests with a green quality check.

## Maintenance guides

- [Brand integration](docs/BRAND-INTEGRATION.md)
- [Portfolio content guide](docs/CONTENT-GUIDE.md)

## Working principle

Before adding a feature:

> Does it improve the experience, the evidence, or the conversion?

If the answer is only "it shows we can code another thing", it probably does not belong here.
