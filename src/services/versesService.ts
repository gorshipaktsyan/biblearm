import { ISearchResult } from "../redux/slice/searchSlice";
import { IVerse } from "../types";
import booksService from "./booksService";
import verses from "./storage/verses.json";

interface IGetChapterVerses {
  bookId: number;
  chapter: number;
}
interface IVersesService {
  get: () => IVerse[];
  getChapterVerses: (args: IGetChapterVerses) => IVerse[];
  searchAndGroupVerses(searchText: string): ISearchResult[];
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
  searchAndGroupVerses(searchText: string): ISearchResult[] {
    const matchedVerses = this.verses.filter((verse) =>
      verse.verse.toLowerCase().includes(searchText.toLowerCase())
    );

    const groupedByBookName = matchedVerses.reduce<Record<string, IVerse[]>>(
      (acc, verse) => {
        const book = booksService.findBookById(verse.book_id);
        const bookName = book ? book.name : `Unknown Book ${verse.book_id}`;

        if (!acc[bookName]) {
          acc[bookName!] = [];
        }
        acc[bookName].push(verse);
        return acc;
      },
      {}
    );

    const groupedResults = Object.entries(groupedByBookName).map(
      ([bookName, verses]) => ({
        bookName,
        verses,
      })
    );
    return groupedResults;
  }
}

const versesService = new VersesService();

export default versesService;
