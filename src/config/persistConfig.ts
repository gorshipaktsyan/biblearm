import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "arm-bible",
  storage,
  // whitelist: [
  //   InitStateNames.bookmarks,
  //   InitStateNames.history,
  //   InitStateNames.settings,
  // ],
};

export default persistConfig;
