import { Routes, Route } from "react-router-dom";
import "./App.css";
import Books from "../view/pages/books/Books";
import Chapter from "../view/pages/chapter/Chapter";
import { CssBaseline, Box } from "@mui/material";

function App() {
  const routes = [
    {
      path: "/",
      element: <Books />,
    },
    {
      path: "/chapter",
      element: <Chapter />,
    },
    // {
    //   path: "/chapters",
    //   element: <Chapters />,
    // },
  ];
  return (
    <Box>
      <CssBaseline />
      <Chapter />
    </Box>
  );
}

export default App;
