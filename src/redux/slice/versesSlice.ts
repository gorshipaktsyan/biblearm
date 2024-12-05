import { createSlice } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";
import { IVerse } from "../../types";
import versesService from "../../services/versesService";

interface HymnsState {
  verses: IVerse[];
  filteredVerses: IVerse[];
}

const initialState: HymnsState = {
  verses: versesService.get() || [],
  filteredVerses: [],
};

export const hymnsSlice = createSlice({
  name: InitStateNames.hymns,
  initialState,
  reducers: {},
});

export default hymnsSlice.reducer;
