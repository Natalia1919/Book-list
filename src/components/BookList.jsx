import React from "react";
import { useSelector } from "react-redux";

import { Container, Card, CardContent, Typography } from "@mui/material";

import BookItem from "./BookItem";

const BookList = () => {
  const books = useSelector((state) => state.books.bookItems);
  return (
    <Container>
      {books.length ? (
        <Card>
          <CardContent>
            <ul className="book__items">
              {books.map((book) => {
                return <BookItem key={book.id} book={book} />;
              })}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h2" className="book__title">
          There are no books
        </Typography>
      )}
    </Container>
  );
};

export default BookList;
