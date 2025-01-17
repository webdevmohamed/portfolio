/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
          900: '#100c01'
        },
        accent: {
          blue: '#0679a5',
          purple: '#7a06a5',
          orange: '#a57906'
        },
        success: '#2e7d32',
        warning: '#ed6c02',
        error: '#d32f2f',
        info: '#0288d1'
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}

