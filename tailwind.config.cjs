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
        accent: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
