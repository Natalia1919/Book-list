import {
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
  IS_READ,
  REMOVE_ALL,
} from "./bookTypes";

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const editBook = (payload) => ({
  type: EDIT_BOOK,
  payload,
});

export const toggleIsRead = (payload) => ({
  type: IS_READ,
  payload,
});

export const removeAll = () => ({
  type: REMOVE_ALL,
});
