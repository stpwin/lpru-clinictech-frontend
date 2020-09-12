import { specialistConstants } from "../constants";
import { specialistService } from "../services";
import { checkCacheValid } from "redux-cache";

export const fetchAll = () => {
  return (dispatch, getState) => {
    const isCacheValid = checkCacheValid(getState, "specialist");
    if (isCacheValid) {
      return null;
    }

    dispatch(request());

    specialistService.fetchAll().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: specialistConstants.FETCH_ALL_REQUEST };
  }
  function success(data) {
    return { type: specialistConstants.FETCH_ALL_SUCCESS, data };
  }
  function failure(error) {
    return { type: specialistConstants.FETCH_ALL_FAIL, error };
  }
};

export const specialistAction = {
  fetchAll,
};
