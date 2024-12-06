import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitStateNames } from "../../config/constants";

interface ISubjectSlice {
  subject: string;
}

const initialState: ISubjectSlice = {
  subject: "",
};

export const subjectSlice = createSlice({
  name: InitStateNames.appBar,
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
  },
});

export const { setSubject } = subjectSlice.actions;

export default subjectSlice.reducer;
