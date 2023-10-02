/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Roboto', 'sans-serif'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};

