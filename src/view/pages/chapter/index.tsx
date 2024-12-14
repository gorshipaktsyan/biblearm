import { Box, styled } from "@mui/material";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { swipeConfig } from "../../../config";
import { useSelector } from "../../../utils/hooks";
import versesService from "../../../services/versesService";
import { RootState } from "../../../redux/store";
import StyledComponents from "../../styles";
import { setCurrentVerses } from "../../../redux/slice/versesSlice";
import useSwipeNavigation from "../../../utils/hooks/useSwipeNavigation";
import { useEffect } from "react";
import { IVerse } from "../../../types";
import { useDispatch } from "react-redux";
import booksService from "../../../services/booksService";
import { scrollToVerse } from "../../../utils/scrollToVerse";
import ArrowBackIconComponent from "./ArrowBackIcon";
import PaginationComponent from "./PaginationComponent";
import Prefix from "./Prefix";
import Verse from "./Verse";
import Subject from "./Subject";

const { StyledContainer } = StyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { book, chapter } = useParams();
  const currentBook = booksService.findBook(book!);
  const currentChapter = parseInt(chapter!);

  const { currentVerses, clickedVerse } = useSelector(
    (state: RootState) => state.verses
  );

  useEffect(() => {
    if (currentBook && chapter) {
      if (currentBook) {
        const filteredVerses = versesService.getChapterVerses(
          currentBook._id,
          currentChapter
        );
        dispatch(setCurrentVerses(filteredVerses));
        if (filteredVerses.length > 0) {
          scrollToVerse(filteredVerses[0].number);
        }
      }
    }
  }, [chapter]);

  useEffect(() => {
    scrollToVerse(clickedVerse);
  }, []);

  const { handleLeftSwipe, handleRightSwipe, handlers } = useSwipeNavigation({
    currentBook: currentBook!,
    currentChapter,
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
              <Verse key={verse._id} verse={verse} />
            </>
          );
        })}
        <PaginationComponent totalChapters={currentBook!.chapters} currentChapter={currentChapter} />
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
