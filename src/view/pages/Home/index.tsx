import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ChaptersList from "./ChaptersList";
import VersesList from "./VersesList";
import { useEffect, useState } from "react";
import { BookList } from "./BookList";
import { Box } from "@mui/material";
import StyledComponents from "../../styles";
import { setCurrentChapter } from "../../../redux/slice/currentChapterSlice";

const { StyledContainer } = StyledComponents;

export default function Home() {
  const { currentBook } = useSelector((state: RootState) => state.books);
  const currentVerses = useSelector(
    (state: RootState) => state.verses.currentVerses
  );
  const language = useSelector((state: RootState) => state.settings.language);

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
