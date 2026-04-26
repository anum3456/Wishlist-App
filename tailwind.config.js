/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FEFCF8',
          100: '#FDF8EE',
          200: '#F9EDD6',
        },
        rose: {
          warm: '#E8927C',
          deep: '#C1614A',
        },
        ink: {
          DEFAULT: '#1A1512',
          soft: '#2D2420',
          muted: '#6B5E58',
          faint: '#A89B96',
        },
        night: {
          950: '#0D0B0A',
          900: '#141210',
          800: '#1E1A18',
          700: '#2A2420',
          600: '#36302C',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.3s ease both',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        'heart-pop': 'heartPop 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heartPop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26,21,18,0.08), 0 1px 3px rgba(26,21,18,0.06)',
        'card-hover': '0 8px 40px rgba(26,21,18,0.14), 0 2px 8px rgba(26,21,18,0.08)',
        'card-dark': '0 2px 20px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)',
        'card-dark-hover': '0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
        'glow': '0 0 30px rgba(232,146,124,0.25)',
        'inner-soft': 'inset 0 1px 3px rgba(26,21,18,0.06)',
      },
    },
  },
  plugins: [],
}
