const vars = {
	black: '#121212',
	grey: '#242526',
	blue: '#41B6E6',
	purple: '#C3A6FF',
	white: '#FFFFFF',
	heightNavbar: '90px',
	spacePage: '30px'
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
					secondary: vars.grey,
					'secondary-content': vars.white,
					accent: vars.blue,
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
			spacing: {
				page: vars.spacePage,
				content: `calc(${vars.heightNavbar} + 80px)`
			},
			height: {
				navbar: vars.heightNavbar
			},
			minHeight: {
				'dynamic-screen': '100dvh'
			},
			height: {
				'dynamic-screen': '100dvh'
			},
			backgroundImage: {
				gradient: `linear-gradient(to right, ${vars.blue}, ${vars.purple})`
			},
			fontFamily: {
				primary: 'Urbanist Variable'
			},
			fontSize: {
				sizeH1: '2.5rem',
				sizeH2: '1.4rem',
				sizeH3: '1.3rem',
				sizeH4: '1.2rem',
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
