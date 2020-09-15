import { askConstants } from "../constants";

export const ask = (state = {}, action) => {
  switch (action.type) {
    case askConstants.SEND_REQUEST:
      return { fetching: true };
    case askConstants.SEND_SUCCESS:
      return {
        fetching: false,
        data: action.data,
      };
    case askConstants.SEND_FAIL:
      return { fetching: false, error: action.error };
    default:
      return state;
  }
};
