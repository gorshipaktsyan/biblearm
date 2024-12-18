import { Theme as MuiTheme } from "@mui/material/styles";
import { TThemeState } from "./redux/slice/settingsSlice";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      mode: TThemeState;
      primary: {
        main: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        contrastText: string;
      };
      background: {
        default: string;
      };
      text: {
        primary: string;
      };
    };
  }

  interface ThemeOptions {
    palette?: {
      mode?: TThemeState;
      primary?: {
        main?: string;
        contrastText?: string;
      };
      secondary?: {
        main?: string;
        contrastText?: string;
      };
      background?: {
        default?: string;
      };
      text?: {
        primary?: string;
      };
    };
  }
}
