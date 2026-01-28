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
        // Newcastle Homes Primary Blue
        newcastle: {
          DEFAULT: '#006EB5',
          light: '#1A80B6',
          dark: '#005a94',
          darker: '#004577',
        },
        // Warm accent colors for inviting feel
        warmth: {
          DEFAULT: '#E07A3D',
          light: '#F4A261',
          dark: '#C55A24',
          glow: '#FFB088',
        },
        // Charcoal for text
        charcoal: {
          DEFAULT: '#333333',
          light: '#515151',
          dark: '#1a1a1a',
        },
        // Warm grays and creams
        warmgray: {
          DEFAULT: '#EDEDED',
          light: '#F7F7F5',
          dark: '#D4D4D4',
          warm: '#FAF8F5',
        },
        // Success/nature green
        sage: {
          DEFAULT: '#7BA05B',
          light: '#9BC07B',
          dark: '#5B8040',
        },
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        accent: ['Lora', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #006EB5 0%, #1A80B6 50%, #E07A3D 100%)',
        'gradient-sunset': 'linear-gradient(to right, #F4A261, #E07A3D, #C55A24)',
        'gradient-sky': 'linear-gradient(to bottom, #006EB5, #1A80B6)',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(224, 122, 61, 0.15)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
