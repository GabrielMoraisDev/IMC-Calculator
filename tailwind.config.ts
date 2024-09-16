// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty: {
        'bg': 'background-color',
        'opacity': 'opacity',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
};

export default config;
