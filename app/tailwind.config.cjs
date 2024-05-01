/** @type {import('tailwindcss').Config}*/
const config = {
    mode: "jit",
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background) / <alpha-value>)",

                foreground: {
                    DEFAULT: "hsl(var(--foreground) / <alpha-value>)",
                    disabled: "hsl(var(--foreground-disabled) / <alpha-value>)",
                    muted: "hsl(var(--foreground-muted) / <alpha-value>)",
                    opposite: "hsl(var(--foreground-opposite) / <alpha-value>)",
                },

                border: {
                    DEFAULT: "hsl(var(--border) / <alpha-value>)",
                    disabled: "hsl(var(--border-disabled) / <alpha-value>)",
                },

                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    hovered: "hsl(var(--primary-hovered) / <alpha-value>)",
                    disabled: "hsl(var(--primary-disabled) / <alpha-value>)",
                    active: "hsl(var(--primary-active) / <alpha-value>)",
                },

                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    hovered: "hsl(var(--secondary-hovered) / <alpha-value>)",
                    disabled: "hsl(var(--secondary-disabled) / <alpha-value>)",
                    active: "hsl(var(--secondary-active) / <alpha-value>)",
                },

                flat: {
                    DEFAULT: "hsl(var(--flat) / <alpha-value>)",
                    hovered: "hsl(var(--flat-hovered) / <alpha-value>)",
                    disabled: "hsl(var(--flat-disabled) / <alpha-value>)",
                    foreground: "hsl(var(--flat-foreground) / <alpha-value>)",
                },

                alternate: {
                    DEFAULT: "hsl(var(--alternate) / <alpha-value>)",
                    hovered: "hsl(var(--alternate-hovered) / <alpha-value>)",
                    disabled: "hsl(var(--alternate-disabled) / <alpha-value>)",
                    foreground:
                        "hsl(var(--alternate-foreground) / <alpha-value>)",
                    muted: "hsl(var(--alternate-muted) / <alpha-value>)",
                },

                ghost: {
                    DEFAULT: "hsl(var(--ghost) / <alpha-value>)",
                    hovered: "hsl(var(--ghost-hovered) / <alpha-value>)",
                    disabled: "hsl(var(--ghost-disabled) / <alpha-value>)",
                    active: "hsl(var(--ghost-active) / <alpha-value>)",
                    foreground: "hsl(var(--ghost-foreground) / <alpha-value>)",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },

    plugins: [],
};

module.exports = config;
