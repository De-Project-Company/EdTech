import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
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
        sidebar: '#1A0D46',
        test: '#2e5773',
        disabled: '#868E96',
        white: '#ffffff',
        hover: '#9fb2c3',
        success: '#008031',
        'success-hover': '#8acba3',
        error: '#FF0000',
        active: '#EAEEF2',
        sidebartext: '#B2B2B2',
        student: '#28146A'
      },
      fontFamily: {
        helvetica: 'var(--font-Helvetica)',
        poppin: ['--font-poppins']
      },
      keyframes: {
        pulsing: {
          '50%': {
            opacity: '0.2'
          }
        },
        loadspin: {
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        slideUp: {
          '70%': {
            opacity: '0.7',
            transform: 'translateY(50px)'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideDown: {
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideNavUp: {
          '100%': {
            transform: 'translateY(-112px)',
            opacity: '0'
          }
        },
        fadeOut: {
          '50%': {
            opacity: '0.7'
          },
          '100%': {
            opacity: '1'
          }
        },
        rotate3d: {
          '0%': {
            transform: 'rotateY(0)'
          },
          '50%': { opacity: '0.5' },

          '100%': {
            transform: 'rotateY(360deg)'
          }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
        slideUp: 'slideUp 1s 0.2s ease forwards',
        loadspin: 'loadspin 1.2s linear infinite',
        pulsing: 'pulsing 1.5s ease infinite',
        rotate3d:
          'rotate3d 2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite',
        slideDown: 'slideDown 1s 0.2s ease forwards',
        slideNavUp: 'slideDown 1s 0.2s ease forwards'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
export default config;
