import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  Bookmark,
  BookmarkBorder,
  Settings,
  Search,
  Book,
  MenuBook,
} from "@mui/icons-material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { copyToClipboard } from "../../../utils";
import { useSelector } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { saveBook, unSaveBook } from "../../../redux/slice/savedBookSlice";
import booksService from "../../../services/booksService";
import { setIsSaved } from "../../../redux/slice/appBarSlice";
import { useEffect } from "react";

interface IToolBar {
  setCopyAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToolBar({ setCopyAlert }: IToolBar) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentBook } = useSelector((state: RootState) => state.books);
  const { currentChapter } = useSelector(
    (state: RootState) => state.currentChapter
  );
  const savedBook = useSelector((state: RootState) => state.savedBook);
  const { title, isSaved } = useSelector((state) => state.appBar);
  const { pathname } = useLocation();

  function handleNavigation(route: string) {
    navigate(route);
  }

  useEffect(() => {
    if (currentBook) {
      const isBookmarked =
        savedBook.bookCode === currentBook.code &&
        savedBook.currentChapter === currentChapter;
      dispatch(setIsSaved(isBookmarked));
    }
  }, [currentBook, savedBook, dispatch]);

  function handleTitleClick() {
    if (pathname.includes(`/chapter`)) {
      copyToClipboard(window.location.href);
      setCopyAlert(true);
    }
  }

  function handleBookmarkClick() {
    if (currentBook) {
      if (!isSaved) {
        dispatch(saveBook({ bookCode: currentBook.code, currentChapter }));
        dispatch(setIsSaved(true));
      } else {
        dispatch(unSaveBook());
        dispatch(setIsSaved(false));
      }
    }
  }

  return (
    <Toolbar>
      <StyledTitle onClick={handleTitleClick}>{title}</StyledTitle>
      <StyledIconBox>
        {pathname !== "/" && (
          <IconButton aria-label="Books" onClick={() => handleNavigation("/")}>
            <MenuBook sx={{ color: "white" }} />
          </IconButton>
        )}
        {pathname !== "/search" && (
          <IconButton
            aria-label="Search"
            onClick={() => handleNavigation("/search")}
          >
            <Search sx={{ color: "white" }} />
          </IconButton>
        )}
        {pathname !== "/settings" && (
          <IconButton
            aria-label="Settings"
            onClick={() => handleNavigation("/settings")}
          >
            <Settings sx={{ color: "white" }} />
          </IconButton>
        )}
        {pathname === "/" && savedBook.bookCode && (
          <IconButton
            aria-label="SavedBook"
            onClick={() =>
              handleNavigation(
                `/chapter/${savedBook!.bookCode}/${savedBook!.currentChapter}`
              )
            }
          >
            <Book sx={{ color: "white" }} />
          </IconButton>
        )}
      </StyledIconBox>

      {pathname.includes("/chapter") && (
        <IconButton
          aria-label={isSaved ? "Remove Bookmark" : "Add Bookmark"}
          onClick={handleBookmarkClick}
        >
          {isSaved ? (
            <Bookmark sx={{ fontSize: "30px", color: "white" }} />
          ) : (
            <BookmarkBorder sx={{ fontSize: "30px", color: "white" }} />
          )}
        </IconButton>
      )}
    </Toolbar>
  );
}

const StyledTitle = styled(Box)({
  fontSize: "20px",
  cursor: "pointer",
  color: "#F5EB5B",
});
const StyledIconBox = styled(Box)({
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 1,
});
