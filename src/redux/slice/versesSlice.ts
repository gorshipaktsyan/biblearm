import { createSlice } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import booksService from "../../services/booksService";
import { IBook, IVerse } from "../../types";
import versesService from "../../services/versesService";

interface versesState {
  verses: IVerse[];
  filteredVerses: IVerse[];
}

const initialState: versesState = {
  verses: versesService.get() || [],
  filteredVerses: [],
};

export const versesSlice = createSlice({
  name: InitStateNames.verses,
  initialState,
  reducers: {},
});

export default versesSlice.reducer;
