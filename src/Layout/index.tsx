import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";

import App from "../App";
import { setAppBarTitle } from "../redux/slice/appBarSlice";
import { AppDispatch, RootState } from "../redux/store";
import { setFontSize, setTitle } from "../utils";
import { useDoubleTap } from "../utils/hooks";
import AppBar from "../view/components/AppBar";
import styled from "@emotion/styled";

function Layout() {
  const settings = useSelector((state: RootState) => state.settings);
  const { currentBook } = useSelector((state: RootState) => state.books);
  const { currentChapter } = useSelector(
    (state: RootState) => state.currentChapter
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

  useEffect(() => {
    const title = setTitle({
      currentBook,
      currentChapter,
      pathname,
      lg: settings.language,
    });
    title && dispatch(setAppBarTitle(title));
  }, [currentBook, currentChapter, pathname, settings.language, dispatch]);

  const StyledLayout = styled(Box)({
    minHeight: "100dvh",
    backgroundColor: settings.isNightShiftEnabled ? "#121212" : "#fdfde8",
    color: settings.isNightShiftEnabled ? "#ffffff" : "#000000",
  });
  return (
    <StyledLayout>
      <AppBar />
      <App />
    </StyledLayout>
  );
}
export default Layout;
