# @sidgrove/ui

Shared design system for Sidgrove internal dashboards. Colours, typography, shadcn components, glass aesthetic.

## Install (Next.js apps)

```bash
npm install "github:sidgrove/sidgrove-ui#main"
```

Then in `app/globals.css`:

```css
@import "@sidgrove/ui/styles/globals.css";
@source "../node_modules/@sidgrove/ui/src/**/*.{ts,tsx}";
```

(The `@source` directive is **mandatory** — Tailwind v4 resolves it relative to the root CSS file, so it must live in the consuming app's globals.css, not inside the kit.)

In `next.config.js` — only needed when `npm link`-ing for local dev (see dev-loop.md). For normal git-URL consumption of the compiled `dist/`, neither block is required:

```js
const path = require("path")
module.exports = {
  // Needed for npm-link dev loop only:
  webpack: (config) => {
    config.resolve.alias["react"] = path.resolve("./node_modules/react")
    config.resolve.alias["react-dom"] = path.resolve("./node_modules/react-dom")
    config.resolve.alias["next"] = path.resolve("./node_modules/next")
    return config
  },
}
```

## Install (static HTML, e.g. Month End Intelligence)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sidgrove/sidgrove-ui@main/dist/glass.css">
```

## Update

```bash
npm install "github:sidgrove/sidgrove-ui#main" --force
```

(`npm update` alone does NOT refresh git deps — use `--force`.)

## Layout primitives

Shipped in PR 0 of the design-system overhaul. Every Sidgrove Intelligence surface should compose from these.

| Primitive | Purpose | Key variants / props |
|---|---|---|
| `PageShell` | Root page wrapper — max-width + vertical rhythm | `width: "4xl" \| "5xl" \| "6xl" \| "7xl" \| "full"`, `density: "compact" \| "comfortable" \| "spacious"` |
| `PageHeader` | Page-level heading | `variant: "compact" \| "hero"`, `title`, `eyebrow`, `description`, `actions` |
| `PageHeader.Accent` | Italic-serif accent for last-word in title | Renders at `1.1em` scale to match sans-bold visual weight. Canonical pattern: `<>Month-End <PageHeader.Accent>Intelligence</PageHeader.Accent></>` |
| `Section` | Vertical-rhythm wrapper inside a page | `density: "compact" \| "comfortable"` |
| `SectionHeader` | Section-level heading | `eyebrow`, `title`, `description`, `actions` |
| `SurfaceCard` | Glass card | `density: "compact" \| "comfortable" \| "hero"`; content slots: `icon`, `label`, `primary`, `secondary`, `action`, or `children` |
| `KpiTile` | Single-stat tile | `label`, `value`, `delta`, `sublabel` |
| `DataTable` | Typed table with consistent rhythm | Generic `<T>`; `columns`, `data`, `rowKey`, `stickyHeader`, `emptyState` |
| `EmptyState` | Standard empty-state treatment | `icon`, `title`, `description`, `action` |
| `LoadingState` | Inline loading spinner | `label` (default `"Loading…"`) |
| `Toolbar` | Filter / search / action row | `leading`, `trailing`, `density: "compact" \| "comfortable"` |

**Canonical title pattern.** Hero titles across all Sidgrove Intelligence surfaces use sans-bold first segment + italic-serif last word (e.g. "Month-End *Intelligence*"). The serif auto-scales to `1.1em` relative to the surrounding sans so visual weight matches. Serif stack: `"Instrument Serif", Georgia, "Times New Roman", serif`.

**Living reference:** The monolith's `/dev/canon` route (dev-only, returns `notFound()` in production) renders every primitive in every variant. Changes here must be reflected there.

## Dev (live iteration)

See `docs/dev-loop.md`.
