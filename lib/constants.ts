// lib/constants.ts

/
 * Constants and configuration for luxury FashionTV cosmetics application
 * This module provides configuration specific to the luxury FashionTV cosmetics brand.
 */

export const BRAND_NAME = "luxury FashionTV cosmetics";

export const COLORS = {
  PRIMARY: "pink",
  SECONDARY: "white"
};

export const CONFIG = {
  SITE_TITLE: "Welcome to luxury FashionTV cosmetics - Elevate Your Beauty",
  DESCRIPTION: "Discover the world of luxury cosmetics with FashionTV. Our exclusive collection offers the finest in beauty and skincare, designed to indulge and elevate your beauty regimen.",
  CONTACT_EMAIL: "contact@luxuryfashiontvcosmetics.com",
  PHONE_NUMBER: "+1 (800) 555-0199",
  ADDRESS: "123 Fashion Avenue, Beverly Hills, CA 90210, USA"
};

// Tailwind CSS configuration for the application
// tailwind.config.ts

import type { Config } from "tailwindcss";

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
        pink: {
          DEFAULT: '#FFC0CB',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
