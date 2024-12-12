import { IVerse } from "../types";
import verses from "./storage/verses.json";

interface IVersesService {
  get: () => IVerse[];
  getChapterVerses: (bookId: number, chapter: number) => IVerse[];
}

class VersesService implements IVersesService {
  private verses: IVerse[];

  constructor() {
    this.verses = verses;
  }

  get(): IVerse[] {
    return this.verses;
  }
  getChapterVerses(bookId: number, chapter: number): IVerse[] {
    return this.verses.filter(
      (verse) => verse.chapter === chapter && verse.book_id === bookId
    );
  }
}

const versesService = new VersesService();

export default versesService;
