import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";

import App from "../App";
import { setAppBarTitle } from "../redux/slice/appBarSlice";
import { AppDispatch, RootState } from "../redux/store";
import { setFontSize } from "../utils";
import { useDoubleTap } from "../utils/hooks";
import AppBar from "../view/components/AppBar";
import setTitle from "../utils/setTitle";

function Layout() {
  const settings = useSelector((state: RootState) => state.settings);
  const currentBook = useSelector(
    (state: RootState) => state.books.currentBook
  );
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  useDoubleTap({ pathname, fontSize: settings.fontSize, dispatch });

  useEffect(() => {
    setFontSize(settings.fontSize);
  }, [settings.fontSize]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentBook]);

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        backgroundColor: "#fdfde8",
      }}
    >
      <AppBar />
      <Box sx={{ padding: "20px 0 100px 0" }}>
        <App />
      </Box>
    </Box>
  );
}
export default Layout;
