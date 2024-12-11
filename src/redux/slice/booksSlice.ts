import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import booksService from "../../services/booksService";
import { IBook } from "../../types";

interface IBooksState {
  books: IBook[];
  currentBook: IBook | null;
}

const initialState: IBooksState = {
  books: booksService.get() || [],
  currentBook: null,
};

export const booksSlice = createSlice({
  name: InitStateNames.books,
  initialState,
  reducers: {
    setCurrentBook: (state, action: PayloadAction<IBook>) => {
      state.currentBook = action.payload;
    },
  },
});
export const { setCurrentBook } = booksSlice.actions;
export default booksSlice.reducer;
