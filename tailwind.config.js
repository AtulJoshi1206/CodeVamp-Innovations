/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#07080D',
        card: '#12172A',
        accent: {
          primary: {
            600: '#4F46E5',
            500: '#6366F1',
            400: '#818CF8',
          },
          gold: {
            600: '#D97706',
            500: '#F5B942',
            400: '#FCD34D',
          },
        },
        surface: {
          150: '#0A0D16',
          100: '#05070D',
          50: '#0F1420',
          0: '#161C2C',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        'serif-display': ['Instrument Serif', 'serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-gold': '0 0 20px rgba(245, 185, 66, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(99, 102, 241, 0.1)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

