module.exports = {
  content: ["./**/*.njk"],
  theme: {
    extend: {
      spacing: {
        30: '7.5rem'
      }
    },
    screens: {
      xxs: '350px',
      xs: '580px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      amaranth: [
        'Amaranth',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ]
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};