// src/tokens/index.ts

export const T = {
  // Brand
  brand: "#6874b4",
  brandStrong: "#4f5aa3",
  brandLight: "#e8eaf5",

  // Semantic
  tealStrong: "#0f766e",
  tealLight: "#d1faf4",
  coral: "#b8456b",
  coralLight: "#fce1ea",
  amberMid: "#c69b2d",
  amberLight: "#fdf2d2",

  // Neutrals (cool-slate with blue undertone)
  ink: "#0f1223",
  muted: "#5a607a",
  faint: "#9aa0bf",
  line: "#e4e6f0",

  // Surfaces
  bg: "#f0f1f8",
  cardBg: "rgba(255, 255, 255, 0.78)",
  cardBorder: "rgba(255, 255, 255, 0.65)",

  // Radius
  radius: "20px",
  radiusSm: "12px",
  radiusLg: "28px",

  // Shadows (multi-layer, diffuse)
  shadowSoft:
    "0 1px 2px rgba(15, 18, 35, 0.04), 0 4px 12px rgba(15, 18, 35, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
  shadowGlass:
    "0 2px 4px rgba(15, 18, 35, 0.04), 0 12px 32px rgba(15, 18, 35, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.55)",
} as const

export type BrandToken = typeof T

// CSS custom property names (map to same values at runtime)
export const cssVars = {
  brand: "var(--sg-brand)",
  brandStrong: "var(--sg-brand-strong)",
  ink: "var(--sg-ink)",
  muted: "var(--sg-muted)",
  cardBg: "var(--sg-card-bg)",
  cardBorder: "var(--sg-card-border)",
  radius: "var(--sg-radius)",
  shadowGlass: "var(--sg-shadow-glass)",
} as const
