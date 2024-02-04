import * as React from "react";
import { useEffect, useState } from "react";
import BooksService from "../../../services/BooksService";
import useAppState from "../../../libs/hooks/useAppState";
import { actions } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import BooksStyledComponents from "./styles";

const [StyledContainer, StyledList, StyledItem] = BooksStyledComponents;

export default function Books({ navigation }) {
  const { state, dispatch } = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    function getBooks() {
      const data = BooksService.getBooks();
      const books = data.map((book) => {
        const chapters = [...Array(book.chapters + 1).keys()];
        chapters.shift();
        return {
          title: book.name,
          abbreviation: book.abbreviation,
          chapters: book.chapters,
          code: book.code,
          fullName: book.full_name,
          name: book.name,
          subject: book.subject,
          content: chapters,
        };
      });
      dispatch({
        type: actions.SET_BOOKS,
        payload: books,
      });
    }

    getBooks();
  }, []);

  function handlePress(book) {
    navigate("/chapter");
  }

  return (
    <StyledContainer>
      <StyledList>
        {state.home.books.map((b) => {
          return (
            <StyledItem onClick={() => handlePress(b)}>
              {b.abbreviation}
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
}
