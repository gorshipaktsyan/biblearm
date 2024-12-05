import { combineReducers } from "@reduxjs/toolkit";

import appBarReducer from "./slice/subjectSlice";
import bookmarksReducer from "./slice/bookmarksSlice";
import currentBookReducer from "./slice/currentBookSlice";
import booksReducer from "./slice/booksSlice";
import searchReducer from "./slice/searchSlice";
import settingsReducer from "./slice/settingsSlice";

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  currentBook: currentBookReducer,
  search: searchReducer,
  settings: settingsReducer,
  appBar: appBarReducer,
  books: booksReducer,
});

export default rootReducer;
