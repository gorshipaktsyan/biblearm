import { Box, Divider } from "@mui/material";
import ChapterStyledComponents from "./styles";

const { StyledSubject, SubjectTitle, StyledHeader } = ChapterStyledComponents;
export default function ChapterHeader({
  fullName,
  currentChapter,
  chapterName,
  subject,
}) {
  return (
    <>
      <StyledHeader>
        <Box>{fullName}</Box>
        <Box>{chapterName}</Box>
      </StyledHeader>
      <Divider />
      {currentChapter === 1 && (
        <>
          <SubjectTitle>Թեմա՝</SubjectTitle>
          <StyledSubject>{subject}</StyledSubject>
        </>
      )}
    </>
  );
}
