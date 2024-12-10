import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border_gray: "rgba(248, 248, 248, 0.2)",
        border_white: "rgba(102, 102, 102, 0.2)",
        menuBgStart: "rgba(9, 0, 23, 0.4)",
        menuBgEnd: "rgba(255, 255, 255, 0)",
        textColor: "rgba(224, 224, 224, 1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans-serif font
      },
      dropShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        backgroundColor:
          "radial-gradient(ellipse at 0.9% 2.98%, rgba(9, 0, 23, 0.4), rgba(255, 255, 255, 0)) ",
      },
    },
  },
  plugins: [],
} satisfies Config;
