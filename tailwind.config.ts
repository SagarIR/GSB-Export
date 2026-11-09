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
        navy: {
          DEFAULT: "#10263D", // Deep Navy
          50: "#EAF0F6",
          100: "#D5E1ED",
          200: "#ACC3DB",
          300: "#83A5C9",
          400: "#4D7DAF",
          500: "#234D70",     // Steel Blue
          600: "#1C3E5A",
          700: "#163248",
          800: "#10263D",     // Primary Deep Navy
          900: "#0B1A2A",
          950: "#060D15",
        },
        steel: {
          DEFAULT: "#234D70",
          light: "#356B98",
          dark: "#1A3B57",
        },
        offwhite: {
          DEFAULT: "#F3F5F7",
          50: "#FFFFFF",
          100: "#F8F9FA",
          200: "#F3F5F7",
          300: "#E9ECEF",
          400: "#DEE2E6",
        },
        silver: {
          DEFAULT: "#D8DEE5",
          light: "#E7EBF0",
          dark: "#BDC7D2",
        },
        copper: {
          DEFAULT: "#D88B35", // Copper Accent
          light: "#E4A053",
          dark: "#B86F21",
          50: "#FDF8F2",
          100: "#FCEFE2",
          200: "#F7DEC2",
          300: "#F2CCA1",
          400: "#E7A863",
          500: "#D88B35",
          600: "#BE7427",
          700: "#98591B",
          800: "#754316",
          900: "#573012",
        },
        graphite: {
          DEFAULT: "#202A35",
          50: "#7C8D9E",
          100: "#69798A",
          200: "#576575",
          300: "#45515E",
          400: "#323D47",
          500: "#202A35",
          600: "#182029",
          700: "#11171E",
          800: "#0B0E12",
          900: "#050709",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
      boxShadow: {
        industrial: "0 2px 8px -2px rgba(16, 38, 61, 0.08), 0 8px 24px -4px rgba(16, 38, 61, 0.06)",
        "industrial-lg": "0 12px 32px -8px rgba(16, 38, 61, 0.12), 0 4px 12px -2px rgba(16, 38, 61, 0.08)",
        "copper-glow": "0 0 20px -3px rgba(216, 139, 53, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
