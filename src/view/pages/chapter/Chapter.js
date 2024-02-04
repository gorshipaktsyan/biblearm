import React, { useState, useEffect, useRef } from "react";
import BooksService from "../../../services/BooksService";
import useAppState from "../../../libs/hooks/useAppState";
import { Box } from "@mui/system";

export default function Chapter() {
  const { state, dispatch } = useAppState();
  const { currentBook, currentChapter, currentVerse } = state.chapter;

  const verses = BooksService.getChapter({
    currentBook,
    currentChapter,
  });
  const chapterName =
    currentChapter === 1
      ? `${currentChapter}-ԻՆ ԳԼՈՒԽ`
      : `${currentChapter}-ՐԴ ԳԼՈՒԽ`;
  const isSubjectVisible = currentChapter === 1;

  return (
    <Box
      sx={{
        width: "400px",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        marginTop: "15px",
      }}
    >
      {(verses || []).map((v) => {
        return (
          <Box
            sx={{
              maxWidth: "400px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {v.verse}
          </Box>
        );
      })}
    </Box>
  );
}
