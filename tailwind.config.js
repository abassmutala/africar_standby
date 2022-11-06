/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "primary-color": "#DE0002",
        // "secondary-color": "#484FA1",
        "secondary-color": "#1A57C7",
        "primary-color-light": { 100: "#FCE6E6", 200: "#F8CCCC" },
        "button-hover": "rgba(0, 0, 0, 0.1)",
        "background-color": "#F7F9FA",
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
        "camry_back": "url('./assets/camry_back.png')",
        "camry_front": "url('./assets/camry_front.png')",
        "l200_side": "url('./assets/l200.jpeg')",
        "santa_fe_front": "url('./assets/santa_fe_front.png')",
      },
    },
  },
  plugins: [],
};
