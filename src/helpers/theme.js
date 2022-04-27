export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#9229c7",
          },
          text: {
            primary: "#000000",
            secondary: "#4b4b4b",
          },
          background: {
            default: "#d4a4d4",
          },
        }
      : {
          primary: {
            main: "#590d72",
          },

          text: {
            primary: "#bfbfbf",
            secondary: "#848484",
          },

          background: {
            default: "#8a489e !important",
          },
        }),
  },
});
