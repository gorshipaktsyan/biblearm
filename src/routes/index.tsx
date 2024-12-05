import React from "react";
import {Books} from "../view/pages";

const routes = [
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/chapter",
    element: <Hymn />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/bookmark",
    element: <Bookmarks />,
  },
];

export default routes;
