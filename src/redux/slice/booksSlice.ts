import { createSlice } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import booksService from "../../services/booksService";
import { IBook } from "../../types";

interface IBooksState {
  books: IBook[];
  filteredBooks: IBook[];
}

const initialState: IBooksState = {
  books: booksService.get() || [],
  filteredBooks: [],
};

export const booksSlice = createSlice({
  name: InitStateNames.books,
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
