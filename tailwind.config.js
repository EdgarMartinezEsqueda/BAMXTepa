/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D455D",
        gris: "#CCCCCC",
        durazno: "#FFDCD0",
        rosaMexicano: "#E96479",
        rosaPastel: "#fccbef",
        rosaFuerte: "#f99cc6",
        fucsia: "#f368e0",
        verde: "#6ab04c",
        verdePastel: "#81b38b",
        azulPastel: "#7DB9B6",
        azulCielo: "#3BB8BC",
        azulMarino: "#0C4F75",
        bgClaro: "#F2F2F2",
        bgOscuro1: "#353b48",
        bgOscuro2: "#2f3640",
        bgAboutUs: "#f5f3ed",
        bgOscuro3: "#58687C",
        footer: "#1b1f28",
        rojoLogo: "#ed1a3b",
        verdeLogo: "#0db14c",
        amarilloLogo: "#fdb913",
        grisLogo: "#58595b",
      },
      backgroundImage: {
        banner: "url('./src/assets/image1.jpg')",
        aboutUs: "url('./src/assets/image3.jpg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  darkMode: "class",
}