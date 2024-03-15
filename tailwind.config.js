import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
    mode: "jit",
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
    safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
                // Basics (background, foreground, muted, accent, border)
                border: "#27272a",
                input: "#27272a",
                ring: "#d3d3d7",
                background: "#0a0a0a",
                foreground: {
                    DEFAULT: "#f9f9f9",
                    disabled: "#8a8a8a",
                },
                muted: {
                    DEFAULT: "#27272a",
                    foreground: "#a1a1a9",
                    destructive: "#991b1b"
                },
                accent: {
                    DEFAULT: "#27272a",
                    foreground: "#f9f9f9"
                },
                secondary: {
                    DEFAULT: "#27272a",
                    foreground: "#f9f9f9",
                },

                // Types (destructive, warning, success)
                destructive: {
                    DEFAULT: "#991b1b",
                    foreground: "#991b1b",
                },
                success: {
                    DEFAULT: "#3bd18c",
                    foreground: "#3bd18c",
                }, 
                warning: {
                    DEFAULT: "#d1a93b",
                    foreground: "#d1a93b"
                },

                // Buttons, input, etc.
                button: {
                    DEFAULT: "#f9f9f9", // Default background color of button
                    hovered: "#d6d6d6", // When the "primary" variant is hovered
                    disabled: "#4a4a4a", // When the button is disabled
                    foreground: "#f9f9f9", // Default text color of button
                    border: "#2727a", // Default border of the buttons.
                    "foreground-primary": "#0a0a0a", // When the button is primary, text color
                    "foreground-disabled": "#f1f1f1", // When the button is disabled, text color
                },
            },            
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: ["Geist", ...fontFamily.sans],
                mono: ["Geist Mono", ...fontFamily.mono]
			}
		}
	},
};

export default config;
