import React from "react";

import { TextField } from "@mui/material";
const MyInput = ({ label, register, errorText, ...props }) => {
  return (
    <TextField
      variant="standard"
      fullWidth
      label={label}
      {...register}
      helperText={errorText}
      {...props}
    />
  );
};

export default MyInput;
