import { IVerse } from "../types";
import verses from "./storage/verses.json";

interface IGetChapterVerses {
  bookId: number;
  chapter: number;
}
interface IVersesService {
  get: () => IVerse[];
  getChapterVerses: (args: IGetChapterVerses) => IVerse[];
}

class VersesService implements IVersesService {
  private verses: IVerse[];

  constructor() {
    this.verses = verses;
  }

  get(): IVerse[] {
    return this.verses;
  }
  getChapterVerses({ bookId, chapter }: IGetChapterVerses): IVerse[] {
    return this.verses.filter(
      (verse) => verse.chapter === chapter && verse.book_id === bookId
    );
  }
}

const versesService = new VersesService();

export default versesService;
