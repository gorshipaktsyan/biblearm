import { Box, styled } from "@mui/material";
import { IVerse } from "../../../types";
import StyledComponents from "../../styles";

interface VerseProps {
  verse: IVerse;
  activeVerse: number | null;
}

const { StyledVerseNumber } = StyledComponents;

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

const StyledVerse = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive }) => ({
  maxWidth: "700px",
  display: "flex",
  width: "100%",
  marginBottom: 5,
  backgroundColor: isActive ? "#f0f0dc" : "transparent",
  transition: "background-color 0.3s ease",
}));
