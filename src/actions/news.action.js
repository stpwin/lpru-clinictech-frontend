import { newsConstants } from "../constants";
import { newsService } from "../services"
import { checkCacheValid } from "redux-cache";

export const fetchAll = ()  => {
  return (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState, "news");
    if (isCacheValid) {
      return null;
    }

    dispatch(request());

    newsService.fetchAll().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: newsConstants.FETCH_ALL_REQUEST };
  }
  function success(data) {
    return { type: newsConstants.FETCH_ALL_SUCCESS, data };
  }
  function failure(error) {
    return { type: newsConstants.FETCH_ALL_FAIL, error };
  }
};

export const fetchById = (id) => {
  return (dispatch) => {

    dispatch(request());

    newsService.fetchById(id).then(
      (data) => {
        dispatch(success(id, data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request(id) {
    return { type: newsConstants.FETCH_BY_ID_REQUEST, id };
  }
  function success(id, data) {
    return { type: newsConstants.FETCH_BY_ID_SUCCESS, id, data };
  }
  function failure(error) {
    return { type: newsConstants.FETCH_BY_ID_FAIL, error };
  }
};

export const newsAction = {
  fetchAll,
  fetchById,
};