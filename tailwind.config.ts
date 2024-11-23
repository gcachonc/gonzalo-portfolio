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
        background: "var(--background)",
        foreground: "var(--foreground)",
        sub: "#C3C3C3",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        play: ['Play', 'sans-serif'],
        lora: [ 'Lora', 'serif']
      },
      backgroundImage : {
        newspaper: "url(https://res.cloudinary.com/dzc4qte1c/image/upload/v1732103355/bg-papel-periodico_j0bbol.png)"
      }
    },
  },
  plugins: [],
};
export default config;
