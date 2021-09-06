module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        shinppori: ["Shippori Mincho"],
        robot: ["Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("tailwindcss"), require("autoprefixer")],
};
