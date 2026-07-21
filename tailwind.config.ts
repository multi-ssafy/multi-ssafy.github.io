import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dfe9ff",
          200: "#c2d6ff",
          300: "#9ab8ff",
          400: "#6b91ff",
          500: "#3d66ff",
          600: "#2145f0",
          700: "#1a35d4",
          800: "#1a2ea8",
          900: "#1b2c85",
          950: "#131c52",
        },
        coral: {
          50: "#fff1f0",
          100: "#ffe0dd",
          200: "#ffc6c1",
          300: "#ff9d95",
          400: "#ff6b60",
          500: "#fa4636",
          600: "#e72b1c",
          700: "#c11f14",
          800: "#9f1e16",
          900: "#841e18",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b0b8c8",
          400: "#8590a8",
          500: "#66708c",
          600: "#515975",
          700: "#42495f",
          800: "#2c3145",
          900: "#181c2b",
          950: "#0c0f1a",
        },
        cream: {
          50: "#fffaf0",
          100: "#fff3dc",
          200: "#ffe6b3",
        },
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(19, 28, 82, 0.08)",
        card: "0 2px 8px rgba(19, 28, 82, 0.06)",
        "card-hover": "0 16px 32px -8px rgba(19, 28, 82, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grow-bar": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
