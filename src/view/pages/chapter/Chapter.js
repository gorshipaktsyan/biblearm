import React, { useState, useEffect, useRef } from "react";
import { Center, Box } from "native-base";
import useAppState from "../../libs/hooks/useAppState";
import DataController from "../../libs/controllers/DataController";
import { actions } from "../../store/store";
import Prefix from "./Prefix";
import Verse from "./Verse";
import HeaderStyledComponents from "../styles";

const [
  StyledContainer,
  StyledContent,
  StyledVersesContainer,
  StyledSubject1,
  StyledChapter,
] = HeaderStyledComponents;

export default function Chapter() {
  const { state, dispatch } = useAppState();
  const { verses, currentBook, currentChapter, currentBookInfo } =
    state.chapter;
  const { books } = state.home;
  const scrollRef = useRef();

  useEffect(() => {
    async function getBookChapter() {
      const data = await DataController.getBookChapter({
        currentBook,
        currentChapter,
      });
      dispatch({
        type: actions.SET_BOOK_VERSES,
        payload: {
          currentBookInfo: books[currentBook - 1],
          verses: data || [],
        },
      });
    }

    getBookChapter();
  }, [currentBook, currentChapter]);

  const chapterName =
    currentChapter === 1
      ? `${currentChapter}-ԻՆ ԳԼՈՒԽ`
      : `${currentChapter}-ՐԴ ԳԼՈՒԽ`;
  const isSubjectVisible = currentChapter === 1;

  return (
    <StyledContainer>
      <StyledContent ref={scrollRef}>
        {isSubjectVisible && (
          <Center>
            <StyledChapter>Թեմա՝</StyledChapter>
            <StyledSubject1>{currentBookInfo?.subject}</StyledSubject1>
          </Center>
        )}
        <StyledVersesContainer>
          {verses &&
            verses.map((verse, index) => {
              return (
                <Box key={index}>
                  <Prefix key={verse.id} prefix={verse.prefix} />
                  <Verse key={verse.id} verse={verse} />
                </Box>
              );
            })}
        </StyledVersesContainer>
      </StyledContent>
    </StyledContainer>
  );
}
