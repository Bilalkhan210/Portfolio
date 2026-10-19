var require = createRequire(import.meta.url);
var module = { exports: {} };

var require = createRequire(import.meta.url);
var module = { exports: {} };

var require = createRequire(import.meta.url);
var module = { exports: {} };

var require = createRequire(import.meta.url);
var module = { exports: {} };

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
        ink: 'var(--ink)',
        surface: 'var(--surface)',
        elevated: 'var(--elevated)',
        line: 'var(--line)',
        mute: 'var(--mute)',
        textMain: 'var(--text)',
        caption: '#71717a',
        accent: '#7C3AED',
        accent2: '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        pulseDot: {
          '0%,100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '.5',
            transform: 'scale(1.4)',
          },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
