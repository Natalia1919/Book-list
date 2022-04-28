import React, { useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { Paper, Box } from "@mui/material";

import ModeContext from "./context/ThemeContext";

import BookList from "./components/BookList";
import Header from "./components/Header";
import Book from "./components/Book";

const App = () => {
  const { theme } = useContext(ModeContext);
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className="wrapper">
        <Header />
        <main>
          <Box mb={15}>
            <Book />
          </Box>
          <BookList />
        </main>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
