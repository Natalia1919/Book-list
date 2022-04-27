import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

import { getDesignTokens } from "../helpers/theme";

const ModeContext = createContext(null);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const handleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ModeContext.Provider value={{ mode, theme, handleTheme }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
