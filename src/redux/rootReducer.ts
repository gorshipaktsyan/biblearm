import { combineReducers } from "@reduxjs/toolkit";

import bookmarksReducer from "./slice/bookmarksSlice";
import booksReducer from "./slice/booksSlice";
import searchReducer from "./slice/searchSlice";
import settingsReducer from "./slice/settingsSlice";
import appBarReducer from "./slice/appBarSlice";
import currentChapterReducer from "./slice/currentChapterSlice";
import versesReducer from "./slice/versesSlice";

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  search: searchReducer,
  settings: settingsReducer,
  appBar: appBarReducer,
  books: booksReducer,
  verses: versesReducer,
  currentChapter: currentChapterReducer,
});

export default rootReducer;
