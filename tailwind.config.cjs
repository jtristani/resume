/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001f3f",
        accent: "#4fd1c5",      // teal accent
        complement: "#4fd1c5",  // pink complement
      },
    },
  },
  plugins: [],
};
