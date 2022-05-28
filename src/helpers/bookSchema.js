import * as yup from "yup";

export const bookSchema = yup.object().shape({
  title: yup
    .string()
    .required("* The title is required")
    .min(3, "* Min length is 3")
    .max(50, "* Max length is 50"),
  author: yup
    .string()
    .required("* The author is required")
    .min(5, "* Min length is 5")
    .max(50, "* Max length is 50"),
});
