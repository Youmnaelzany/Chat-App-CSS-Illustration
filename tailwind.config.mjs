/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			xs: '.5rem',
			sm: '0.75rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},

		extend: {
			colors: {
				'Pale-Violet': ' hsl(276, 100%, 81%)',
				'Moderate-Violet': ' hsl(276, 55%, 52%)',
				'Desaturated-Dark-Violet': 'hsl(271, 15%, 43%)',
				'Grayish-Blue': 'hsl(206, 6%, 79%)',
				'Very-Dark-Desaturated-Violet ': 'hsl(271, 36%, 24%)',
				'Dark-Grayish-Violet': 'hsl(270, 7%, 64%)',
				'White': 'hsl(0, 0%, 100%)',
				'Light-Grayish-Violet': 'hsl(270, 20%, 96%)',
				'Very-Light-Magenta': 'hsl(289, 100%, 72%)',
				'Light-Violet': 'hsl(264, 100%, 61%)',
				'Light-Magenta': 'hsl(293, 100%, 63%)',
			},
			lineHeight: {
				'leading-3': '0.6875rem',
			}
		},
	},
	plugins: [],
}
