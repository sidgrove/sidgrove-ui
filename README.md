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

## Dev (live iteration)

See `docs/dev-loop.md`.
