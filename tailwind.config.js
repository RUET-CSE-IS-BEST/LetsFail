/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./1-2_Notes_22_Series/*.html",
    "./Books/12-Semister/*.html",
    "./Questions/1-2_Questions/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sm-bg": "url('/Background.jpg')",
      },
      backgroundSize: {
        "bg-size": "100% 100%",
      },
    },
  },
  plugins: [],
};
