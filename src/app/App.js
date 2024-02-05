import { Routes, Route } from "react-router-dom";
import Books from "../view/pages/books/Books";
import Chapter from "../view/pages/chapter/Chapter";
import { CssBaseline } from "@mui/material";
import { actions } from "../store/store";
import BooksService from "../services/BooksService";
import { useEffect } from "react";
import useAppState from "../libs/hooks/useAppState";

function App() {
  const { state, dispatch } = useAppState();
  const routes = [
    {
      path: "/",
      element: <Books />,
    },
    {
      path: "/chapter",
      element: <Chapter />,
    },
  ];

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
          bookId: book._id,
        };
      });
      dispatch({
        type: actions.SET_BOOKS,
        payload: books,
      });
    }

    getBooks();
  }, []);

  return (
    <>
      <CssBaseline />

      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
