import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitStateNames } from "../../config/constants";
import { IBook } from "../../types";

interface ICurrentBookState {
  currentBook: IBook | {};
}

const initialState: ICurrentBookState = {
  currentBook: {},
};

export const currentBookSlice = createSlice({
  name: InitStateNames.currentHymns,
  initialState,
  reducers: {
    setCurrentBook: (state, action: PayloadAction<IBook>) => {
      state.currentBook = action.payload;
    },
  },
});

export const { setCurrentBook } = currentBookSlice.actions;

export default currentBookSlice.reducer;
