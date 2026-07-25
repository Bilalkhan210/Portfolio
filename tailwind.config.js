/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',       // page background
        surface: 'var(--surface)',   // raised surfaces
        elevated: 'var(--elevated)',  // elevated cards
        line: 'var(--line)',      // subtle hairline borders
        mute: 'var(--mute)',      // muted copy
        textMain: 'var(--text)',   // main text
        caption: '#71717a',   // faint captions
        accent: '#7C3AED',    // brand accent (purple)
        accent2: '#06B6D4',   // secondary accent (cyan)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.5', transform: 'scale(1.4)' },
        }
      },
      animation: {
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
