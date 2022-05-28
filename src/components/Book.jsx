import React from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";

import BookForm from "./BookForm";

const Book = () => {
  return (
    <Container maxWidth="md">
      <Card className="book">
        <CardContent>
          <Typography variant="h4" className="book__title">
            Add a new book
          </Typography>
          <BookForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Book;
