import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./slice/booksSlice";
import searchReducer from "./slice/searchSlice";
import settingsReducer from "./slice/settingsSlice";
import appBarReducer from "./slice/appBarSlice";
import versesReducer from "./slice/versesSlice";
import saveBookReducer from "./slice/savedBookSlice";
import currentChapterReducer from "./slice/currentChapterSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  settings: settingsReducer,
  appBar: appBarReducer,
  books: booksReducer,
  verses: versesReducer,
  savedBook: saveBookReducer,
  currentChapter: currentChapterReducer,
});

export default rootReducer;
