import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient":
          "linear-gradient(to left, rgba(144, 58, 255, 0.7),rgba(254, 52, 185, 1))",
      },
      fontFamily: {
        Gladiora: ["var(--font-gladiora)", "sans-serif"],
        Inter: ["var(--font-inter)", "sans-serif"],
        Hanken: ["var(--font-hanken)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
