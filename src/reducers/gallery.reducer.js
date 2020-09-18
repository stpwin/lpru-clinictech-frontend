import { galleryConstants } from "../constants";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

export const gallery = (state = {}, action) => {
  switch (action.type) {
    case galleryConstants.FETCH_ALL_REQUEST:
      return { fetching: true };
    case galleryConstants.FETCH_ALL_SUCCESS:
      return {
        fetching: false,
        [DEFAULT_KEY]: generateCacheTTL(),
        data: action.data,
      };
    case galleryConstants.FETCH_ALL_FAIL:
      return { fetching: false, error: action.error };
    default:
      return state;
  }
};

export const showGallery = (state = {}, action) => {
  switch (action.type) {
    case galleryConstants.FETCH_BY_ID_REQUEST:
      return { fetching: true, id: action.id };
    case galleryConstants.FETCH_BY_ID_SUCCESS:
      return { fetching: false, id: action.id, data: action.data };
    case galleryConstants.FETCH_BY_ID_FAIL:
      return { fetching: false, error: action.error };
    default:
      return state;
  }
};
