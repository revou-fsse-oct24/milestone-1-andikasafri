/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in": "slideIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
