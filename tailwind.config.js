/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#7C6AF7',
          light: '#A78BFA',
          glow: 'rgba(124,106,247,0.15)',
        },
        dark: {
          bg:      '#0A0A0F',
          bg2:     '#111118',
          bg3:     '#18181F',
          surface: '#1C1C25',
          border:  '#2A2A38',
          border2: '#363648',
        },
      },
      animation: {
        'fade-up':   'fade-up 0.6s ease forwards',
        'pulse-dot': 'pulse-dot 2s infinite',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%,100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(52,211,153,0.4)' },
          '50%':     { opacity: '0.7', boxShadow: '0 0 0 6px rgba(52,211,153,0)' },
        },
      },
    },
  },
  plugins: [],
}