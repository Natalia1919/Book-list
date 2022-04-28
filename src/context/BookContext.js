import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

import { getDesignTokens } from "../helpers/theme";

const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [isModal, setIsModal] = useState(false);
  const [bookEdit, setBookEdit] = useState({
    item: {},
    edit: false,
  });

  const handleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const startEditBook = (item) => {
    setBookEdit({
      item,
      edit: true,
    });
    setIsModal(true);
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <BookContext.Provider
      value={{
        mode,
        theme,
        isModal,
        bookEdit,
        handleTheme,
        openModal,
        closeModal,
        startEditBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
