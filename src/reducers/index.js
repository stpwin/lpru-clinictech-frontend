import { combineReducers } from "redux";

import { news, showNews } from "./news.reducer";
import { gallery, showGallery } from "./gallery.reducer";
import { specialist } from "./specialist.reducer";
import { downloads } from "./downloads.reducer";

const rootReducer = combineReducers({
  news,
  showNews,
  gallery,
  showGallery,
  specialist,
  downloads
});


export default rootReducer;