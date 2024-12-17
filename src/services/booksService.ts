import { IBook } from "../types";
import books from "./storage/books.json";

interface IBookService {
  get: () => IBook[];
  findBookByCode: (bookCode: string) => IBook | null;
  findBookById(bookId: number): IBook | null;
}

class BooksService implements IBookService {
  private books: IBook[];

  constructor() {
    this.books = books;
  }

  get(): IBook[] {
    return this.books;
  }
  findBookByCode(bookCode: string): IBook | null {
    const foundBook = this.books.find((book) => book.code === bookCode);
    return foundBook ? foundBook : null;
  }
  findBookById(bookId: number): IBook | null {
    const foundBook = this.books.find((book) => book._id === bookId);
    return foundBook ? foundBook : null;
  }
}

const booksService = new BooksService();

export default booksService;
