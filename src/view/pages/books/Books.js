import * as React from "react";
import { useEffect, useState } from "react";
import BooksService from "../../../services/BooksService";
import { Box } from "@mui/system";

export default function Books({ navigation }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    function getBooks() {
      const data = BooksService.getBooks();
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
      setBooks(books);
    }

    getBooks();
  }, []);

  function handlePress(book) {
    setSelectedBook(book);
  }

  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 15,
      }}
    >
      <Box
        style={{
          maxWidth: "400px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {books.map((b) => {
          return (
            <Box
              sx={{
                padding: "10px 5px",
                fontSize: "20px",
                width: "80px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#f0f0dc",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePress(b)}
            >
              {b.abbreviation}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
