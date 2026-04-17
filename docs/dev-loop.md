# Dev loop — iterating on @sidgrove/ui with live preview

When you're actively polishing the kit and want to see changes reflected instantly in a consuming app, avoid the git-push-npm-install cycle. Two options:

## Option A — webpack aliases + npm link (recommended for one-off sessions)

In the consuming app's `next.config.js`, ensure you have:

```js
const path = require("path")
module.exports = {
  webpack: (config) => {
    config.resolve.alias["react"] = path.resolve("./node_modules/react")
    config.resolve.alias["react-dom"] = path.resolve("./node_modules/react-dom")
    config.resolve.alias["next"] = path.resolve("./node_modules/next")
    return config
  },
}
```

Then:

```bash
# In sidgrove-ui:
cd "C:/Users/david/Sidgrove Dev/sidgrove-ui"
npm link
npm run dev   # tsup --watch

# In consuming app (e.g. Cashflow):
cd "C:/Users/david/Sidgrove Dev/~Internal Dev/Cashflow Intelligence Dash"
npm link @sidgrove/ui
npm run dev
```

Edits in the kit rebuild `dist/` automatically; Next.js picks up changes on the next request (or with HMR).

When done:

```bash
cd "C:/Users/david/Sidgrove Dev/~Internal Dev/Cashflow Intelligence Dash"
npm unlink @sidgrove/ui
npm install
```

## Option B — yalc (fallback if Option A hits React-duplication)

```bash
npm install -g yalc

# In sidgrove-ui:
cd "C:/Users/david/Sidgrove Dev/sidgrove-ui"
npm run build
yalc publish

# In consuming app:
cd "C:/Users/david/Sidgrove Dev/~Internal Dev/Cashflow Intelligence Dash"
yalc add @sidgrove/ui
npm install
```

After edits:

```bash
cd "C:/Users/david/Sidgrove Dev/sidgrove-ui"
npm run build
yalc push   # pushes to all consumers
```

When done:

```bash
yalc remove @sidgrove/ui
npm install
```

## Ship the changes

When happy:

```bash
cd "C:/Users/david/Sidgrove Dev/sidgrove-ui"
git add -A && git commit -m "feat: <what>"
git push

# In each consuming app:
cd "C:/Users/david/Sidgrove Dev/~Internal Dev/<app>"
npm install "github:sidgrove/sidgrove-ui#main" --force
git add package-lock.json
git commit -m "chore: bump @sidgrove/ui"
git push
```

(`npm update` alone won't refresh git deps — `--force` is required.)
