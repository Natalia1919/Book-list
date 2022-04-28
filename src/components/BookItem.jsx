import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { Checkbox, IconButton, Typography, Modal } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import { removeBook, toggleIsRead } from "../redux/books/bookActions";
import BookContext from "../context/BookContext";

import BookEdit from "./BookEdit";

const BookItem = ({ book }) => {
  const { id, title, author, isRead } = book;
  const { isModal, handleModal, startEditBook } = useContext(BookContext);
  const dispatch = useDispatch();

  return (
    <>
      <li className="book__item">
        <Checkbox
          checked={isRead}
          onChange={() => {
            dispatch(toggleIsRead(id));
          }}
          inputProps={{ "aria-label": "controlled" }}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          color="secondary"
        />
        <div className="book__content">
          <Typography
            className={`${isRead && "book__item-title"}`}
            variant="h4"
          >
            {title}
          </Typography>
          <Typography variant="h5">{author}</Typography>
        </div>
        <div>
          <IconButton onClick={() => startEditBook(book)}>
            <Edit sx={{ fontSize: 28 }} color="secondary" />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
            <Delete sx={{ fontSize: 28 }} color="secondary" />
          </IconButton>
        </div>
      </li>
      <Modal
        className="book__modal"
        open={isModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BookEdit />
      </Modal>
    </>
  );
};

export default BookItem;
