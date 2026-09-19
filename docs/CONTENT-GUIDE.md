# Portfolio content guide

This document keeps portfolio evidence consistent as new work is added.

## Principle

A project belongs in the portfolio when it helps answer at least one of these questions:

- What problem can Renan solve?
- What engineering decision can he explain?
- What production responsibility can he demonstrate?
- What did the work improve or enable?

A project does not need to be paid client work to be credible.

## Project classification

Use the most accurate label.

### Production build

A real system or website running for an external organisation or user.

Do not imply commercial ownership, scale or results that are not documented.

### Product

A functioning product with real workflows, users or meaningful product behaviour.

Personal ownership is fine. Say so through the context instead of disguising it as client work.

### Lab / experiment

A technical exploration built to learn, verify or demonstrate a capability.

The value is the question investigated and what the implementation proves.

### Private system

A real working system whose internal data or implementation cannot be fully public.

Show only the surface that is safe to disclose. Never fill missing proof with invented claims.

### Portfolio build

A focused site or presentation project where the main evidence is UX, responsive execution, delivery quality or maintainability.

## Required case-study story

Every project should be explainable through four layers.

### 1. Problem

Describe the constraint or friction before describing technology.

Good:

> Match information, predictions and pool progression were split across separate interactions.

Weak:

> I wanted to build something with Next.js.

### 2. Decision / delivery

Explain what was actually designed or implemented and why that approach made sense.

Prefer concrete engineering decisions over a tool inventory.

### 3. Result

State what exists now because of the work.

A result can be qualitative when no trustworthy metric exists:

- live production path;
- fewer manual steps;
- consolidated operational workflow;
- inspectable public experiment;
- reproducible deployment process.

Do not turn qualitative outcomes into fake percentages.

### 4. Evidence

Use one or more of:

- live URL;
- public source;
- architecture diagram;
- screenshot;
- reproducible workflow;
- documented implementation detail;
- verified metric;
- public release/deployment.

## Metrics rule

Numbers need a source.

Acceptable examples:

- measured Lighthouse/Core Web Vitals result with date and environment;
- deployment/build timings from CI;
- documented reduction in manual steps;
- repository history;
- real usage or business metrics supplied by the owner.

Avoid:

- estimated conversion uplift presented as fact;
- invented user counts;
- synthetic "99.9% uptime" claims without monitoring evidence;
- percentages chosen because they sound professional.

When the evidence is unavailable, use precise qualitative language instead.

## Client and employer confidentiality

Never publish:

- credentials or secrets;
- customer data;
- private hostnames or IP addresses;
- internal-only architecture that creates unnecessary security exposure;
- proprietary source code without permission;
- screenshots containing personal data;
- confidential business metrics.

Generalise architecture where necessary.

## Screenshots

A screenshot should prove something.

Prefer:

- complete product states;
- operational dashboards with safe data;
- responsive views that demonstrate a design decision;
- a workflow before/after when both states are legitimate.

Avoid decorative screenshot walls with no explanation.

## Technology lists

Technology tags are supporting evidence, not the headline.

Keep them limited to technologies materially used by the project.

Do not add a tool merely because it exists elsewhere in the stack.

## English and Portuguese

Both language versions should express the same factual claim, but do not translate word-for-word when that makes the language unnatural.

Technical product names remain unchanged when they are established terms.

Before publishing a project, verify both language versions together.

## Private projects

Private work can be strong evidence when the boundary itself is explicit.

Use labels such as:

- Private system
- Internal tool
- Private operations workspace

Explain what the system does without pretending the inaccessible implementation is publicly verifiable.

## Updating an existing case study

When new evidence becomes available, prefer strengthening the existing case study rather than adding more generic copy.

Priority order:

1. real outcome;
2. technical decision;
3. architecture;
4. real screenshot;
5. measured metric;
6. additional technology tag.

## Final test

Before publishing, ask:

> If the project name and technology tags disappeared, would the story still demonstrate engineering judgment?

If not, the case study needs more substance.
