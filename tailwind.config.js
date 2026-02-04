/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5A4D",
          dark: "#1B3C35",
          light: "#527A71",
        },
        secondary: {
          DEFAULT: "#E6AA8A",
        },
        background: "#FDF7F0",
        text: {
          dark: "#1B3C35",
          light: "#527A71",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        outfit: ["Outfit", "sans-serif"],
        instrument: ["Instrument Sans", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        alice: ["Alice", "serif"],
        cooper: ["Cooper Lt BT", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
      borderRadius: {
        "3xl": "20px",
        "2xl": "12px",
      },
    },
  },
  plugins: [],
};
