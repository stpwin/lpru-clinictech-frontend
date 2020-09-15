import { downloadsConstants } from "../constants";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

export const downloads = (state = {}, action) => {
  switch (action.type) {
    case downloadsConstants.FETCH_ALL_REQUEST:
      return { fetching: true };
    case downloadsConstants.FETCH_ALL_SUCCESS:
      return {
        fetching: false,
        [DEFAULT_KEY]: generateCacheTTL(),
        data: action.data,
      };
    case downloadsConstants.FETCH_ALL_FAIL:
      return { fetching: false, error: action.error };
    default:
      return state;
  }
};