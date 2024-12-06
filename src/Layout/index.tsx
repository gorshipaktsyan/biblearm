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

function Layout() {
  const settings = useSelector((state: RootState) => state.settings);
  const currentBook = useSelector(
    (state: RootState) => state.currentBook.currentBook
  );
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  useDoubleTap({ pathname, fontSize: settings.fontSize, dispatch });

  useEffect(() => {
    setFontSize(settings.fontSize);
  }, [settings.fontSize]);

  // useEffect(() => {
  //   const title = setTitle({
  //     currentHymns,
  //     pathname,
  //     lg: settings.language,
  //   });
  //   title && dispatch(setAppBarTitle(title));
  // }, [currentHymns, pathname, dispatch, settings.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentBook]);

  return (
    <Box sx={{ height: "100%" }}>
      <AppBar />
      <Box className="container">
        <App />
      </Box>
    </Box>
  );
}
export default Layout;
