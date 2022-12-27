/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./client/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "567px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },

        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "var(font-poppins)"],
            },
            container: {
                padding: "1rem",
                center: true,
                screens: {
                    sm: "567px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1196px",
                },
            },
            colors: {
                darkGreen: "#0C1712",
                yellow: "#F3BA00",
                green: "#1AC073",
            },
        },
    },
    plugins: [],
};
