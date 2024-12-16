import { Home, Chapter, Settings } from "../view/pages";

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
];

export default routes;
