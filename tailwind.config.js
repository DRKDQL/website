const vars = {
	black: '#242526',
	blue: '#41B6E6',
	purple: '#C3A6FF',
	white: '#FFFFFF'
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['light'],
					primary: vars.white,
					'primary-content': vars.black,
					secondary: vars.blue,
					'secondary-content': vars.black,
					accent: vars.purple,
					'accent-content': vars.white,
					neutral: vars.black,
					'neutral-content': vars.white,
					'base-100': vars.white,
					'base-100-content': vars.black
				}
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: vars.black,
					'primary-content': vars.white,
					secondary: vars.blue,
					'secondary-content': vars.white,
					accent: vars.purple,
					'accent-content': vars.white,
					neutral: vars.white,
					'neutral-content': vars.black,
					'base-100': vars.black,
					'base-100-content': vars.white
				}
			}
		]
	},
	theme: {
		extend: {
			fontFamily: {
				primary: 'Urbanist Variable'
			},
			fontSize: {
				sizeH1: '2.4rem',
				sizeH2: '1.2rem',
				sizeH3: '1.1rem',
				sizeH4: '1.1rem',
				sizeH5: '1.1rem',
				sizeH6: '1rem',
				sizeP: '1rem',
				sizeLabel: '0.9rem',
				sizeSmall: '0.8rem'
			}
		}
	},
	plugins: [require('daisyui')]
};
