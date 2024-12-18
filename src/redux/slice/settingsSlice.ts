import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  armenian,
  InitStateNames,
  ILanguageTypes,
} from "../../config/constants";

export type TThemeState = "light" | "dark" | "system";

interface SettingsState {
  fontSize: number;
  isMobile: boolean;
  language: ILanguageTypes;
  nightShiftMode: TThemeState;
}

const initialState: SettingsState = {
  fontSize: 1,
  isMobile: navigator.maxTouchPoints > 0,
  language: armenian,
  nightShiftMode: "system",
};

export const settingsSlice = createSlice({
  name: InitStateNames.settings,
  initialState,
  reducers: {
    changeFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = Number(action.payload.toFixed(1));
    },
    toggleNightShift: (state) => {
      if (state.nightShiftMode === "light") {
        state.nightShiftMode = "dark";
      } else if (state.nightShiftMode === "dark") {
        state.nightShiftMode = "system";
      } else {
        state.nightShiftMode = "light";
      }
    },
    setNightShiftMode: (state, action: PayloadAction<TThemeState>) => {
      state.nightShiftMode = action.payload;
    },
  },
});
export const {
  changeFontSize,
  toggleNightShift,
  setNightShiftMode,
} = settingsSlice.actions;

export default settingsSlice.reducer;
