import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Bookmark,
  BookmarkBorder,
  Settings,
  Search,
  Bookmarks,
  MenuBook,
} from "@mui/icons-material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { copyToClipboard } from "../../../utils";
import { useSelector } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";
import styled from "@emotion/styled";

interface IToolBar {
  setCopyAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToolBar({ setCopyAlert }: IToolBar) {
  const currentBook = useSelector((state) => state.books.currentBook);
  const { title, isSaved } = useSelector((state) => state.appBar);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  const handleTitleClick = () => {
    if (pathname.includes(`/hymns`)) {
      copyToClipboard(window.location.href);
      setCopyAlert(true);
    }
  };

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
        {pathname !== "/bookmarks" && (
          <IconButton
            aria-label="Bookmarks"
            onClick={() => handleNavigation("/bookmarks")}
          >
            <Bookmarks sx={{ color: "white" }} />
          </IconButton>
        )}
      </StyledIconBox>

      {pathname === "/chapter" && currentBook && (
        <IconButton
          aria-label={isSaved ? "Remove Bookmark" : "Add Bookmark"}
          onClick={() => {
            // Implement your bookmark handler logic here
          }}
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
