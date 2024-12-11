import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";

interface ICurrentChapterState {
  currentChapter: number | null;
}

const initialState: ICurrentChapterState = {
  currentChapter: null,
};

export const currentChapterSlice = createSlice({
  name: InitStateNames.currentChapter,
  initialState,
  reducers: {
    setCurrentChapter: (state, action: PayloadAction<number | null>) => {
      state.currentChapter = action.payload;
    },
  },
});

export const { setCurrentChapter } = currentChapterSlice.actions;

export default currentChapterSlice.reducer;
