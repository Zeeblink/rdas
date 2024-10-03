import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#003366', // Darker blue
				secondary: '#FF6600', // Orange (unchanged)
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			// backgroundImage : {
			// 	'hero-bg': "url('/hero.jpg')",
			// },
			borderWidth: {
				1: '1px',
			},
			customContainer: {
        center: true, // This will automatically center the container
        padding: {
          DEFAULT: '0rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideInFromBottom: {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-out',
				slideIn: 'slideInFromBottom 0.5s ease-out',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
