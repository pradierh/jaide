/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Ou si vous utilisez le répertoire src/
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				jaide: {
					primary: '#4CAF50',
					'primary-light': '#81C784',
					'primary-dark': '#388E3C',
					neutral: '#6B7280', // Gris plus clair et moderne
					'neutral-light': '#9CA3AF', // Gris clair
					'neutral-dark': '#4B5563', // Gris moyen-foncé
					// Changement des couleurs accent vers des gris plus clairs
					accent: '#6B7280', // Gris principal
					'accent-light': '#E5E7EB', // Gris très clair
					'accent-dark': '#4B5563', // Gris moyen
					background: '#FFFFFF',
					'background-alt': '#F9FAFB', // Fond légèrement plus clair
					success: '#4CAF50',
					warning: '#FFC107',
					error: '#F44336',
					info: '#6B7280', // Gris harmonisé
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
			},
			fontSize: {
				'display-large': ['3.5rem', { lineHeight: '1.2' }],
				'display-medium': ['2.8rem', { lineHeight: '1.2' }],
				'display-small': ['2.25rem', { lineHeight: '1.3' }],
			},
			spacing: {
				section: '6rem',
				container: '1280px',
			},
			borderRadius: {
				xl: '1rem',
				'2xl': '2rem',
			},
			boxShadow: {
				card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'card-hover':
					'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [],
};
