/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// personalizar colores ejm:
				// 'nombre-del-color': '#243cff'

				primary: {
					/*paleta verde*/
					50: "#f1f5ea",
					100: "#d3e1be",
					200: "#bed29f",
					300: "#a1be73",
					400: "#8eb158",
					500: "#729e2e",
					600: "#68902a",
					700: "#517021",
					800: "#3f5719",
					900: "#304213",
				},
				secondary: {
					/*paleta amarilla*/
					50: "#fcf6e7",
					100: "#f6e2b3",
					200: "#f2d58f",
					300: "#ecc15c",
					400: "#e8b53c",
					500: "#e2a30b",
					600: "#ce940a",
					700: "#a07408",
					800: "#7c5a06",
					900: "#5f4405",
				},
				title: {
					/*paleta negra para los textos */ 
					50: "#e8e8e8",
					100: "#b9b9b8",
					200: "#979796",
					300: "#686866",
					400: "#4a4a49",
					500: "#1d1d1b",
					600: "#1a1a19",
					700: "#151513",
					800: "#10100f",
					900: "#0c0c0b",
				},
			},

			screens: {  
				mobile: "22.5rem",
				tablet: "46.5rem",
				desktop: "90rem",
			},

			spacing: {
				// espaciado como lo es Ancho, alto, padding, margin.. ejm
				// '42': '170px'
			},
		},
	},
	plugins: [],
};
