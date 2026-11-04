/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#020408",
        abyss: "#04060C",
        surface: "#0A0E18",
        border: "rgba(255, 255, 255, 0.08)",
        gold: {
          antique: "#D4AF37",
          DEFAULT: "#F59E0B",
          bright: "#FBBF24",
          bronze: "#9A7B38",
          deep: "#785818",
          pale: "#FEF3C7",
        },
        amber: {
          molten: "#F97316",
          flare: "#FF5416",
          glow: "#FB923C",
        },
        indigo: {
          950: "#050814",
          900: "#0A0F24",
          800: "#101838",
          DEFAULT: "#312E81",
          light: "#6366F1",
          accent: "#818CF8",
        },
        violet: {
          dark: "#2E1065",
          DEFAULT: "#6D28D9",
          glow: "#8B5CF6",
          subtle: "#A78BFA",
        },
        starlight: {
          100: "#FFFFFF",
          200: "#F8FAFC",
          300: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
          600: "#334155",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        serif: ["Cormorant Garamond", "serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "orbit-slow": "orbit 40s linear infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "shimmer": "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};