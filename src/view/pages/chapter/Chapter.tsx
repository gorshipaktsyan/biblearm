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

const { StyledChapter, StyledContainer, StyledFab } = ChapterStyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const { state, dispatch } = useAppState();
  const { currentBook, currentChapter } = state.chapter;
  const [verses, setVerses] = useState<any[]>(
    BooksService.getChapter({ currentBook, currentChapter })
  );
  const chapterName: string =
    currentChapter === 1
      ? `${currentChapter}-ԻՆ ԳԼՈՒԽ`
      : `${currentChapter}-ՐԴ ԳԼՈՒԽ`;
  const book = state.home.books.find(
    (book: { bookId: string }) => book.bookId === currentBook
  );

  useEffect(() => {
    setVerses(BooksService.getChapter({ currentBook, currentChapter }));
  }, [currentChapter, currentBook]);

  const handleLeftSwipe = (): void => {
    const index: number = book.content.findIndex(
      (chapter: number) => chapter === currentChapter + 1
    );
    if (index !== -1) {
      dispatch({
        type: actions.SET_CURRENT_BCV,
        payload: { currentChapter: currentChapter + 1 },
      });
    }
  };

  const handleRightSwipe = (): void => {
    const index: number = book.content.findIndex(
      (chapter: number) => chapter === currentChapter - 1
    );
    if (index !== -1) {
      dispatch({
        type: actions.SET_CURRENT_BCV,
        payload: { currentChapter: currentChapter - 1 },
      });
    }
  };

  const handlers: SwipeableHandlers = useSwipeable(
    {
      onSwipedLeft: handleLeftSwipe,
      onSwipedRight: handleRightSwipe,
      swipeDuration: 500,
      preventScrollOnSwipe: true,
      trackMouse: true,
    },
    swipeConfig
  );

  const handleBack = (): void => {
    navigate("/");
  };

  return (
    <StyledContainer {...handlers}>
      <StyledChapter>
        <ChapterHeader fullName={book.fullName} chapterName={chapterName} />
        <Divider />
        {currentChapter === 1 && <Subject subject={book.subject} />}
        {(verses || []).map(
          (v: {
            _id: string;
            prefix: string;
            number: number;
            verse: string;
          }) => {
            return (
              <Box key={v._id}>
                <Verse
                  id={v._id}
                  prefix={v.prefix}
                  number={v.number}
                  verse={v.verse}
                />
              </Box>
            );
          }
        )}
      </StyledChapter>
      <StyledFab onClick={handleBack}>
        <ArrowBackIcon
          sx={{
            color: "white",
          }}
        />
      </StyledFab>
    </StyledContainer>
  );
}
