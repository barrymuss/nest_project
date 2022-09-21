/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		sm: { min: '300px', max: '600px' },
		md: { min: '768px', max: '1023px' },
		lg: { min: '1024px', max: '1279px' },
		xl: { min: '1280px', max: '1535px' },
		'2xl': { min: '1536px' },
		extend: {
			textColor: {
				dark: '#28293e',
				$blue: '#1990ff',
				$green: '#06d6a0',
				$red: '#ff6b6b',
				$yellow: '#ffe66d',
				$orange: '#e76f51',
				$border: '#495867',
			},
			backgroundColor: {
				dark: '#28293e',
				light: '#FDF0E9',
				$blue: '#1990ff',
				$green: '#06d6a0',
				$red: '#ff6b6b',
				$yellow: '#ffe66d',
				$orange: '#e76f51',
				$border: '#495867',
			},
			borderColor: {
				dark: '#28293e',
				$blue: '#1990ff',
				$green: '#06d6a0',
				$red: '#ff6b6b',
				$yellow: '#ffe66d',
				$orange: '#e76f51',
				$border: '#495867',
			},
			fontFamily: {
				montserrat: ['Montserrat'],
				lato: ['Lato'],
				garamond: ['Garamond'],
			},
		},
	},

	plugins: [],
};
