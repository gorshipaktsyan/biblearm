import { IBook } from "../types";
import books from "./storage/books.json";

interface IBookService {
  get: () => IBook[];
}

class BooksService implements IBookService {
  private books: IBook[];

  constructor() {
    this.books = books;
  }

  get(): IBook[] {
    return this.books;
  }
}

const booksService = new BooksService();

export default booksService;
