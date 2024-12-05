import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";

interface ITitle {
  fullName: string;
  chapterName: string;
}
interface IAppBarState {
  title: ITitle;
  isSaved: boolean;
}

const initialState: IAppBarState = {
  title: {
    fullName: "",
    chapterName: "",
  },
  isSaved: false,
};

export const appBarSlice = createSlice({
  name: InitStateNames.appBar,
  initialState,
  reducers: {
    setAppBarTitle: (state, action: PayloadAction<ITitle>) => {
      state.title = action.payload;
    },
    setIsSaved: (state, action: PayloadAction<boolean>) => {
      state.isSaved = action.payload;
    },
  },
});

export const { setAppBarTitle, setIsSaved } = appBarSlice.actions;

export default appBarSlice.reducer;
