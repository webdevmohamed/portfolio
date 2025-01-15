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
          hover: '#b4e876',
        }
      },
    },
  },
  plugins: [],
}

