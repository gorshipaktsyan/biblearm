import React, { useState, useEffect } from "react";
import BooksService from "../../../services/BooksService";
import useAppState from "../../../libs/hooks/useAppState";
import ChapterStyledComponents from "./styles";
import ChapterHeader from "./ChapterHeader";
import Verse from "./Verse";
import { Box } from "@mui/material";
import actions from "../../../store/actions";
import { useSwipeable } from "react-swipeable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
const config = {
  delta: 10,
  preventScrollOnSwipe: false,
  trackTouch: true,
  trackMouse: false,
  rotationAngle: 0,
  swipeDuration: Infinity,
  touchEventOptions: { passive: true },
};
const { StyledChapter, StyledContainer, StyledFab } = ChapterStyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const { state, dispatch } = useAppState();
  const { currentBook, currentChapter, currentVerse } = state.chapter;
  const [verses, SetVerses] = useState(
    BooksService.getChapter({
      currentBook,
      currentChapter,
    })
  );
  const chapterName =
    currentChapter === 1
      ? `${currentChapter}-ԻՆ ԳԼՈՒԽ`
      : `${currentChapter}-ՐԴ ԳԼՈՒԽ`;
  const book = state.home.books.find((book) => book.bookId === currentBook);

  useEffect(() => {
    SetVerses(
      BooksService.getChapter({
        currentBook,
        currentChapter,
      })
    );
  }, [currentChapter, currentBook]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleLeftSwipe() {
    const index = book.content.findIndex(
      (chapter) => chapter === currentChapter + 1
    );
    if (index !== -1) {
      dispatch({
        type: actions.SET_CURRENT_BCV,
        payload: { currentChapter: currentChapter + 1 },
      });
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleRightSwipe() {
    const index = book.content.findIndex(
      (chapter) => chapter === currentChapter - 1
    );
    if (index !== -1) {
      dispatch({
        type: actions.SET_CURRENT_BCV,
        payload: { currentChapter: currentChapter - 1 },
      });
    }
  }
  const handlers = useSwipeable(
    {
      onSwipedLeft: () => handleLeftSwipe(),
      onSwipedRight: () => handleRightSwipe(),
      swipeDuration: 500,
      preventScrollOnSwipe: true,
      trackMouse: true,
    },
    config
  );

  function handleBack() {
    navigate("/");
  }
  return (
    <StyledContainer {...handlers}>
      <ScrollToTop currentChapter={currentChapter} />
      <StyledChapter>
        <ChapterHeader
          fullName={book.fullName}
          currentChapter={currentChapter}
          chapterName={chapterName}
          subject={book.subject}
        />

        {(verses || []).map((v) => {
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
        })}
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
