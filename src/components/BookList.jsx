import React from "react";
import { useSelector } from "react-redux";

import { Container, Card, CardContent } from "@mui/material";

import BookItem from "./BookItem";

const BookList = () => {
  const books = useSelector((state) => state.books.bookItems);
  return (
    <Container>
      <Card>
        <CardContent>
          <ul className="book__items">
            {books.map((book) => {
              return <BookItem key={book.id} book={book} />;
            })}
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BookList;
