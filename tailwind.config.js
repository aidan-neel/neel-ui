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
                border: "#27272a",
                input: "#27272a",
                ring: "#d3d3d7",
                background: "#0a0a0a",
                foreground: {
                    DEFAULT: "#f9f9f9",
                    disabled: "#8a8a8a",
                },
                primary: {
                    DEFAULT: "#36986b",
                    foreground: "#17171b",
                    border: "#3fce8e",
                    muted_bg: "#0a0a0a",
                    muted_border: "#27272a",
                    muted_bg_hovered: "#1c1b1b"
                },
                success: {
                    DEFAULT: "#3bd18c",
                    foreground: "#3bd18c",
                }, 
                warning: {
                    DEFAULT: "#d1a93b",
                    foreground: "#d1a93b"
                },
                secondary: {
                    DEFAULT: "#27272a",
                    foreground: "#f9f9f9",
                    muted: "#101010"
                },
                button: {
                    DEFAULT: "#f9f9f9",
                    hovered: "#d6d6d6",
                    disabled: "#8a8a8a",
                },
                destructive: {
                    DEFAULT: "#991b1b",
                    foreground: "#991b1b",
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
                popover: {
                    DEFAULT: "#0f0f0f",
                    foreground: "#f9f9f9"
                },
                card: {
                    DEFAULT: "#08080a",
                    foreground: "#f9f9f9"
                }
            },            
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: 'Geist',
                mono: 'Geist Mono'
			}
		}
	},
};

export default config;
