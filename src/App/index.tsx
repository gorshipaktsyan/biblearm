import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import routes from "../routes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const getThemeTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: {
            default: "#121212", // Dark grayish background
            paper: "#1E1E1E", // Slightly lighter for cards
          },
          text: {
            primary: "#FFFFFF", // White text
            secondary: "#B0BEC5", // Subtle gray text
          },
        }
      : {
          background: {
            default: "#fdfde8", // Light background
            paper: "#FFFFFF", // White cards
          },
          text: {
            primary: "#000000", // Black text
            secondary: "#424242", // Dark gray for subtler text
          },
        }),
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: 14,
  },
});

export default function App() {
  const isNightShiftEnabled = useSelector(
    (state: RootState) => state.settings.isNightShiftEnabled
  );
  const theme = useMemo(
    () => createTheme(getThemeTokens(isNightShiftEnabled ? "dark" : "light")),
    [isNightShiftEnabled]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledApp>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled(Box)(({ theme }) => ({
  minHeight: "100dvh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: "80px 0 100px 0",
}));
