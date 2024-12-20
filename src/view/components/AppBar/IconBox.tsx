import { Box, IconButton } from "@mui/material";
import {
  MenuBook,
  Search,
  Settings,
  Book,
  Bookmark,
  BookmarkBorder,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setIsSaved } from "../../../redux/slice/appBarSlice";
import { saveBook, unSaveBook } from "../../../redux/slice/savedBookSlice";
import { useEffect } from "react";

interface IRenderIconButton {
  currentPath: string;
  targetPath: string;
  IconComponent: React.ElementType;
  onClick: () => void;
  label: string;
}

export default function IconBox() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { savedBook } = useSelector((state: RootState) => state);
  const { isSaved } = useSelector((state: RootState) => state.appBar);
  const { currentBook } = useSelector((state: RootState) => state.books);
  const { currentChapter } = useSelector(
    (state: RootState) => state.currentChapter
  );

  useEffect(() => {
    if (currentBook) {
      const isBookmarked =
        savedBook.bookCode === currentBook.code &&
        savedBook.currentChapter === currentChapter;
      dispatch(setIsSaved(isBookmarked));
    }
  }, [currentBook, savedBook, currentChapter, dispatch]);

  function handleNavigation(route: string) {
    navigate(route);
  }

  function handleBookmarkClick() {
    if (!currentBook) return;
    dispatch(
      isSaved
        ? unSaveBook()
        : saveBook({ bookCode: currentBook.code, currentChapter })
    );
    dispatch(setIsSaved(!isSaved));
  }

  function renderIconButton({
    currentPath,
    targetPath,
    IconComponent,
    onClick,
    label,
  }: IRenderIconButton) {
    if (currentPath === targetPath) return null;

    return (
      <IconButton aria-label={label} onClick={onClick}>
        <IconComponent sx={{ color: "white" }} />
      </IconButton>
    );
  }

  const showSavedBookButton =
    pathname === "/" && savedBook.bookCode && savedBook.currentChapter;
  const showBookmarkButton = pathname.includes("/chapter");
  return (
    <StyledIconBox>
      {renderIconButton({
        currentPath: pathname,
        targetPath: "/",
        IconComponent: MenuBook,
        onClick: () => handleNavigation("/"),
        label: "Books",
      })}
      {renderIconButton({
        currentPath: pathname,
        targetPath: "/search",
        IconComponent: Search,
        onClick: () => handleNavigation("/search"),
        label: "Search",
      })}
      {renderIconButton({
        currentPath: pathname,
        targetPath: "/settings",
        IconComponent: Settings,
        onClick: () => handleNavigation("/settings"),
        label: "Settings",
      })}
      {showSavedBookButton &&
        renderIconButton({
          currentPath: "",
          targetPath: "/",
          IconComponent: Book,
          onClick: () =>
            handleNavigation(
              `/chapter/${savedBook.bookCode}/${savedBook.currentChapter}`
            ),
          label: "SavedBook",
        })}
      {showBookmarkButton &&
        renderIconButton({
          currentPath: pathname,
          targetPath: "/chapter",
          IconComponent: isSaved ? Bookmark : BookmarkBorder,
          onClick: handleBookmarkClick,
          label: isSaved ? "Remove Bookmark" : "Add Bookmark",
        })}
    </StyledIconBox>
  );
}

const StyledIconBox = styled(Box)({
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 1,
});
