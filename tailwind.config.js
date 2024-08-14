/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // personalizar colores ejm:
        // 'nombre-del-color': '#243cff'
        },
        spacing: {
        // espaciado como lo es Ancho, alto, padding, margin.. ejm
        // '42': '170px'
        }  
    },
  },
  plugins: [],
}
