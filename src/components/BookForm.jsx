import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "@mui/system";

import { bookSchema } from "../helpers/bookSchema";

import MyInput from "./elements/MyInput";
import MyButton from "./elements/MyButton";

const BookForm = () => {
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
    alert(JSON.stringify(data));
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
      <Box>
        <MyButton type="submit" color="secondary">
          Add a book
        </MyButton>
      </Box>
    </form>
  );
};

export default BookForm;
