import { useMemo } from "react";
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

export default function App() {
  const { nightShiftMode } = useSelector((state: RootState) => state.settings);
  const systemTheme =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : "light";

  const mode = nightShiftMode === "system" ? systemTheme : nightShiftMode;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#1976d2",
            dark: "#1565c0",
            light: "#63a4ff",
          },
          secondary: {
            main: "#9c27b0",
          },
          background: {
            default: mode === "light" ? "#fdfde8" : "#252525",
          },
        },
      }),
    [mode]
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
  padding: "80px 0 100px 0",
}));
