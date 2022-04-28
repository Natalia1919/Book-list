import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box } from "@mui/system";
import { Container } from "@mui/material";

import { removeAll } from "../redux/books/bookActions";

import MyButton from "./elements/MyButton";

const BookStatistics = () => {
  const books = useSelector((state) => state.books.bookItems);
  const stat = {
    all: books.length,
    notRead: books.filter((book) => book.isRead !== true).length,
    read: books.filter((book) => book.isRead === true).length,
  };
  const dispatch = useDispatch();

  return (
    <>
      {books.length > 0 && (
        <Container maxWidth="md">
          <Box className="stat">
            <Box className="stat__result">
              <span className="stat__all">All : {stat.all}</span>
              <span className="stat__read">Read: {stat.read}</span>
              <span className="stat__notread">Not read: {stat.notRead}</span>
            </Box>
            <MyButton
              type="button"
              color="primary"
              onClick={() => {
                dispatch(removeAll());
              }}
            >
              Remove all
            </MyButton>
          </Box>
        </Container>
      )}
    </>
  );
};

export default BookStatistics;
