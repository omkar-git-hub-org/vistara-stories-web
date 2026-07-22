// ============================================================
// ELARA STUDIO — Design Tokens
// Saare colors, fonts, spacing, API yaha constant hai.
// ============================================================

export const SITE_NAME = "VISTARA STORIES";
export const SITE_TAGLINE = "Capturing Eternity";
export const ESTABLISHED_YEAR = "MMXIV";

export const API_URL = "https://7g8fmbuxjc.execute-api.ap-south-1.amazonaws.com/events";

export const COLORS = {
  primaryFixed: "#ffe088",
  secondaryContainer: "#474746",
  onSecondaryFixedVariant: "#474746",
  surface: "#121414",
  onPrimary: "#3c2f00",
  tertiaryFixed: "#e5e2e1",
  background: "#121414",
  tertiaryContainer: "#b5b2b2",
  inverseOnSurface: "#2f3131",
  surfaceBright: "#38393a",
  onTertiary: "#313030",
  onPrimaryFixed: "#241a00",
  primaryFixedDim: "#e9c349",
  tertiary: "#d0cecd",
  onError: "#690005",
  surfaceContainerLow: "#1a1c1c",
  onPrimaryFixedVariant: "#574500",
  secondaryFixed: "#e5e2e1",
  surfaceContainerHigh: "#282a2b",
  error: "#ffb4ab",
  inversePrimary: "#735c00",
  onSecondary: "#313030",
  tertiaryFixedDim: "#c9c6c5",
  surfaceDim: "#121414",
  onSurface: "#e2e2e2",
  onSurfaceVariant: "#d0c5af",
  outlineVariant: "#4d4635",
  surfaceTint: "#e9c349",
  surfaceContainerHighest: "#333535",
  onErrorContainer: "#ffdad6",
  onTertiaryFixedVariant: "#474646",
  outline: "#99907c",
  surfaceContainerLowest: "#0c0f0f",
  errorContainer: "#93000a",
  onTertiaryFixed: "#1c1b1b",
  onPrimaryContainer: "#554300",
  inverseSurface: "#e2e2e2",
  onTertiaryContainer: "#464545",
  onSecondaryContainer: "#b7b5b4",
  secondaryFixedDim: "#c8c6c5",
  surfaceVariant: "#333535",
  primaryContainer: "#d4af37",
  surfaceContainer: "#1e2020",
  onSecondaryFixed: "#1c1b1b",
  secondary: "#c8c6c5",
  primary: "#f2ca50",
  onBackground: "#e2e2e2",
};

export const RADIUS = {
  DEFAULT: "0.25rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
};

// Fluid spacing — chhote screen pe kam, bade screen pe zyada, automatically
export const SPACING = {
  sectionGap: "clamp(64px, 10vw, 160px)",
  stackMd: "16px",
  marginDesktop: "clamp(24px, 6vw, 80px)",
  gutter: "clamp(16px, 3vw, 32px)",
  marginMobile: "clamp(16px, 5vw, 24px)",
  stackSm: "8px",
  stackLg: "clamp(20px, 3vw, 32px)",
};

export const FONT_FAMILY = {
  displayLgMobile: ["Playfair Display"],
  bodyLg: ["Hanken Grotesk"],
  headlineMd: ["Playfair Display"],
  bodyMd: ["Hanken Grotesk"],
  displayLg: ["Playfair Display"],
  labelCaps: ["Hanken Grotesk"],
  headlineLg: ["Playfair Display"],
};

// Fluid font sizes — ab har device pe apne aap sahi size me scale honge
export const FONT_SIZE = {
  displayLgMobile: ["clamp(2.25rem, 8vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }],
  bodyLg: ["clamp(1rem, 0.6vw + 0.85rem, 1.125rem)", { lineHeight: "1.7", fontWeight: "400" }],
  headlineMd: ["clamp(1.375rem, 1.2vw + 1rem, 2rem)", { lineHeight: "1.3", fontWeight: "400" }],
  bodyMd: ["clamp(0.9rem, 0.4vw + 0.8rem, 1rem)", { lineHeight: "1.7", fontWeight: "400" }],
  displayLg: ["clamp(2.75rem, 5vw + 1rem, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "400" }],
  labelCaps: ["12px", { lineHeight: "16px", letterSpacing: "0.15em", fontWeight: "600" }],
  headlineLg: ["clamp(1.75rem, 2.2vw + 1rem, 3rem)", { lineHeight: "1.15", fontWeight: "400" }],
};

export const IMAGES = {
  hero: {
    src: "https://cdnx.premiumread.com/?url=https://www.japantimes.co.jp/japantimes/uploads/images/2026/06/08/544414.jpg&amp;q=100&amp;f=webp&amp;t=1.53",
    alt: "A cinematic, high-fashion vertical portrait of a woman in a dramatic flowing black silk gown at twilight.",
  },
  elaraPortrait: {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    alt: "A professional, moody headshot of a woman named Elara with a sophisticated and confident expression.",
  },
};