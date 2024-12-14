import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import { IVerse } from "../../types";
import versesService from "../../services/versesService";

interface versesState {
  verses: IVerse[];
  currentVerses: IVerse[];
  clickedVerse: number;
}

const initialState: versesState = {
  verses: versesService.get() || [],
  currentVerses: [],
  clickedVerse: 1,
};

export const versesSlice = createSlice({
  name: InitStateNames.verses,
  initialState,
  reducers: {
    setCurrentVerses: (state, action: PayloadAction<IVerse[]>) => {
      state.currentVerses = action.payload;
    },
    setClickedVerse: (state, action: PayloadAction<number>) => {
      state.clickedVerse = action.payload;
    },
  },
});

export const { setCurrentVerses, setClickedVerse } = versesSlice.actions;
export default versesSlice.reducer;
