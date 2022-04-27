import React, { useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { Paper } from "@mui/material";

import ModeContext from "./context/ThemeContext";

import Header from "./components/Header";
import Book from "./components/Book";

const App = () => {
  const { theme } = useContext(ModeContext);
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className="wrapper">
        <Header />
        <Book />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
