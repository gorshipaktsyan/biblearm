import { createSlice } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import booksService from "../../services/booksService";
import { IBook } from "../../types";

interface HymnsState {
  books: IBook[];
  filteredBooks: IBook[];
}

const initialState: HymnsState = {
  books: booksService.get() || [],
  filteredBooks: [],
};

export const hymnsSlice = createSlice({
  name: InitStateNames.hymns,
  initialState,
  reducers: {},
});

export default hymnsSlice.reducer;
