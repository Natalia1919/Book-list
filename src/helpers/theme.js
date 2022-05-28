import { purple, indigo, grey, blueGrey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: purple[200],
          },
          secondary: {
            main: purple[400],
          },
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
          background: {
            default: purple[100],
            paper: purple[50],
            card: purple[50],
          },
        }
      : {
          primary: {
            main: indigo[900],
          },
          secondary: {
            main: blueGrey[900],
          },

          text: {
            primary: grey[100],
            secondary: grey[200],
          },
          background: {
            default: indigo[300],
            paper: indigo[600],
          },
        }),
  },
});
