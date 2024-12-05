import { Box } from "@mui/material";
import Prefix from "../Prefix";
import StyledVerseComponents from "./styles";

const { StyledVerse, StyledVerseNumber } = StyledVerseComponents;

interface VerseProps {
  id: string;
  prefix: string;
  number: string | number;
  verse: string;
}

function Verse({ id, prefix, number, verse }: VerseProps) {
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

export default Verse;
