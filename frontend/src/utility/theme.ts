export const getThemeConfig = (mode: "light" | "dark") => ({
    token: {
        colorPrimary: mode === "dark" ? "#1a73e8" : "#62acfc",
        colorSecondary: mode === "dark" ? "#1a5fff" : "#2E4CFF",
    },
});
