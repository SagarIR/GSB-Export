import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GSB Official Brand Colors from Logo
        brand: {
          navy: "#0A1C33",    // Primary GSB Deep Navy from "GSB"
          blue: "#0F4C81",    // Corporate Steel Blue from "EXPORT"
          orange: "#F36C21",  // Vibrant Thermal Orange from Swoosh & Accent
          orangeDark: "#D9550D",
          orangeLight: "#FA8540",
          ice: "#F6F9FC",     // Cool Slate Background Tint
          dark: "#050E1A",    // Deep Footer / Card Background
        },
        navy: {
          DEFAULT: "#0A1C33",
          50: "#F0F4F9",
          100: "#DCE5F2",
          200: "#B9CCE5",
          300: "#8FAED4",
          400: "#5E89BE",
          500: "#0F4C81",
          600: "#143660",
          700: "#0E2746",
          800: "#0A1C33",
          900: "#081628",
          950: "#050E1A",
        },
        copper: {
          DEFAULT: "#F36C21",
          light: "#FA8540",
          dark: "#D9550D",
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F36C21",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        steel: {
          DEFAULT: "#0F4C81",
          light: "#1C6AA7",
          dark: "#0B3860",
        },
        offwhite: {
          DEFAULT: "#F6F9FC",
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E2E8F0",
          400: "#CBD5E1",
        },
        silver: {
          DEFAULT: "#D8DEE5",
          light: "#E7EBF0",
          dark: "#BDC7D2",
        },
        graphite: {
          DEFAULT: "#1E293B",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["'Times New Roman'", "Times", "serif"],
        serif: ["'Times New Roman'", "Times", "serif"],
        heading: ["'Times New Roman'", "Times", "serif"],
        mono: ["'Times New Roman'", "Times", "serif"],
      },
      fontSize: {
        h1: ["clamp(2rem, 2.5vw + 1.25rem, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        h2: ["clamp(1.625rem, 1.8vw + 1.05rem, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        h3: ["clamp(1.25rem, 1vw + 0.95rem, 1.625rem)", { lineHeight: "1.3", letterSpacing: "0em", fontWeight: "700" }],
        h4: ["clamp(1.125rem, 0.5vw + 0.95rem, 1.375rem)", { lineHeight: "1.3", letterSpacing: "0em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.65" }],
        secondary: ["0.9375rem", { lineHeight: "1.55" }],
        caption: ["0.8125rem", { lineHeight: "1.45" }],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        industrial: "0 2px 8px -2px rgba(10, 28, 51, 0.08), 0 8px 24px -4px rgba(10, 28, 51, 0.06)",
        "industrial-lg": "0 12px 32px -8px rgba(10, 28, 51, 0.12), 0 4px 12px -2px rgba(10, 28, 51, 0.08)",
        "soft-card": "0 1px 3px rgba(0, 0, 0, 0.04), 0 10px 30px -5px rgba(10, 28, 51, 0.06)",
        "orange-glow": "0 0 25px -4px rgba(243, 108, 33, 0.35)",
        "navy-glow": "0 0 25px -4px rgba(15, 76, 129, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
