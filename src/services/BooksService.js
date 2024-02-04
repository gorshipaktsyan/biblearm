import books from "./storage/books.json";
import verses from "./storage/verses.json";

class BooksService {
  static getBooks() {
     return books
  }
  static getChapter({currentBook, currentChapter, }) {
    return verses.filter(v => (v.book_id === currentBook && v.chapter === currentChapter))
  }
}

export default BooksService;
