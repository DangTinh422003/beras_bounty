import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#5843b7',
        purple: '#e5bbff',
        green: '#02fb8a',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      monument: ['MonumentExtended', 'Arial', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
