module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
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
