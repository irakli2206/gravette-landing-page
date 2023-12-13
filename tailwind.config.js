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
        'button': 'inset 0px 0px 3px 0px rgba(255, 255, 255, 0.75)',
        'button-hover': 'inset 0px 0px 6px 0px rgba(255, 255, 255, 0.75)',
      },
      backgroundImage: {
        "transparent-button": "radial-gradient(100% 40px, #3830a3,  transparent 100%)",
        "transparent-button-sm": "radial-gradient(100% 40px, #3830a3, transparent 100%)",
        "cta": "radial-gradient(500px 400px, #3830a3, transparent 100%)",
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

