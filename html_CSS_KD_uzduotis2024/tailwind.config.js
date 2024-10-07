/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  plugins: [require("flowbite/plugin")],
};
module.exports = {
  content: ["./src/**/*.html", "./node_modules/flowbite/**/*.js"],
};
