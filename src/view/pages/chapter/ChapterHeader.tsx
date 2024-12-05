import { Box } from "@mui/material";
import ChapterStyledComponents from "./styles";

interface ChapterHeaderProps {
  fullName: string;
  chapterName: string;
}

const { StyledHeader } = ChapterStyledComponents;

export default function ChapterHeader({
  fullName,
  chapterName,
}: ChapterHeaderProps) {
  return (
    <>
      <StyledHeader>
        <Box>{fullName}</Box>
        <Box>{chapterName}</Box>
      </StyledHeader>
    </>
  );
}
