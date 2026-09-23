import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Bebas Neue", "sans-serif"],
        body:     ["Inter", "sans-serif"],
        accent:   ["Inter", "sans-serif"],
      },
      colors: {
        primary:    "#E8151B",
        "primary-dim": "#b50f14",
        background: "#ffffff",
        ink:        "#0A0A0A",
        muted:      "#888888",
        subtle:     "#F8F8F8",
      },
    },
  },
  plugins: [],
};

export default config;
