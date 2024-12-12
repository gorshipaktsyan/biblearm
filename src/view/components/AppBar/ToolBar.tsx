import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Bookmark,
  BookmarkBorder,
  Settings,
  Search,
  Bookmarks,
} from "@mui/icons-material/";
import { Box, IconButton, Toolbar } from "@mui/material";
import { copyToClipboard } from "../../../utils";
import { useSelector } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";

interface IToolBar {
  setCopyAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToolBar({ setCopyAlert }: IToolBar) {
  const currentBook = useSelector((state) => state.books.currentBook);
  const { title, isSaved } = useSelector((state) => state.appBar);
  // const { savedChapters } = useSelector((state) => state.bookmarks);
  const { language } = useSelector((state: RootState) => state.settings);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (currentHymnNumber) {
  //     const formattedData = formatDataForBookmarks({
  //       hymns: savedHymns,
  //       language,
  //     });
  //     const isBookmarked = showBookmark({
  //       formattedData,
  //       currentHymnNumber,
  //     });
  //     dispatch(setIsSaved(isBookmarked));
  //   }
  // }, [currentHymnNumber, savedHymns, dispatch, language]);

  // function handleBookmarkClick() {
  //   if (currentHymnNumber) {
  //     if (isSaved) {
  //       dispatch(removeHymn(currentHymnNumber));
  //       dispatch(setIsSaved(false));
  //     } else {
  //       const hymnObject = setDataForBookmarks(currentHymnNumber);
  //       dispatch(saveHymn(hymnObject));
  //       dispatch(setIsSaved(true));
  //     }
  //   }
  // }
  function handleBookmarksClick() {
    navigate("/bookmarks");
  }
  function handleSettingsClick() {
    navigate("/settings");
  }
  function handleTitleClick() {
    if (pathname.includes(`/hymns`)) {
      copyToClipboard(window.location.href);
      setCopyAlert(true);
    }
  }
  return (
    <Toolbar>
      <Box
        sx={{
          fontSize: "20px",
          cursor: "default",
        }}
        onClick={handleTitleClick}
      />
      <Box sx={{ color: "#F5EB5B" }}>{title}</Box>
      <Box
        sx={{
          flexGrow: "1",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton>
          <Search sx={{ color: "white" }}></Search>
        </IconButton>
        <IconButton onClick={handleSettingsClick}>
          <Settings sx={{ color: "white" }}></Settings>
        </IconButton>
        <IconButton onClick={handleBookmarksClick}>
          <Bookmarks sx={{ color: "white" }}></Bookmarks>
        </IconButton>
      </Box>
      {pathname === "/chapter" && (
        <>
          <IconButton
            color="inherit"
            // onClick={handleBookmarkClick}
          >
            {currentBook &&
              (isSaved ? (
                <Bookmark sx={{ fontSize: "30px" }} />
              ) : (
                <BookmarkBorder sx={{ fontSize: "30px" }} />
              ))}
          </IconButton>
        </>
      )}
    </Toolbar>
  );
}
