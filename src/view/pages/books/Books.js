import * as React from "react";
import { useState } from "react";
import useAppState from "../../../libs/hooks/useAppState";

import { useNavigate } from "react-router-dom";
import BooksStyledComponents from "./styles";
import BookModal from "./Modal";
import actions from "../../../store/actions";

const { StyledContainer, StyledList, StyledItem } = BooksStyledComponents;

export default function Books() {
  const { state, dispatch } = useAppState();
  const [isOpen, setIsOpen] = useState(false);
  const [chapters, setChapters] = useState();
  const navigate = useNavigate();

  function handlePress(book) {
    dispatch({
      type: actions.SET_CURRENT_BCV,
      payload: { currentBook: book.bookId },
    });
    setChapters(book.chapters);
    setIsOpen(true);
  }
  function handleChapterClick(currentChapter) {
    dispatch({
      type: actions.SET_CURRENT_BCV,
      payload: { currentChapter },
    });
    setIsOpen(false);
    navigate("/chapter");
  }
  return (
    <StyledContainer>
      <StyledList>
        {state.home.books.map((book) => {
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
