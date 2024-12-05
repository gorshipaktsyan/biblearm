import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BooksStyledComponents from "./styles";
import BookModal from "./Modal";
import actions from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Book {
  bookId: string;
  chapters: number[];
  abbreviation: string;
}

const { StyledContainer, StyledList, StyledItem } = BooksStyledComponents;

export default function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.books);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chapters, setChapters] = useState<number[]>([]);
  const navigate = useNavigate();

  const handlePress = (book: Book): void => {
    dispatch({
      type: actions.SET_CURRENT_BCV,
      payload: { currentBook: book.bookId },
    });
    setChapters(book.chapters);
    setIsOpen(true);
  };

  const handleChapterClick = (currentChapter: number): void => {
    dispatch({
      type: actions.SET_CURRENT_BCV,
      payload: { currentChapter },
    });
    setIsOpen(false);
    navigate("/chapter");
  };

  return (
    <StyledContainer>
      <StyledList>
        {state.home.books.map((book: Book) => {
          return (
            <StyledItem key={book.bookId} onClick={() => handlePress(book)}>
              {book.abbreviation}
            </StyledItem>
          );
        })}
      </StyledList>
      {isOpen && (
        <BookModal
          chapters={chapters}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleChapterClick={handleChapterClick}
        />
      )}
    </StyledContainer>
  );
}
