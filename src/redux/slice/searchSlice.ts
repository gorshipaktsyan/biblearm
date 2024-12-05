import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import { IVerse } from "../../types";

interface SearchState {
  foundVerses: IVerse[];
}

const initialState: SearchState = {
  foundVerses: [],
};

export const searchSlice = createSlice({
  name: InitStateNames.search,
  initialState,
  reducers: {
    setFoundHymns: (state, action: PayloadAction<IVerse[]>) => {
      state.foundVerses = action.payload;
    },
  },
});

export const { setFoundHymns } = searchSlice.actions;

export default searchSlice.reducer;
