import { specialistConstants } from "../constants";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

export const specialist = (state = {}, action) => {
  switch (action.type) {
    case specialistConstants.FETCH_ALL_REQUEST:
      return { fetching: true };
    case specialistConstants.FETCH_ALL_SUCCESS:
      return {
        etching: false,
        [DEFAULT_KEY]: generateCacheTTL(),
        data: action.data,
      };
    case specialistConstants.FETCH_ALL_FAIL:
      return { etching: false, error: action.error };
    default:
      return state;
  }
};

