/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-background": "#222222",
        "button-dark-background": "#E43F5A",
        "dark-text": "#a7a7a7",
        "light-text": "#1B1B2F",
      },
    },
  },
  plugins: [],
};
