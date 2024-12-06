import { Box } from "@mui/material";
import Prefix from "../Prefix";
import StyledVerseComponents from "./styles";

const { StyledVerse, StyledVerseNumber } = StyledVerseComponents;

interface VerseProps {
  id: number;
  prefix: string | null;
  number: number;
  verse: string;
}

function Verse({ prefix, number, verse }: VerseProps) {
  return (
    <Box>
      <Prefix prefix={prefix} />
      <StyledVerse>
        <StyledVerseNumber>{number}</StyledVerseNumber>
        <Box>{verse}</Box>
      </StyledVerse>
    </Box>
  );
}

export default Verse;
