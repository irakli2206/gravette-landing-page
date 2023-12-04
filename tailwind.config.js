/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'sans': ['Inter']
      },
      boxShadow: {
        'button': 'inset 0px 0px 2px 0px rgba(255, 255, 255, 1)',
        'button-hover': 'inset 0px 0px 6px 0px rgba(255, 255, 255, 1)'

      },
      dropShadow: {
        glow: [
          "0 0px 6px rgba(255,255, 255, 0.35)",
          "0 0px 12px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [],
}

