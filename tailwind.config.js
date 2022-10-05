/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "primary-color": "#DE0002",
        "primary-color-light": { 100: "#FCE6E6", 200: "#F8CCCC" },
        "button-hover": "rgba(0, 0, 0, 0.1)",
        "footer-bg": "#F3F4F8",
      },
      fontFamily: {
        avenir: ["Avenir", "Helvetica", "Verdana", "Tahoma", "sans-serif"],
        "avenir-bold": [
          "Avenir Book",
          "Helvetica",
          "Verdana",
          "Tahoma",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "app-cta-bg": "url('./assets/happy_car_owner.jpeg')",
        "car_top-bg": "url('./assets/car_top.jpeg')",
      },
    },
  },
  plugins: [],
};
