import React, { useState, useEffect, useRef } from "react";
import BooksService from "../../../services/BooksService";
import useAppState from "../../../libs/hooks/useAppState";

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
    <div>
      {(verses || []).map(v => {
        return (
            <div>{v.verse}</div>
        )

      })}
    </div>
  );
}
