import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCurrentVerses } from "../../../redux/slice/currentVersesSlice";
import BooksStyledComponents from "./styles";

const { StyledList, StyledItem } = BooksStyledComponents;

export default function ChaptersList() {
  const dispatch = useDispatch();
  const { verses } = useSelector((state: RootState) => state.verses);
  const { currentBook } = useSelector((state: RootState) => state.currentBook);

  const handleChapterClick = (currentChapter: number): void => {
    const filteredVerses = verses.filter(
      (verse) =>
        verse.chapter === currentChapter && verse.book_id === currentBook!._id
    );
    dispatch(setCurrentVerses(filteredVerses));
  };
  return (
    <>
      <Box sx={{ margin: "50px 0 15px 0" }}>{currentBook.full_name}</Box>
      <StyledList>
        {Array.from(
          { length: currentBook.chapters! },
          (_, index) => index + 1
        ).map((chapter) => (
          <StyledItem
            key={chapter}
            onClick={() => handleChapterClick(chapter!)}
          >
            {chapter}
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
}
