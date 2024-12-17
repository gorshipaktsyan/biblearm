import styled from "@emotion/styled";
import { Box, List } from "@mui/material";
import SearchedVersesListItem from "./VersesListItem";
import { ISearchResult } from "../../../../redux/slice/searchSlice";

interface IVersesList {
  book: ISearchResult;
  index: number;
}

export default function VersesList({ book, index }: IVersesList) {
  return (
    <StyledList key={index}>
      <Box sx={{ fontWeight: "bold" }}>{book.bookName}</Box>
      {book.verses.map((verse) => (
        <SearchedVersesListItem verse={verse} />
      ))}
    </StyledList>
  );
}

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "700px",
});
