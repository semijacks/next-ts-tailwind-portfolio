const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        carnation: {
          50: '#fff6f7',
          100: '#feedef',
          200: '#fdd2d7',
          300: '#fcb6bf',
          400: '#fa8090',
          500: '#f84960',
          600: '#df4256',
          700: '#ba3748',
          800: '#952c3a',
          900: '#7a242f',
        },
        'havelock-blue': {
          50: '#f7fbff',
          100: '#eef7ff',
          200: '#d5ebff',
          300: '#bbdfff',
          400: '#88c6ff',
          500: '#55aeff',
          600: '#4d9de6',
          700: '#4083bf',
          800: '#336899',
          900: '#2a557d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
