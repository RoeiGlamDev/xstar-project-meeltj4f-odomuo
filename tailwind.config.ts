import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app//*.{js,ts,jsx,tsx,mdx}',
    './pages//*.{js,ts,jsx,tsx,mdx}',
    './components//*.{js,ts,jsx,tsx,mdx}',
    './src//*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxuryPink: '#ff69b4', // Specific pink used for luxury branding
        luxuryWhite: '#ffffff', // Pure white for clean, luxurious look
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
