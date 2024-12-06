import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import BooksStyledComponents from "./styles";

const { StyledList, StyledItem } = BooksStyledComponents;

export default function VersesList() {
  const { language } = useSelector((state: RootState) => state.settings);
  const { currentVerses } = useSelector(
    (state: RootState) => state.currentVerses
  );

  return (
    <>
      <Box sx={{ margin: "50px 0 15px 0" }}>{language.books.verses}</Box>
      <StyledList>
        {currentVerses.map((verse) => (
          <StyledItem key={verse._id}>{verse.number}</StyledItem>
        ))}
      </StyledList>
    </>
  );
}
