// src/tokens/index.ts
//
// Values reconciled to Cashflow Intelligence Dash — the canonical aesthetic
// reference (alongside PRICC Dashboard). Keep this file in sync with
// src/styles/globals.css.

export const T = {
  // Brand
  brand: "#6874b4",
  brandLight: "#eef0fa",
  brandMid: "#a8b0d8",
  brandStrong: "#3d4785",

  // Coral (negatives / outflows)
  coral: "#b8456b",
  coralLight: "#fdf2f6",
  coralMid: "#e0a3b8",

  // Amber (warnings / flags)
  amber: "#c69b2d",
  amberMid: "#c69b2d",
  amberDark: "#7a5e1e",
  amberLight: "#fdf9ee",

  // Teal (positives / inflows — legacy)
  tealStrong: "#0f766e",
  tealLight: "#d1faf4",

  // Neutrals
  ink: "#1a1d2e",
  muted: "#525672",
  faint: "#8b8fa6",
  line: "#dfe1ee",

  // Surfaces
  bg: "#f0f1f8",
  surface: "#f6f7fc",
  wash: "#f0f1f8",
  cardBg: "rgba(255, 255, 255, 0.72)",
  cardStrong: "rgba(255, 255, 255, 0.85)",
  cardBorder: "rgba(255, 255, 255, 0.65)",

  // Radius
  radius: "20px",
  radiusSm: "12px",
  radiusLg: "28px",

  // Shadows (Cashflow's layered system)
  shadowSurface:
    "0 2px 4px 0 rgba(0,0,0,0.04), 0 1px 2px 0 rgba(0,0,0,0.06), 0 0 1px 0 rgba(0,0,0,0.04)",
  shadowSoft:
    "0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(104,116,180,0.04), 0 12px 32px rgba(104,116,180,0.03)",
  shadowLift:
    "0 2px 8px rgba(104,116,180,0.06), 0 8px 24px rgba(104,116,180,0.08), 0 20px 48px rgba(50,50,110,0.06)",
  shadowGlass:
    "0 2px 4px rgba(26, 29, 46, 0.04), 0 12px 32px rgba(26, 29, 46, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.55)",
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
