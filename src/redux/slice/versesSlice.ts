import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import { IVerse } from "../../types";
import versesService from "../../services/versesService";

interface versesState {
  verses: IVerse[];
  currentVerses: IVerse[];
}

const initialState: versesState = {
  verses: versesService.get() || [],
  currentVerses: [],
};

export const versesSlice = createSlice({
  name: InitStateNames.verses,
  initialState,
  reducers: {
    setCurrentVerses: (state, action: PayloadAction<IVerse[]>) => {
      state.currentVerses = action.payload;
    },
  },
});

export const { setCurrentVerses } = versesSlice.actions;
export default versesSlice.reducer;
