/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				doctortheme: {
					primary: "#3A6B34",

					secondary: "#CBD28F",

					accent: "#E3B448",

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
