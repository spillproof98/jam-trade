import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0E14",
        surface: "#11151C",
        surfaceHover: "#161B26",
        border: "#1E2433",

        primary: "#5B7CFA",
        primaryHover: "#6C8CFF",

        success: "#16C784",
        danger: "#EA3943",
        warning: "#F3BA2F",

        textPrimary: "#E6E8EB",
        textSecondary: "#9AA4B2",
        textMuted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
