// ============================================================
// ELARA STUDIO — Design Tokens
// Saare colors, fonts, spacing yaha constant hai.
// Kahin bhi color change karna ho to sirf yaha karo.
// ============================================================

export const SITE_NAME = "ELARA STUDIO";
export const SITE_TAGLINE = "Capturing Eternity";
export const ESTABLISHED_YEAR = "MMXIV";

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

export const SPACING = {
  sectionGap: "160px",
  stackMd: "16px",
  marginDesktop: "80px",
  gutter: "32px",
  marginMobile: "24px",
  stackSm: "8px",
  stackLg: "32px",
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

export const FONT_SIZE = {
  displayLgMobile: ["48px", { lineHeight: "56px", letterSpacing: "-0.01em", fontWeight: "400" }],
  bodyLg: ["18px", { lineHeight: "32px", fontWeight: "400" }],
  headlineMd: ["32px", { lineHeight: "40px", fontWeight: "400" }],
  bodyMd: ["16px", { lineHeight: "28px", fontWeight: "400" }],
  displayLg: ["80px", { lineHeight: "96px", letterSpacing: "-0.02em", fontWeight: "400" }],
  labelCaps: ["12px", { lineHeight: "16px", letterSpacing: "0.15em", fontWeight: "600" }],
  headlineLg: ["48px", { lineHeight: "56px", fontWeight: "400" }],
};

// Placeholder images (data-alt text preserved as alt for accessibility)
export const IMAGES = {
  hero: {
    src: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    alt: "A cinematic, high-fashion vertical portrait of a woman in a dramatic flowing black silk gown standing on a volcanic black sand beach at twilight.",
  },
  cathedral: {
    src: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    alt: "A grand wedding scene in a neo-gothic cathedral with dramatic shafts of light piercing through stained glass windows onto a couple standing at the altar.",
  },
  fashionCloseup: {
    src: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    alt: "A striking close-up fashion portrait of a model with intricate avant-garde makeup and gold leaf detailing on her skin.",
  },
  mountains: {
    src: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    alt: "A dramatic black and white landscape of rugged, sharp mountain peaks under a stormy, textured sky.",
  },
  event: {
    src: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    alt: "An expansive, low-light photograph of a high-end luxury cocktail event in a glass-walled rooftop lounge overlooking a glowing city skyline at night.",
  },
  elaraPortrait: {
    src: "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg",
    alt: "A professional, moody headshot of a woman named Elara with a sophisticated and confident expression.",
  },
};