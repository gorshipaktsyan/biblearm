import BooksStyledComponents from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IBook } from "../../../types";
import { setCurrentBook } from "../../../redux/slice/currentBookSlice";
import BooksHeader from "./BooksHeader";
import ChaptersList from "./ChaptersList";
import VersesList from "./VersesList";

const { StyledContainer, StyledList, StyledItem } = BooksStyledComponents;

export default function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.books);
  const { currentBook } = useSelector((state: RootState) => state.currentBook);
  const { currentVerses } = useSelector(
    (state: RootState) => state.currentVerses
  );

  const handlePress = (book: IBook): void => {
    dispatch(setCurrentBook(book));
  };

  return (
    <>
      <BooksHeader />
      <StyledContainer>
        <StyledList>
          {books.map((book: IBook) => {
            return (
              <StyledItem key={book._id} onClick={() => handlePress(book)}>
                {book.abbreviation}
              </StyledItem>
            );
          })}
        </StyledList>
        {currentBook && (
          <>
            <ChaptersList />
            {currentVerses.length && <VersesList />}
          </>
        )}
      </StyledContainer>
    </>
  );
}
