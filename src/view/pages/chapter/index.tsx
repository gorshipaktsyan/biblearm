import { Box, styled } from "@mui/material";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { swipeConfig } from "../../../config";
import Subject from "./Subject";
import { useSelector } from "../../../utils/hooks";
import versesService from "../../../services/versesService";
import { RootState } from "../../../redux/store";
import Verse from "./Verse";
import StyledComponents from "../../styles";
import ArrowBackIconComponent from "./ArrowBackIcon";
import Prefix from "./Prefix";
import PaginationComponent from "./PaginationComponent";
import { setCurrentVerses } from "../../../redux/slice/versesSlice";
import useSwipeNavigation from "../../../utils/hooks/useSwipeNavigation";
import { useEffect } from "react";
import { IVerse } from "../../../types";
import { useDispatch } from "react-redux";
import booksService from "../../../services/booksService";

const { StyledContainer } = StyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { book, chapter } = useParams();
  const currentVerses = useSelector(
    (state: RootState) => state.verses.currentVerses
  );
  const currentBook = booksService.findBook(book!);
  const currentChapter = parseInt(chapter!);

  useEffect(() => {
    if (book && chapter) {
      if (currentBook) {
        const filteredVerses = versesService.getChapterVerses(
          currentBook._id,
          currentChapter
        );
        dispatch(setCurrentVerses(filteredVerses));
      }
    }
  }, [chapter]);

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
        <PaginationComponent />
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
