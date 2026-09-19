# Brand integration contract

The V2 keeps brand decisions separate from product structure as much as possible.

When the visual identity is finalized, prefer changing the following surfaces instead of rewriting page components.

## 1. Semantic design tokens

Primary file:

`src/styles/tokens.css`

The site consumes semantic tokens rather than brand-specific names.

### Typography

- `--font-sans`
- `--font-mono`

### Surfaces

- `--page`
- `--page-soft`
- `--surface`
- `--surface-solid`

### Text

- `--ink`
- `--ink-soft`
- `--muted`
- `--ink-dim`

### Borders and accents

- `--line`
- `--line-strong`
- `--accent`
- `--accent-strong`
- `--accent-soft`
- `--focus`

### Geometry and motion

- `--container`
- `--gutter`
- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- motion duration/easing tokens

Light values live in `:root`. Dark values override only what changes under `:root[data-theme="dark"]`.

Keep contrast and focus visibility intact when replacing the palette.

## 2. Browser chrome colours

Primary file:

`src/data/theme.ts`

These values drive the browser `theme-color` metadata and update when the user switches themes.

Keep them aligned with the final page background values in `tokens.css`.

## 3. Brand assets

Current replaceable asset slots:

```text
public/assets/icons/mark.svg
public/favicon.svg
public/assets/img/og-card.png
public/site.webmanifest
```

The header mark is rendered at 36 × 36 CSS pixels but the SVG should remain vector and responsive.

The favicon should remain an SVG source. Extra PNG/app-icon sizes can be added when the final mark is approved.

The social card should be exported at a social-preview-friendly landscape ratio; 1200 × 630 is the preferred final target.

## 4. Project imagery

Project screenshots live under:

`public/assets/img/projects/`

These are content assets, not brand assets. Avoid baking typography or UI chrome into them unless it is part of the project being shown.

## 5. Component contract

The identity layer should not need to change:

- routing;
- locale architecture;
- case-study data;
- contact behaviour;
- SEO schemas;
- quality scripts;
- form validation.

Changing layout composition is allowed when the identity calls for it, but keep semantic landmarks, heading hierarchy, keyboard behaviour and minimum interactive target sizes.

## 6. Theme requirements

The theme control supports exactly:

```text
System → Light → Dark
```

Do not remove System mode.

The pre-paint theme script exists to prevent a flash of the wrong theme. Any redesign should preserve that behaviour.

## 7. Before merging the final identity

Run:

```bash
npm run quality
```

Then perform the visual pass on the Cloudflare preview for:

- desktop light;
- desktop dark;
- compact mobile;
- English;
- Portuguese;
- CV print/PDF;
- social preview assets.

Lighthouse, axe/browser E2E and final Core Web Vitals checks should happen after fonts, final imagery and layout are stable.
