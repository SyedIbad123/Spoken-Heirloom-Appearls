import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FBF6F3",
          foreground: "#7A8872",
          dark: "#3D2B22",
          light: "#FAF6F3",
          border: "#E8D9C8",
        },
        secondary: {
          DEFAULT: "#E8E0D5",
          foreground: "#5C4033",
          light: "#F5F1EB",
          dark: "#D4C9BC",
        },
        accent: {
          DEFAULT: "#B8860B",
          foreground: "#FDFBF7",
          light: "#DAA520",
          muted: "#C4A35A",
        },
        background: {
          DEFAULT: "#FDFBF7",
          alt: "#F8F5F0",
          cream: "#FBF9F4",
          warm: "#F5F1EB",
        },
        foreground: {
          DEFAULT: "#2D2A26",
          muted: "#6B6560",
          light: "#8B8680",
        },
        muted: {
          DEFAULT: "#9B9590",
          foreground: "#6B6560",
        },
        olive: {
          DEFAULT: "#6B7B5C",
          light: "#8B9B7C",
          dark: "#4B5B3C",
        },
        sage: {
          DEFAULT: "#A4B494",
          light: "#C4D4B4",
          dark: "#849474",
        },
        border: "#E2DDD5",
        ring: "#B8860B",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3.75rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.25", letterSpacing: "-0.01em" },
        ],
        "heading-xl": ["1.875rem", { lineHeight: "1.3" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.35" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.65" }],
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(92, 64, 51, 0.07), 0 10px 20px -2px rgba(92, 64, 51, 0.04)",
        medium:
          "0 4px 25px -5px rgba(92, 64, 51, 0.1), 0 10px 30px -5px rgba(92, 64, 51, 0.06)",
        elevated:
          "0 10px 40px -10px rgba(92, 64, 51, 0.15), 0 20px 50px -15px rgba(92, 64, 51, 0.1)",
      },
      backgroundImage: {
        "gradient-warm": "linear-gradient(135deg, #FDFBF7 0%, #F5F1EB 100%)",
        "gradient-sepia": "linear-gradient(180deg, #5C4033 0%, #3D2B22 100%)",
        "gradient-sage":
          "linear-gradient(135deg, #E8E0D5 0%, #D4E4C4 50%, #E8E0D5 100%)",
        "texture-paper":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
