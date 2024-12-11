import { ILanguageTypes } from "../config/constants";

interface INavItem {
  title: string;
  route: string;
}
function createNavItems(lg: ILanguageTypes): INavItem[] {
  const navItems = [
    { title: lg.appBar.newTestament, route: "" },
    { title: lg.navItems.bookmark, route: "bookmark" },
  ];
  return navItems;
}

export default createNavItems;
