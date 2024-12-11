import { ILanguageTypes } from "../config/constants";
import { IBook } from "../types";

import createNavItems from "./createNavItems";

interface SetTitle {
  currentBook: IBook | null;
  currentChapter: number | null;
  pathname: string;
  lg: ILanguageTypes;
}

export default function setTitle({
  currentBook,
  currentChapter,
  pathname,
  lg,
}: SetTitle): string {
  if (pathname === "/chapter") {
    return `${currentBook?.name} - ${currentChapter} ${lg.appBar.header}`;
  } else {
    const navItems = createNavItems(lg);
    const selectedItem = navItems.find((item) => `/${item.route}` === pathname);
    return selectedItem!.title;
  }
}
