import { Routes, Route } from "react-router-dom";
import "./App.css";
import Books from "../view/pages/books/Books";
import Chapter from "../view/pages/chapter/Chapter";
import { CssBaseline, Box } from "@mui/material";
import {StateProvider} from "../store/store";

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
      <StateProvider>
        <Box>
          <CssBaseline />
          <Books />
        </Box>
      </StateProvider>
  );
}

export default App;
