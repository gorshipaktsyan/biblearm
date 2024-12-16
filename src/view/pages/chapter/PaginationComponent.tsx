import { Box, Pagination, PaginationItem } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IBook } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCurrentChapter } from "../../../redux/slice/currentChapterSlice";

interface PaginationComponentProps {
  currentChapter: number;
  currentBook: IBook;
}

export default function PaginationComponent({
  currentChapter,
  currentBook,
}: PaginationComponentProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.settings);

  function handleChange(e: React.ChangeEvent<unknown>, value: number) {
    dispatch(setCurrentChapter(value));
    navigate(`/chapter/${currentBook.code}/${value}`);
  }

  return (
    <StyledPaginationBox>
      <StyledPagination
        count={currentBook.chapters}
        page={currentChapter}
        onChange={handleChange}
        size="large"
        siblingCount={0}
        boundaryCount={currentBook.chapters}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            components={{
              previous: () => (
                <StyledPaginationItem>
                  <NavigateBeforeIcon />
                  {language.pagination.back}
                </StyledPaginationItem>
              ),
              next: () => (
                <StyledPaginationItem>
                  {language.pagination.forward}
                  <NavigateNextIcon />
                </StyledPaginationItem>
              ),
            }}
          />
        )}
      />
    </StyledPaginationBox>
  );
}

const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    minWidth: "32px",
  },
});
const StyledPaginationBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "15px",
});
const StyledPaginationItem = styled(Box)({
  display: "flex",
  alignItems: "center",
});
