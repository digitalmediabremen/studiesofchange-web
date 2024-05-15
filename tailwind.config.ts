import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        sans: ["Helvetica", "ui-sans-serif", "system-ui"],
        serif: ["serif"],
      },
      animation: {
        bg: "10s bg alternate infinite",
        bg2: "16s bg alternate infinite",
        arrow: "19s arrow alternate infinite",
        "arrow-flip": "8s arrow-flip alternate infinite"
      },
      keyframes: {
        bg: {
          from: { transform: "translate(0, 0) rotate(0)" },
          to: { transform: "translate(0, -30px) rotate(0)" }
        },
        arrow: {
          from: { transform: "translate(-10px, 20px) rotate(0)" },
          "50%": { transform: "translate(-10px, 0) rotate(0)" },
          to: { transform: "translate(0, 0) rotate(2deg)" }
        },
        "arrow-flip": {
          from: { transform: "rotate(180deg) translate(-10px, 20px)" },
          to: { transform: "rotate(183deg) translate(-5px, 10px)" }
        }
      },
    },
  },
  plugins: [

  ],
};
export default config;
