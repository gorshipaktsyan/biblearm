import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCurrentVerses } from "../../../redux/slice/versesSlice";
import { ListComponent } from "../../components";
import styled from "@emotion/styled";
import versesService from "../../../services/versesService";
import { setCurrentChapter } from "../../../redux/slice/currentChapterSlice";

export default function ChaptersList() {
  const dispatch = useDispatch();
  const { currentBook } = useSelector((state: RootState) => state.books);
  const { currentChapter } = useSelector(
    (state: RootState) => state.currentChapter
  );
  const language = useSelector((state: RootState) => state.settings.language);

  const handleChapterClick = (currentChapter: number): void => {
    const filteredVerses = versesService.getChapterVerses({
      chapter: currentChapter,
      bookId: currentBook!._id,
    });
    dispatch(setCurrentVerses(filteredVerses));
    dispatch(setCurrentChapter(currentChapter));
  };

  const chaptersArray = Array.from(
    { length: currentBook!.chapters || 0 },
    (_, i) => i + 1
  );

  return (
    <>
      <StyledBookName>{currentBook!.full_name}</StyledBookName>
      <ListComponent<number>
        itemsArray={chaptersArray}
        activeItem={currentChapter}
        onItemClick={(chapter) => handleChapterClick(chapter)}
        renderItem={(chapter) => chapter}
        headerName={language.books.headers}
      />
    </>
  );
}

const StyledBookName = styled(Box)({
  marginTop: "50px",
  fontWeight: "bold",
});
