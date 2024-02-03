import { Routes, Route } from "react-router-dom";
import "./App.css";
import Books from "../view/pages/books/Books";
import Chapter from "../view/pages/chapter/Chapter";
import Chapters from "../view/pages/chapters/Chapters";
import { CssBaseline } from "@mui/material";

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
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Box>
  );
}

export default App;
