import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        cream: "#fffaf0",
        coral: "#ff6b4a",
        teal: "#137c8b",
        sun: "#ffd166"
      },
      boxShadow: {
        card: "0 14px 40px rgba(23, 32, 51, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
