/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bde886",

          "secondary": "#c0dff9",

          "accent": "#ea79c8",

          "neutral": "#2A2131",

          "base-100": "#ffdff9",

          "info": "#5B9EF5",

          "success": "#0F8544",

          "warning": "#C57316",

          "error": "#E93541",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
