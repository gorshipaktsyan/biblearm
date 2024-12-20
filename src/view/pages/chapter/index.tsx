import { Box, styled } from "@mui/material";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { useNavigate, useParams } from "react-router-dom";
import { swipeConfig } from "../../../config";
import { useSwipeNavigation } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";
import StyledComponents from "../../styles";
import {
  setClickedVerse,
  setCurrentVerses,
} from "../../../redux/slice/versesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { booksService, versesService } from "../../../services";
import { scrollToVerse } from "../../../utils/scrollToVerse";
import ArrowBackIconComponent from "./ArrowBackIcon";
import PaginationComponent from "./PaginationComponent";
import Prefix from "./Prefix";
import Verse from "./Verse";
import Subject from "./Subject";
import { setCurrentChapter } from "../../../redux/slice/currentChapterSlice";
import { setCurrentBook } from "../../../redux/slice/booksSlice";

const { StyledContainer } = StyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookCode, chapter } = useParams();
  const { currentVerses, clickedVerse } = useSelector(
    (state: RootState) => state.verses
  );
  const { currentBook } = useSelector((state: RootState) => state.books);
  const { currentChapter } = useSelector(
    (state: RootState) => state.currentChapter
  );
  const [activeVerse, setActiveVerse] = useState<number | null>(null);

  useEffect(() => {
    if (bookCode && chapter) {
      const foundBook = booksService.findBookByCode(bookCode!);
      if (!foundBook) {
        navigate("/");
      }
      const chapterNumber = parseInt(chapter!);
      const filteredVerses = versesService.getChapterVerses({
        bookId: foundBook!._id,
        chapter: chapterNumber,
      });
      dispatch(setCurrentVerses(filteredVerses));
      dispatch(setCurrentBook(foundBook!));
      dispatch(setCurrentChapter(chapterNumber));
      if (filteredVerses.length > 0) {
        scrollToVerse(filteredVerses[0].number);
      }
    }
    dispatch(setClickedVerse(null));
  }, [chapter]);

  useEffect(() => {
    if (clickedVerse) {
      setActiveVerse(clickedVerse);
      setTimeout(() => {
        setActiveVerse(null);
      }, 2000);
      scrollToVerse(clickedVerse);
    }
  }, [clickedVerse]);

  const { handleLeftSwipe, handleRightSwipe, handlers } = useSwipeNavigation({
    currentBook: currentBook!,
    currentChapter: currentChapter!,
    navigate,
  });
  return (
    <StyledContainer {...handlers}>
      <StyledChapter>
        {currentChapter === 1 && <Subject subject={currentBook!.subject} />}
        {currentVerses.map((verse) => {
          return (
            <>
              {verse.prefix && (
                <Prefix key={verse.prefix} prefix={verse.prefix} />
              )}
              <Verse
                key={verse.verse}
                verse={verse}
                activeVerse={activeVerse}
              />
            </>
          );
        })}
        {currentBook && (
          <PaginationComponent
            currentBook={currentBook!}
            currentChapter={currentChapter!}
          />
        )}
      </StyledChapter>
      <ArrowBackIconComponent />
    </StyledContainer>
  );
}

const StyledChapter = styled(Box)({
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "50px",
});
