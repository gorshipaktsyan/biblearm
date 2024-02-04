import React, { useState, useEffect, useRef } from "react";
import BooksService from "../../../services/BooksService";

export default function Chapter() {
  const [chapter, setChapter] = useState({})
  const { verses, currentBook, currentChapter, currentBookInfo } = chapter;

  useEffect(() => {
    async function getBookChapter() {
      const data = BooksService.getChapter({
        currentBook,
        currentChapter,
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
    <div>
      wvewbvewfb
    </div>
  );
}
