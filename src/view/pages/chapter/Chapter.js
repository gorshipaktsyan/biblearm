import React, { useState, useEffect, useRef } from "react";
import BooksService from "../../../services/BooksService";

export default function Chapter() {
  const [chapter, setChapter] = useState({
   /* abbreviation: "Մտթ",
    chapters: 28,
    code: "Matthew",
    content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    fullName: "ԱՎԵՏԱՐԱՆ ԸՍՏ ՄԱՏԹԵՈՍԻ",
    name: "Մատթեոս",
    subject: "Թագավորության ավետարանը` ապացույցն այն բանի, որ Հիսուս Քրիստոսը Փրկիչ-Թագավորն է",
    title: "Մատթեոս",*/
    verses: [],
    currentBook: 1,
    currentChapter: 1,
    currentBookInfo: {}
  })
  const [vers, setVerses] = useState({})
  const { currentBook, currentChapter, currentBookInfo } = chapter;

  useEffect(() => {
    function getBookChapter() {
      const data = BooksService.getChapter({
        currentBook,
        currentChapter,
      });
      setVerses(data)
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
      {vers.map(v => {
        return (
            <div>{v.verse}</div>
        )
      })}
    </div>
  );
}
