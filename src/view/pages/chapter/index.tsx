import { useEffect } from "react";
import ChapterStyledComponents from "./styles";
import ChapterHeader from "./ChapterHeader";
import Verse from "../../components/Verse";
import { Divider } from "@mui/material";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import { swipeConfig } from "../../../config";
import Subject from "../../components/Subject";
import { useSelector } from "../../../utils/hooks";
import versesService from "../../../services/versesService";
import { RootState } from "../../../redux/store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const { StyledChapter, StyledContainer, StyledFab } = ChapterStyledComponents;

export default function Chapter() {
  const navigate = useNavigate();
  const currentBook = useSelector(
    (state: RootState) => state.books.currentBook
  );
  const currentChapter = useSelector(
    (state: RootState) => state.currentChapter.currentChapter
  );
  const currentVerses = useSelector(
    (state: RootState) => state.verses.currentVerses
  );
  const chapterName: string =
    currentChapter === 1
      ? `${currentChapter}-ԻՆ ԳԼՈՒԽ`
      : `${currentChapter}-ՐԴ ԳԼՈՒԽ`;

  // useEffect(() => {
  //   setChapterVerses(
  //     versesService.getChapterVerses(currentBook, currentChapter)
  //   );
  // }, [currentChapter, currentBook]);

  // const { handleLeftSwipe, handleRightSwipe, handlers } = useSwipeNavigation({
  //   currentBook,
  //   navigate,
  // });
  return (
    <StyledContainer
    // {...handlers}
    >
      <StyledChapter>
        <ChapterHeader
          fullName={currentBook!.full_name}
          chapterName={chapterName}
        />
        <Divider />
        {currentChapter === 1 && <Subject subject={currentBook!.subject} />}
        {currentVerses.map((verse) => {
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
