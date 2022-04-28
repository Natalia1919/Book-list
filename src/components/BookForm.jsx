import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import { Box } from "@mui/system";

import { addBook } from "../redux/books/bookActions";
import { capitalizeFirstLet, capitalize } from "../helpers/string";
import { bookSchema } from "../helpers/bookSchema";

import MyInput from "./elements/MyInput";
import MyButton from "./elements/MyButton";

const BookForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(bookSchema),
  });

  const onSubmitBook = (data) => {
    const newBook = {
      id: Number(new Date()),
      title: capitalizeFirstLet(data.title),
      author: capitalize(data.author),
      isRead: false,
    };
    dispatch(addBook(newBook));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitBook)}>
      <Box mb={2}>
        <MyInput
          name="title"
          label="Title"
          register={register("title")}
          error={!!errors?.author}
          errorText={errors?.title?.message}
        />
      </Box>
      <Box mb={2}>
        <MyInput
          name="author"
          label="Author"
          register={register("author")}
          error={!!errors?.author}
          errorText={errors?.author?.message}
        />
      </Box>
      <Box className="book__btns">
        <MyButton type="submit" color="secondary">
          Add book
        </MyButton>
      </Box>
    </form>
  );
};

export default BookForm;
