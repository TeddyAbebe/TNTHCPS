/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F1E6",
        beige: "#E7D8C3",
        gold: "#C6A15A",
        forest: "#1B4D3E",
        "forest-deep": "#12352B",
        brick: "#8E342E",
        charcoal: "#1C1916",
        mute: "#5E584E",
        line: "#D9CBB6",
        paper: "#F7F1E6",
        "paper-2": "#E7D8C3",
        ink: "#1C1916",
        moss: "#1B4D3E",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Figtree"', "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 0.8s ease both",
        float: "float 5.5s ease-in-out infinite",
        slide: "slide 28s linear infinite",
      },
      maxWidth: {
        page: "76rem",
        reading: "40rem",
      },
    },
  },
  plugins: [],
};
