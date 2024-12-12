import { Books } from "../view/pages";
import Chapter from "../view/pages/Chapter";
import Settings from "../view/pages/Settings";
// import Bookmarks from "../view/pages/Bookmarks";

const routes = [
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/chapter/:book/:chapter",
    element: <Chapter />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  // {
  //   path: "/bookmark",
  //   element: <Bookmarks />,
  // },
];

export default routes;
