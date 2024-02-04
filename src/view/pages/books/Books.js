import * as React from "react";
import { useEffect, useState } from "react";
import BooksService from "../../../services/BooksService";

export default function Books({ navigation }) {
  const [books, setBooks] = useState({});
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    function getBooks() {
      const data = BooksService.getBooks()
      const books = data.map((book) => {
        const chapters = [...Array(book.chapters + 1).keys()];
        chapters.shift();
        return {
          title: book.name,
          abbreviation: book.abbreviation,
          chapters: book.chapters,
          code: book.code,
          fullName: book.full_name,
          name: book.name,
          subject: book.subject,
          content: chapters,
        };
      });
      setBooks(books)
    }

    getBooks();
  }, []);

  function handlePress(book) {
    setSelectedBook(book);
  }

  return (
    <div style={{ flex: 1 }}>

    </div>
  );
}
