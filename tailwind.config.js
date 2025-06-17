/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true, // Optimize hover states for mobile devices
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'system-ui',
          'sans-serif'
        ],
        'press-start': ['var(--font-press-start-2p)'],
        'space-grotesk': ['var(--font-space-grotesk)']
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          100: "#E6F0FF",
          200: "#CCE0FF",
          300: "#99C2FF",
          400: "#66A3FF",
          500: "#3385FF",
          600: "#0066FF",
          700: "#0052CC",
          800: "#003D99",
          900: "#002966",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        gradient: {
          to: { 'background-position': '200% center' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'glow': {
          '0%, 100%': {
            filter: 'brightness(1)',
            textShadow: '0 0 0 rgba(139,92,246,0)'
          },
          '50%': {
            filter: 'brightness(1.2)',
            textShadow: '0 0 15px rgba(139,92,246,0.5)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: 'shimmer 2s infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'gradient': 'gradient 8s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      // Add custom utilities for performance optimizations
      const newUtilities = {
        '.will-change-transform': {
          willChange: 'transform',
        },
        '.will-change-opacity': {
          willChange: 'opacity',
        },
        '.will-change-scroll': {
          willChange: 'scroll-position',
        },
        '.transform-gpu': {
          transform: 'translateZ(0)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.content-visibility-auto': {
          contentVisibility: 'auto',
        },
        '.content-visibility-hidden': {
          contentVisibility: 'hidden',
        },
        '.contain-layout': {
          contain: 'layout',
        },
        '.contain-paint': {
          contain: 'paint',
        },
        '.contain-strict': {
          contain: 'strict',
        },
        '.contain-content': {
          contain: 'content',
        },
      };
      addUtilities(newUtilities);
    },
  ],
  // Safelist critical classes
  safelist: [
    'bg-gradient-to-br',
    'from-black',
    'via-[#0C0C0E]',
    'to-[#1A1A24]'
  ],
  // Optimize final CSS size
  corePlugins: {
    // Disable rarely used features
    container: true,
    preflight: true,
    float: false,
    clear: false,
    placeholderColor: false,
    placeholderOpacity: false,
    verticalAlign: false,
  },
} 