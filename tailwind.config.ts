import type { Config } from 'tailwindcss';
import animated from 'tailwindcss-animated';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#db2777',
      black: '#000',
      white: '#fff',
    },
    fontFamily: {
      body: ['var(--font)', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        ground: '0 0.2rem 0.5rem rgba(0,126,167,0.3)',
        elevated: '0 0.4rem 0.8rem rgba(0,126,167,0.3)',
      },
    },
  },
  plugins: [animated],
};

export default config;
