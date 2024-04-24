/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'primary': {
        light: '#28519c',
        DEFAULT: '#1e3c74',
        dark: '#14274b',
      },
			'secondary': {
				light: '#85ad71',
				DEFAULT: '#6b9556',
			},
      neutral: "#fdf4a1",
    }
	},
	plugins: [],
}
