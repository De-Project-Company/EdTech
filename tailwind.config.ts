import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4221B0',
        'primary-light': '#684DC0',
        'primary-dark': '#4221B0',
        'color-600': '#161616',
        'color-normal': '#535353',
        header: '#282828',
        card: '#FBF9FA',
        checked: '#2E577D',
        sidebar: "#1A0D46",
        test: '#2e5773',
        disabled: '#868E96',
        white: '#ffffff',
        hover: '#9fb2c3',
        success: '#008031',
        'success-hover': '#8acba3',
        error: '#FF0000',
        active: '#EAEEF2',
        sidebartext: "#B2B2B2",
        student: "#28146A"
      },
      fontFamily: {
        "font-helvetica": "var(--font-Helvetica)"
      }
    }
  },
  plugins: []
};
export default config;
