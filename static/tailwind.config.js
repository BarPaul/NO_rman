/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [{
            no_rman: {            
                "primary": "#D13B3B",
                "secondary": "#308DC7",
                "accent": "#ffffff",
                "neutral": "#413241",
                "base-100": "#404040",
                "info": "#64AAD5",
                "success": "#8ACE0E",
                "warning": "#DA731E",
                "error": "#FF3700",
            },
        },
    ]},
    plugins: [
        require('daisyui'),
    ]
}