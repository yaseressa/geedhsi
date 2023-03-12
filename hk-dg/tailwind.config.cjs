/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E22727",
        secondary: "#380B0B",
      },
      fontFamily: {
        rockwell: ['"Rockwell"'],
        nunito: ['"Nunito"'],
      },
    },
  },
  plugins: [],
};
