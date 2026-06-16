/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#6C63FF",
        secondary: "#00D4FF",
        accent: "#FF6584",
        dark: "#0A0A1A",
        darker: "#050510",
        card: "#0F0F2A",
        cardBorder: "#1A1A3E",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        slideIn: "slideIn 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        slideIn: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px #6C63FF40" },
          to: { boxShadow: "0 0 40px #6C63FF90, 0 0 60px #00D4FF40" },
        },
      },
    },
  },
  plugins: [],
};
