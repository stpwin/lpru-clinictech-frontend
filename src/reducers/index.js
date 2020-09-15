import { combineReducers } from "redux";

import { news, showNews } from "./news.reducer";
import { gallery, showGallery } from "./gallery.reducer";
import { specialist } from "./specialist.reducer";
import { downloads } from "./downloads.reducer";
import { ask } from "./ask.reducer";

const rootReducer = combineReducers({
  news,
  showNews,
  gallery,
  showGallery,
  specialist,
  downloads,
  ask
});


export default rootReducer;