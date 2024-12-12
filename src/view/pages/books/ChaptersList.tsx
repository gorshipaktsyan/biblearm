import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCurrentChapter } from "../../../redux/slice/currentChapterSlice";
import { setCurrentVerses } from "../../../redux/slice/versesSlice";
import { ListComponent } from "../../components/List";
import versesService from "../../../services/versesService";

export default function ChaptersList() {
  const dispatch = useDispatch();
  const { verses } = useSelector((state: RootState) => state.verses);
  const currentBook = useSelector(
    (state: RootState) => state.books.currentBook
  );
  const language = useSelector((state: RootState) => state.settings.language);
  const { currentChapter } = useSelector(
    (state: RootState) => state.currentChapter
  );

  const handleChapterClick = (currentChapter: number): void => {
    const filteredVerses = verses.filter(
      (verse) =>
        verse.chapter === currentChapter && verse.book_id === currentBook!._id
    );
    dispatch(setCurrentVerses(filteredVerses));
    dispatch(setCurrentChapter(currentChapter));
  };
  const chaptersArray = Array.from(
    { length: currentBook?.chapters || 0 },
    (_, i) => i + 1
  );
  return (
    <>
      <Box sx={{ marginTop: "50px", fontWeight: "bold" }}>
        {currentBook!.full_name}
      </Box>
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
