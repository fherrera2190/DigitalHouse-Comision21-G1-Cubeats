module.exports = {
	content: [
		"./public/**/*.{html,js,ejs,css}",
		"./src/**/*.{html,js,ejs,css}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	plugins: "",
	theme: {
		extend: {
			colors: {
				"text-main": "#7a7a7a",
				"gray-main": "#141414",
				"gray-second": "#1A1A1A",
				input: "#383838",
			},
		},
		fontFamily: {
			Gabarito: "Gabarito",
			Lora: "Lora",
			Manrope: "Manrope",
		},
		animation: {
			"infinite-scroll": "infinite-scroll 25s linear infinite",
		},
		keyframes: {
			"infinite-scroll": {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(-100%)" },
			},
		},
	},
};
