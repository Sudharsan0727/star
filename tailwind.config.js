/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        star: {
          blue: '#0052CC',
          blueDark: '#003E99',
          blueDeep: '#07337A',
          blueLight: '#EBF3FF',
          blueSoft: '#F4F8FF',
          slate: '#0F172A',
          body: '#334155',
          muted: '#64748B',
          yellow: '#FFB800',
          border: '#E2E8F0',
          bgLight: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
