module.exports = {
  important: true,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        indigo: '#5c6ac4',
        blue: {
          lighter: '#6290be',
          default: '#436688',
          dark: '#273c50',
        },
        red: '#de3618',
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: { borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'] },
  plugins: [],
};
