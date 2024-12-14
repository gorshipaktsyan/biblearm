import { Box, styled } from "@mui/material";
import { IVerse } from "../../../types";

interface VerseProps {
  verse: IVerse;
}

export default function Verse({ verse }: VerseProps) {
  return (
    <StyledVerse id={`verse-${verse.number}`}>
      <StyledVerseNumber>{verse.number}</StyledVerseNumber>
      <Box>{verse.verse}</Box>
    </StyledVerse>
  );
}

const StyledVerse = styled(Box)({
  maxWidth: "700px",
  display: "flex",
  width: "100%",
  marginBottom: 5,
});
const StyledVerseNumber = styled(Box)({
  fontWeight: "bold",
  marginRight: "5px",
});
