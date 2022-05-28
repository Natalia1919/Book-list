import { Button } from "@mui/material";
import React from "react";

const MyButton = ({ children, color, type, ...props }) => {
  return (
    <Button variant="contained" type={type} color={color} {...props}>
      {children}
    </Button>
  );
};

export default MyButton;
