import { Box, styled, Typography } from "@mui/material";
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
      <Typography variant="body1">{verse.verse}</Typography>
    </StyledVerse>
  );
}

const StyledVerse = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  maxWidth: "700px",
  display: "flex",
  width: "100%",
  marginBottom: "5px",
  backgroundColor: isActive
    ? theme.palette.mode === "light"
      ? "#f0f0dc"
      : "#333333"
    : "transparent",
  transition: "background-color 0.3s ease",
}));
