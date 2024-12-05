import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";

interface ISubjectSlice {
  subject: string;
}

const initialState: ISubjectSlice = {
  subject: "",
};

export const appBarSlice = createSlice({
  name: InitStateNames.appBar,
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
  },
});

export const { setSubject } = appBarSlice.actions;

export default appBarSlice.reducer;
