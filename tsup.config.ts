import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "next"],
  // Use automatic JSX runtime so compiled output calls _jsx() (auto-imported
  // from react/jsx-runtime) instead of React.createElement() — otherwise
  // consumers hit `ReferenceError: React is not defined` server-side.
  esbuildOptions(options) {
    options.jsx = "automatic"
  },
})
