const config = {
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
                    light: '#f2936a',
                },
                paragraph: {
                    DEFAULT: '#5c5c5c',
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
};

module.exports = config;
