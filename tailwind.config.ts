import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Newcastle Blue - Full Monochromatic Palette
        newcastle: {
          50: '#E6F3FB',
          100: '#CCE7F7',
          200: '#99CFEF',
          300: '#66B7E7',
          400: '#339FDF',
          500: '#006EB5',  // Primary brand blue
          600: '#005a94',
          700: '#004577',
          800: '#00315A',
          900: '#001C3D',
          950: '#000F20',
          DEFAULT: '#006EB5',
          light: '#1A80B6',
          dark: '#005a94',
          darker: '#004577',
        },
        // Accent blue (slightly different tone for CTAs)
        accent: {
          DEFAULT: '#0088D4',
          light: '#33A3E0',
          dark: '#0070B0',
        },
        // Charcoal for text
        charcoal: {
          DEFAULT: '#1E2A3A',
          light: '#3D4F61',
          dark: '#0F1620',
        },
        // Cool grays (blue-tinted)
        slate: {
          DEFAULT: '#E8EEF2',
          light: '#F4F7F9',
          dark: '#CBD5DC',
          darker: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #006EB5 0%, #004577 100%)',
        'gradient-blue-light': 'linear-gradient(135deg, #1A80B6 0%, #006EB5 100%)',
        'gradient-dark': 'linear-gradient(135deg, #001C3D 0%, #00315A 100%)',
      },
      boxShadow: {
        'blue': '0 4px 20px rgba(0, 110, 181, 0.25)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.06)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
