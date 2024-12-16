import { Box, styled } from "@mui/material";
import { IVerse } from "../../../types";

interface VerseProps {
  verse: IVerse;
  activeVerse: number | null; 
}

export default function Verse({ verse, activeVerse }: VerseProps) {
  return (
    <StyledVerse
      id={`verse-${verse.number}`}
      isActive={verse.number === activeVerse}
    >
      <StyledVerseNumber>{verse.number}</StyledVerseNumber>
      <Box>{verse.verse}</Box>
    </StyledVerse>
  );
}

const StyledVerse = styled(Box)<{ isActive: boolean }>(({ isActive }) => ({
  maxWidth: "700px",
  display: "flex",
  width: "100%",
  marginBottom: 5,
  backgroundColor: isActive ? "#f0f0dc" : "transparent",
  transition: "background-color 0.3s ease",
}));

const StyledVerseNumber = styled(Box)({
  fontWeight: "bold",
  marginRight: "5px",
});
