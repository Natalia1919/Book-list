import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { Container, Card, CardContent, Modal } from "@mui/material";

import ModeContext from "../context/ThemeContext";

import BookItem from "./BookItem";
import BookEdit from "./BookEdit";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const { isModal, handleModal } = useContext(ModeContext);
  return (
    <Container>
      <Card>
        <CardContent>
          <ul className="book__items">
            {books.map((book) => {
              return <BookItem key={book.id} {...book} />;
            })}
          </ul>
        </CardContent>
      </Card>
      <Modal className="book__modal" open={isModal} onClose={handleModal}>
        <BookEdit />
      </Modal>
    </Container>
  );
};

export default BookList;
