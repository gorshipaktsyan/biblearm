import { IBook } from "../types";
import books from "./storage/books.json";

interface IBookService {
  get: () => IBook[];
  findBook: (bookCode: string) => IBook | null;
}

class BooksService implements IBookService {
  private books: IBook[];

  constructor() {
    this.books = books;
  }

  get(): IBook[] {
    return this.books;
  }
  findBook(bookCode: string): IBook | null {
    const foundBook = this.books.find((book) => book.code === bookCode);
    return foundBook ? foundBook : null;
  }
}

const booksService = new BooksService();

export default booksService;
