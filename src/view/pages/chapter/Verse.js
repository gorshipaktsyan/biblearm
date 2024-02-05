import { Box } from "@mui/material";
import Prefix from "./Prefix";
import ChapterStyledComponents from "./styles";

const { StyledVerse, StyledVerseNumber } = ChapterStyledComponents;

export default function Verse({ id, prefix, number, verse }) {
  return (
    <>
      <Prefix prefix={prefix} />
      <StyledVerse>
        <StyledVerseNumber>{number}</StyledVerseNumber>
        <Box>{verse}</Box>
      </StyledVerse>
    </>
  );
}
