import React, { useContext } from "react";

import { Checkbox, IconButton, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import ModeContext from "../context/ThemeContext";

const BookItem = ({ id, title, author, isRead }) => {
  const { handleModal } = useContext(ModeContext);
  return (
    <li className="book__item">
      <Checkbox
        checked={isRead}
        // onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        color="secondary"
      />
      <div className="book__content">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{author}</Typography>
      </div>
      <div>
        <IconButton onClick={handleModal}>
          <Edit sx={{ fontSize: 28 }} color="secondary" />
        </IconButton>
        <IconButton>
          <Delete sx={{ fontSize: 28 }} color="secondary" />
        </IconButton>
      </div>
    </li>
  );
};

export default BookItem;
