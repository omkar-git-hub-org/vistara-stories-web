/** @type {import('tailwindcss').Config} */
import { COLORS, RADIUS, SPACING, FONT_FAMILY, FONT_SIZE } from "./src/constants/theme.js";

// Tailwind colors expect camelCase -> kebab-case keys (e.g. primary-fixed)
function toKebabKeys(obj) {
  const out = {};
  for (const key in obj) {
    const kebab = key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    out[kebab] = obj[key];
  }
  return out;
}

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: toKebabKeys(COLORS),
      borderRadius: RADIUS,
      spacing: SPACING,
      fontFamily: toKebabKeys(FONT_FAMILY),
      fontSize: toKebabKeys(FONT_SIZE),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};