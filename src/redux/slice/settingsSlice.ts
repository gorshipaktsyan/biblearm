import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  armenian,
  InitStateNames,
  ILanguageTypes,
} from "../../config/constants";

interface SettingsState {
  fontSize: number;
  isAllowToUseArrows: boolean;
  isMobile: boolean;
  language: ILanguageTypes;
  isNightShiftEnabled: boolean;
}

const initialState: SettingsState = {
  fontSize: 1,
  isAllowToUseArrows: false,
  isMobile: navigator.maxTouchPoints > 0,
  language: armenian,
  isNightShiftEnabled: false,
};

export const settingsSlice = createSlice({
  name: InitStateNames.settings,
  initialState,
  reducers: {
    changeFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = Number(action.payload.toFixed(1));
    },
    setIsAllowToUseArrows: (state, action: PayloadAction<boolean>) => {
      state.isAllowToUseArrows = action.payload;
    },
    toggleNightShift: (state) => {
      state.isNightShiftEnabled = !state.isNightShiftEnabled;
    },
  },
});

export const { changeFontSize, setIsAllowToUseArrows, toggleNightShift } =
  settingsSlice.actions;

export default settingsSlice.reducer;
