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
        accent: "#ff6f61",      // coral accent
        complement: "#61dafb",  // aqua complement
      },
    },
  },
  plugins: [],
};
