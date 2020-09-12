import { downloadsConstants } from "../constants";
import { downloadsService } from "../services";
import { checkCacheValid } from "redux-cache";

export const fetchAll = () => {
  return (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState, "downloads");
    if (isCacheValid) {
      return null;
    }

    dispatch(request());

    downloadsService.fetchAll().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: downloadsConstants.FETCH_ALL_REQUEST };
  }
  function success(data) {
    return { type: downloadsConstants.FETCH_ALL_SUCCESS, data };
  }
  function failure(error) {
    return { type: downloadsConstants.FETCH_ALL_FAIL, error };
  }
};

export const downloadsAction = {
  fetchAll,
};