import {
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
  IS_READ,
  REMOVE_ALL,
} from "./bookTypes";
import bookList from "../../data/book-list";

const initialState = {
  bookItems: bookList,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookItems: [...state.bookItems, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        bookItems: state.bookItems.filter((book) => book.id !== action.payload),
      };
    case IS_READ:
      return {
        ...state,
        bookItems: state.bookItems.map((book) =>
          book.id === action.payload ? { ...book, isRead: !book.isRead } : book
        ),
      };
    case EDIT_BOOK:
      return {
        ...state,
        bookItems: state.bookItems.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case REMOVE_ALL:
      return {
        ...state,
        bookItems: [],
      };

    default:
      return state;
  }
};

export default bookReducer;
