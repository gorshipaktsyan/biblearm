import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import { IVerse } from "../../types";

export interface ISearchResult {
  bookName: string;
  verses: IVerse[];
}
interface SearchState {
  foundVerses: ISearchResult[];
}

const initialState: SearchState = {
  foundVerses: [],
};

export const searchSlice = createSlice({
  name: InitStateNames.search,
  initialState,
  reducers: {
    setFoundVerses: (state, action: PayloadAction<ISearchResult[]>) => {
      state.foundVerses = action.payload;
    },
  },
});

export const { setFoundVerses } = searchSlice.actions;

export default searchSlice.reducer;
