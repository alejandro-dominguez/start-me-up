import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './sanity/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                xs: '425px',
            },
            colors: {
                primary: {
                    '100': '#FFE8F0',
                    '200': '#E70A3A',
                    '300': '#F00035',
                    DEFAULT: '#EE2B69',
                },
                secondary: {
                    '100': '#FAD11B',
                    '200': '#FFCA00',
                    '300': '#F8B200',
                    DEFAULT: '#FBE843',
                },
                black: {
                    '100': '#333333',
                    '200': '#141413',
                    '300': '#7D8087',
                    DEFAULT: '#000000',
                },
                white: {
                    '100': '#F7F7F7',
                    DEFAULT: '#FFFFFF',
                },
            },
            fontFamily: {
                'work-sans': ['var(--font-work-sans)'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            boxShadow: {
                100: '2px 2px 0px 0px rgb(0, 0, 0)',
                200: '2px 2px 0px 2px rgb(0, 0, 0)',
                300: '2px 2px 0px 2px rgb(238, 43, 105)',
            },
            animation: {
                ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                spinPulse: 'spin 2s linear infinite, pulse 1s linear infinite',
            }
        },
    },
    plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography')
	],
};

export default config;
