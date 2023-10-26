/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1441px',
        },
        container: {
            center: true,
            screens: {
                DEFAULT: '93vw',
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1140px',
            },
        },
        extend: {
            colors: {
                'company-blue': '#307EE3',
                'dark-icons': '#202020',
                'grey-icons': 'rgb(153, 153, 153)',
                'grey-text': '#898989',
                grey: '#777',
                card: '#191919',
                error: '#A91212',
                ok: '#54ba4a',
            },
            gap: {
                7.5: '1.875rem',
            },
            padding: {
                3.75: '0.938rem',
                5.5: '1.375rem',
                7.5: '1.875rem',
                15: '3.75rem',
            },
            margin: {
                3.75: '0.938rem',
                6.5: '1.625rem',
            },
            fontSize: {
                2.5: '1.625rem',
                4.5: '2.5rem',
                5.5: '3.125rem',
            },
            lineHeight: {
                11: '2.875rem',
            },
            height: {
                15: '3.875rem',
                18: '4.375rem',
            },
            spacing: {
                1.25: '0.313rem',
                1.75: '0.438rem',
            },
        },
    },
    // plugins: [
    //   function ({ addComponents }) {
    //     addComponents({
    //       ".container": {
    //         maxWidth: "100%",
    //         "@screen sm": {
    //           maxWidth: "640px",
    //         },
    //         "@screen md": {
    //           maxWidth: "768px",
    //         },
    //         "@screen lg": {
    //           maxWidth: "1280px",
    //         },
    //         "@screen xl": {
    //           maxWidth: "1400px",
    //         },
    //       },
    //     });
    //   },
    // ],
};
