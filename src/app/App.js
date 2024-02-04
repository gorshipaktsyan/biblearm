import { Routes, Route, BrowserRouter } from "react-router-dom";
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
  ];
  return (
    <StateProvider>
      <CssBaseline />

        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
    </StateProvider>

  );
}

export default App;
