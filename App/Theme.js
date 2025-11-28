import { createTheme } from "@mui/material/styles";


const dark = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#6366F1",
        },

        secondary: {
            main: "#8B5CF6",
        },

        info: {
            main: "#06B6D4",
        },

        background: {
            default: "#0F172A",
            paper: "#1E293B",
        },
        text: {
            primary: "#F8FAFC",
            secondary: "#F1F5F9",
        },

    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ":root": {
                    "--color-primary": "#6366F1",
                    "--color-secondary": "#8B5CF6",
                    "--color-accent": "#06B6D4",

                    "--color-bg": "#0F172A",
                    "--color-text": "#F8FAFC",
                    "--color-muted-bg": "#1E293B",

                    "--color-primary-hsl": "239, 84%, 67%",
                    "--color-secondary-hsl": "262, 83%, 66%",
                    "--color-accent-hsl": "189, 94%, 43%",
                }
            }
        }
    }
});

const light = createTheme({
    palette: {
        mode: "light",

        primary: { main: "#6366F1" },
        secondary: { main: "#8B5CF6" },
        info: { main: "#06B6D4" },

        background: {
            default: "#FFFFFF",
            paper: "#F1F5F9",
        },

        text: {
            primary: "#1E293B",
            secondary: "#334155",
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ":root": {
                    "--color-primary": "#6366f1",
                    "--color-secondary": "#8b5cf6",
                    "--color-accent": "#06b6d4",

                    "--color-bg": "#ffffff",
                    "--color-text": "#1e293b",
                    "--color-muted-bg": "#f1f5f9",

                    "--color-primary-hsl": "239, 84%, 67%",
                    "--color-secondary-hsl": "262, 83%, 66%",
                    "--color-accent-hsl": "189, 94%, 43%",
                },

            },
        },
    },
});

const themes = {light , dark}

export default themes;
