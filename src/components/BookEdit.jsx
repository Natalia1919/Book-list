import React from "react";

import { Typography, Card } from "@mui/material";
import { Box } from "@mui/system";

import BookForm from "./BookForm";

const BookEdit = () => {
  return (
    <Card className="modal-container">
      <Box mb={5}>
        <Typography variant="h4" className="book__title">
          Edit book
        </Typography>
      </Box>
      <BookForm />
    </Card>
  );
};

export default BookEdit;
