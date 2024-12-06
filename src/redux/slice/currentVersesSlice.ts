import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import { IVerse } from "../../types";
import versesService from "../../services/versesService";

interface ICurrentVersesState {
  currentVerses: IVerse[] | [];
}

const initialState: ICurrentVersesState = {
  currentVerses: [],
};

export const currentVersesSlice = createSlice({
  name: InitStateNames.currentVerses,
  initialState,
  reducers: {
    setCurrentVerses: (state, action: PayloadAction<IVerse[]>) => {
      state.currentVerses = action.payload;
    },
  },
});

export const { setCurrentVerses } = currentVersesSlice.actions;

export default currentVersesSlice.reducer;
