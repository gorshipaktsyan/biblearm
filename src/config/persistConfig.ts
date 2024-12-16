import storage from "redux-persist/lib/storage";
import { InitStateNames } from "./constants";

const persistConfig = {
  key: "arm-bible",
  storage,
  whitelist: [InitStateNames.savedBook, InitStateNames.settings],
};

export default persistConfig;
