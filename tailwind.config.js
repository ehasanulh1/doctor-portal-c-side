/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				doctortheme: {
					primary: "#5680E9",

					secondary: "#84CEEB",

					accent: "#5AB9EA",

					neutral: "#ffffff",

					"base-100": "#ffffff"
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
