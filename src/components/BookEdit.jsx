import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Typography, Card } from "@mui/material";
import { Box } from "@mui/system";

import BookContext from "../context/BookContext";
import { editBook } from "../redux/books/bookActions";

import MyInput from "./elements/MyInput";
import MyButton from "./elements/MyButton";

const BookEdit = () => {
  const { bookEdit, closeModal } = useContext(BookContext);
  const [updatedBook, setUpdatedBook] = useState({
    id: null,
    title: "",
    author: "",
    isRead: false,
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookEdit.edit === true) {
      setUpdatedBook({
        id: bookEdit.item.id,
        title: bookEdit.item.title,
        author: bookEdit.item.author,
        isRead: bookEdit.item.isRead,
      });
    }
  }, [bookEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { title, author } = updatedBook;
    if (title.trim().length < 3 || author.trim().length < 5) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    setUpdatedBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitUpBook = (e) => {
    e.preventDefault();
    dispatch(editBook(updatedBook));

    setUpdatedBook((prev) => ({
      ...prev,
      title: "",
      author: "",
    }));

    closeModal();
  };

  return (
    <Card className="modal-container">
      <Box mb={5}>
        <Typography variant="h4" className="book__title">
          Edit book
        </Typography>
      </Box>
      <form onSubmit={onSubmitUpBook}>
        <Box mb={2}>
          <MyInput
            name="title"
            label="Title"
            required
            value={updatedBook.title}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <MyInput
            name="author"
            label="Author"
            required
            value={updatedBook.author}
            onChange={handleChange}
          />
        </Box>
        <Box className="book__btns">
          <MyButton type="submit" color="secondary" disabled={isDisabled}>
            Edit book
          </MyButton>
          <MyButton type="button" color="text" onClick={closeModal}>
            Close
          </MyButton>
        </Box>
      </form>
    </Card>
  );
};

export default BookEdit;
