import { galleryConstants } from "../constants";
import { galleryService } from "../services";
import { checkCacheValid } from "redux-cache";

export const fetchAll = () => {
  return (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState, "gallery");
    if (isCacheValid) {
      return null;
    }

    dispatch(request());

    galleryService.fetchAll().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: galleryConstants.FETCH_ALL_REQUEST };
  }
  function success(data) {
    return { type: galleryConstants.FETCH_ALL_SUCCESS, data };
  }
  function failure(error) {
    return { type: galleryConstants.FETCH_ALL_FAIL, error };
  }
};

export const fetchById = (id) => {
  return (dispatch) => {
    dispatch(request());

    galleryService.fetchById(id).then(
      (data) => {
        dispatch(success(id, data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request(id) {
    return { type: galleryConstants.FETCH_BY_ID_REQUEST, id };
  }
  function success(id, data) {
    return { type: galleryConstants.FETCH_BY_ID_SUCCESS, id, data };
  }
  function failure(error) {
    return { type: galleryConstants.FETCH_BY_ID_FAIL, error };
  }
};

export const galleryAction = {
  fetchAll,
  fetchById,
};
