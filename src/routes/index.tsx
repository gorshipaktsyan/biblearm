import { Home, Chapter, Settings, Search } from "../view/pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chapter/:bookCode/:chapter",
    element: <Chapter />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/search",
    element: <Search />,
  },
];

export default routes;
