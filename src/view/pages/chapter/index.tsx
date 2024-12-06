import React, { useState, useEffect } from "react";
import BooksService from "../../../services/booksService";
import useAppState from "../../../libs/hooks/useAppState";
import ChapterStyledComponents from "./styles";
import ChapterHeader from "./ChapterHeader";
import Verse from "../../components/Verse";
import { Box, Divider } from "@mui/material";
import actions from "../../../store/actions";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { swipeConfig } from "../../../config";
import Subject from "../../components/Subject";
import { useSelector, useSwipeNavigation } from "../../../utils/hooks";
import versesService from "../../../services/versesService";
import { IVerse } from "../../../types";
import { RootState } from "../../../redux/store";

const { StyledChapter, StyledContainer, StyledFab } = ChapterStyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const currentBook = useSelector(
    (state: RootState) => state.currentBook.currentBook
  );
  const currentChapter = useSelector(
    (state: RootState) => state.currentChapter.currentChapter
  );
  const [ChapterVerses, setChapterVerses] = useState<IVerse[]>(
    versesService.getChapterVerses(
      currentBook && currentBook._id,
      currentChapter
    )
  );
  const chapterName: string =
    currentChapter === 1
      ? `${currentChapter}-ԻՆ ԳԼՈՒԽ`
      : `${currentChapter}-ՐԴ ԳԼՈՒԽ`;
  const book = state.home.books.find(
    (book: { bookId: string }) => book.bookId === currentBook
  );

  useEffect(() => {
    setChapterVerses(
      versesService.getChapterVerses(currentBook, currentChapter)
    );
  }, [currentChapter, currentBook]);

  // const { handleLeftSwipe, handleRightSwipe, handlers } = useSwipeNavigation({
  //   currentBook,
  //   navigate,
  // });
  return (
    <StyledContainer
    // {...handlers}
    >
      <StyledChapter>
        <ChapterHeader fullName={book.fullName} chapterName={chapterName} />
        <Divider />
        {currentChapter === 1 && <Subject subject={book.subject} />}
        {ChapterVerses.map((verse) => {
          return (
            <Verse
              id={verse._id}
              prefix={verse.prefix}
              number={verse.number}
              verse={verse.verse}
            />
          );
        })}
      </StyledChapter>
      <StyledFab onClick={() => navigate("/")}>
        <ArrowBackIcon
          sx={{
            color: "white",
          }}
        />
      </StyledFab>
    </StyledContainer>
  );
}
