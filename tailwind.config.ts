import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0F172A",
        foreground: "#E2E8F0",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
          hover: "#9333EA",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          foreground: "#FFFFFF",
          hover: "#6D28D9",
        },
        accent: {
          DEFAULT: "#F472B6",
          foreground: "#FFFFFF",
          hover: "#EC4899",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        highlight: "#F472B6",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "glow": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(139, 92, 246, 0.5)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 3.5s steps(40, end)",
        "cursor-blink": "blink 1s step-end infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "slide-in": "slide-in 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;