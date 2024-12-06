import { combineReducers } from "@reduxjs/toolkit";

import SubjectReducer from "./slice/subjectSlice";
import bookmarksReducer from "./slice/bookmarksSlice";
import currentBookReducer from "./slice/currentBookSlice";
import booksReducer from "./slice/booksSlice";
import searchReducer from "./slice/searchSlice";
import settingsReducer from "./slice/settingsSlice";
import appBarReducer from "./slice/appBarSlice";
import currentVersesReducer from "./slice/currentVersesSlice";
import versesReducer from "./slice/versesSlice";

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  currentBook: currentBookReducer,
  search: searchReducer,
  settings: settingsReducer,
  appBar: appBarReducer,
  books: booksReducer,
  subject: SubjectReducer,
  currentVerses: currentVersesReducer,
  verses: versesReducer,
});

export default rootReducer;
