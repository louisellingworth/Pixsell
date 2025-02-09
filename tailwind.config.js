/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'slide-left': 'slide-left 40s linear infinite',
        'slide-right': 'slide-right 40s linear infinite',
        'scroll-infinite': 'scroll-infinite 72s linear infinite',
        gradient: 'gradient 8s ease infinite',
        'aurora': 'aurora 25s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
        'aurora-reverse': 'aurora-reverse 30s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scroll-infinite': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'aurora': {
          '0%': { 
            transform: 'translate(0%, -25%) rotate(0deg)',
            opacity: 0.8
          },
          '33%': { 
            transform: 'translate(25%, 0%) rotate(180deg)',
            opacity: 0.5
          },
          '67%': { 
            transform: 'translate(-25%, 25%) rotate(240deg)',
            opacity: 0.8
          },
          '100%': { 
            transform: 'translate(0%, -25%) rotate(360deg)',
            opacity: 0.8
          }
        },
        'aurora-reverse': {
          '0%': { 
            transform: 'translate(0%, 25%) rotate(0deg)',
            opacity: 0.8
          },
          '33%': { 
            transform: 'translate(-25%, 0%) rotate(-180deg)',
            opacity: 0.5
          },
          '67%': { 
            transform: 'translate(25%, -25%) rotate(-240deg)',
            opacity: 0.8
          },
          '100%': { 
            transform: 'translate(0%, 25%) rotate(-360deg)',
            opacity: 0.8
          }
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
} 