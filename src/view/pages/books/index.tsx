import BooksStyledComponents from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ChaptersList from "./ChaptersList";
import VersesList from "./VersesList";
import { useEffect } from "react";
import { setAppBarTitle } from "../../../redux/slice/appBarSlice";
import setTitle from "../../../utils/setTitle";

import { BookList } from "./BookList";
import { Box } from "@mui/material";

const { StyledContainer } = BooksStyledComponents;

export default function Books() {
  const dispatch = useDispatch();
  const currentBook = useSelector(
    (state: RootState) => state.books.currentBook
  );
  const currentVerses = useSelector(
    (state: RootState) => state.verses.currentVerses
  );
  const language = useSelector((state: RootState) => state.settings.language);

  useEffect(() => {
    const title = setTitle({
      currentBook: null,
      currentChapter: null,
      pathname: "/",
      lg: language,
    });
    dispatch(setAppBarTitle(title));
  }, []);

  return (
    <>
      <StyledContainer>
        <Box sx={{ fontWeight: "bold" }}>{language.books.recoveryVersion}</Box>
        <BookList />
        {currentBook && (
          <>
            <ChaptersList />
            {currentVerses.length > 0 && <VersesList />}
          </>
        )}
      </StyledContainer>
    </>
  );
}
