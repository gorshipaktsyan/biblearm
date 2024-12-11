import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import { IBook } from "../../types";

interface BookmarksState {
  savedBooks: IBook[];
}

const initialState: BookmarksState = {
  savedBooks: [],
};

export const bookmarksSlice = createSlice({
  name: InitStateNames.bookmarks,
  initialState,
  reducers: {
    removeHymn: (state, action: PayloadAction<number>) => {
      state.savedHymns = state.savedHymns.filter(
        (day) => day.number !== action.payload
      );
    },
    saveHymn: (state, action) => {
      state.savedHymns.unshift(action.payload);
    },
  },
});

export const { removeHymn, saveHymn } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
