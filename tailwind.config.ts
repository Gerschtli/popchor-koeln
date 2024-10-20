import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        fontFamily: {
            sans: ['Avenir', 'Arial'],
        },
        extend: {
            fontFamily: {
                heading: ['AvenirBook', 'Arial'],
            },
            screens: {
                xs: '480px',
            },
            colors: {
                accent: {
                    DEFAULT: '#d57e56',
                    dark: '#ab542b',
                },
            },
        },
    },

    corePlugins: {
        container: false,
    },

    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                },
            });
        },
    ],
} satisfies Config;
