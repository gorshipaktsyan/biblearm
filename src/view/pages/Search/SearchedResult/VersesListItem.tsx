import { Box, styled, ListItem } from "@mui/material";
import { IVerse } from "../../../../types";
import StyledComponents from "../../../styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import booksService from "../../../../services/booksService";
import { setCurrentBook } from "../../../../redux/slice/booksSlice";
import { setCurrentChapter } from "../../../../redux/slice/currentChapterSlice";
import { setClickedVerse } from "../../../../redux/slice/versesSlice";

interface IVersesListItem {
  verse: IVerse;
}

const { StyledVerseNumber } = StyledComponents;

export default function VersesListItem({ verse }: IVersesListItem) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(verse: IVerse) {
    const foundBook = booksService.findBookById(verse.book_id);
    if (foundBook) {
      dispatch(setCurrentBook(foundBook));
      dispatch(setCurrentChapter(verse.chapter));
      dispatch(setClickedVerse(verse.number));
      navigate(`/chapter/${foundBook.code}/${verse.chapter}`);
    }
  }

  return (
    <StyledListItem key={verse._id} onClick={() => handleClick(verse)}>
      <StyledVerseNumber>{`${verse.chapter}:${verse.number}`}</StyledVerseNumber>
      <Box>{verse.verse}</Box>
    </StyledListItem>
  );
}

const StyledListItem = styled(ListItem)({
  display: "flex",
  alignItems: "start",
  width: "100%",
  maxWidth: "700px",

  "&:hover": {
    backgroundColor: "#f0f0dc",
    cursor: "pointer",
  },
});
