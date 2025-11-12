module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          fuchsia: '#fb21a9',
          cyan: '#05ecf4',
          dark: '#0d0f1a',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Helvetica Neue', 'Arial'],
      },
    },
  },
  plugins: [],
}

