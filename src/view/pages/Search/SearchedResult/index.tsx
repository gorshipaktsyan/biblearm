import { Box, Divider, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import SearchResultHeader from "./ResultHeader";
import SearchedVersesList from "./VersesList";

export default function SearchedResultBox() {
  const { foundVerses } = useSelector((state: RootState) => state.search);

  const totalVersesLength = foundVerses.reduce(
    (acc, book) => acc + book.verses.length,
    0
  );
  return (
    <StyledBox>
      <SearchResultHeader totalVersesLength={totalVersesLength} />
      {foundVerses.map((book, index) => (
        <>
          <SearchedVersesList book={book} index={index} />
          {index !== foundVerses.length - 1 && (
            <Divider sx={{ width: "700px" }} />
          )}
        </>
      ))}
    </StyledBox>
  );
}

const StyledBox = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
});
