/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xxs': '360px',
        'xs': '480px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--background-secondary)',
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          secondary: 'var(--foreground-secondary)',
        },
        border: 'var(--border)',
        primary: {
          DEFAULT: '#68a506',
          hover: '#527f05',
          light: '#84c517',
          dark: '#446e04',
          50: '#f0f9e6',
          100: '#dff2cc',
          200: '#bde599',
          300: '#9bd866',
          400: '#79cb33',
          500: '#68a506',
          600: '#527f05',
          700: '#3c5904',
          800: '#263303',
          900: '#100c01',
        },
        accent: {
          blue: '#0679a5',
          purple: '#7a06a5',
          orange: '#a57906',
        },
        success: '#2e7d32',
        warning: '#ed6c02',
        error: '#d32f2f',
        info: '#0288d1',
      },
      animation: {
        blob: 'blob 7s infinite',
        'fade-move-down': 'fade_move_down 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '25%': {
            transform: 'translate(100px, -120px) scale(1.2)',
          },
          '50%': {
            transform: 'translate(-150px, 80px) scale(0.8)',
          },
          '75%': {
            transform: 'translate(120px, 100px) scale(1.1)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fade_move_down: {
          '0%': {
            transform: 'translate(0, -15px) rotate(45deg)',
            opacity: '0',
          },

          '50%': {
            opacity: '1',
          },

          '100%': {
            transform: 'translate(0, 15px) rotate(45deg)',
            opacity: '0',
          },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(to right, var(--foreground) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('hover', '@media (hover: hover) { &:hover }')
    }
  ]
}
