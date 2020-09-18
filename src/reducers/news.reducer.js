import { newsConstants } from '../constants'
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

export const news = (state = {}, action) => {
  switch (action.type) {
    case newsConstants.FETCH_ALL_REQUEST:
      return { fetching: true };
    case newsConstants.FETCH_ALL_SUCCESS:
      return {
        fetching: false,
        [DEFAULT_KEY]: generateCacheTTL(),
        data: action.data,
      };
    case newsConstants.FETCH_ALL_FAIL:
      return { fetching: false, error: action.error };
    default:
      return state;
  }
};

export const showNews = (state = {}, action) => {
  switch (action.type) {
    case newsConstants.FETCH_BY_ID_REQUEST:
      return { fetching: true, id: action.id };
    case newsConstants.FETCH_BY_ID_SUCCESS:
      return { fetching: false, data: action.data };
    case newsConstants.FETCH_BY_ID_FAIL:
      return { fetching: false, error: action.error };
    default:
      return state;
  }
};