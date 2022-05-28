import React, { useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { Paper, Box } from "@mui/material";

import BookContext from "./context/BookContext";

import BookList from "./components/BookList";
import Header from "./components/Header";
import Book from "./components/Book";
import BookStatistics from "./components/BookStatistics";

const App = () => {
  const { theme } = useContext(BookContext);
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className="wrapper">
        <Header />
        <main>
          <Box mb={5}>
            <Book />
          </Box>
          <Box mb={5}>
            <BookStatistics />
          </Box>
          <BookList />
        </main>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
