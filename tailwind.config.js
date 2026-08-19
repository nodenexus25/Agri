/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cane-green': '#2E7D32',
        'cane-green-light': '#4CAF50',
        'cane-green-dark': '#1B5E20',
        'harvest-gold': '#C68E17',
        'harvest-gold-light': '#DAA520',
        'harvest-gold-dark': '#A67B0F',
        'earth-brown': '#6B4226',
        'earth-brown-light': '#8B5A2B',
        'earth-brown-dark': '#4E2F18',
        'neutral-light': '#FBF9F4',
        'neutral-cream': '#F5F0E6',
        'neutral-dark': '#1A1A1A',
        'neutral-mid': '#6B6B6B'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}
