import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK, IS_READ } from "./bookTypes";

const initialState = [
  {
    id: 1,
    title: "Martin Eden",
    author: "Jack London",
    isRead: false,
  },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    isRead: true,
  },
  {
    id: 3,
    title: "Frankenstein",
    author: "Mary Shelley",
    isRead: true,
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    isRead: true,
  },
  {
    id: 5,
    title: "Pygmalion",
    author: "George Bernard Shaw",
    isRead: false,
  },
];
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bookReducer;
