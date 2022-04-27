import React, { useContext } from "react";
import { ThemeProvider } from "@emotion/react";

import ModeContext from "./context/ThemeContext";

import Header from "./components/Header";

const App = () => {
  const { theme } = useContext(ModeContext);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
      </>
    </ThemeProvider>
  );
};

export default App;
