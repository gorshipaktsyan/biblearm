import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitStateNames } from "../../config/constants";

interface ISavedBook {
  bookCode: string | null;
  currentChapter: number | null;
}

const initialState: ISavedBook = {
  bookCode: null,
  currentChapter: null,
};

const savedBookSlice = createSlice({
  name: InitStateNames.savedBook,
  initialState,
  reducers: {
    saveBook: (state, action: PayloadAction<ISavedBook>) => {
      return action.payload;
    },
    unSaveBook: () => initialState,
  },
});

export const { saveBook, unSaveBook } = savedBookSlice.actions;
export default savedBookSlice.reducer;
