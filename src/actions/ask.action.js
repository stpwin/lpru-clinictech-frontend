import { askConstants } from "../constants";
import { askService } from "../services";

export const sendAsk = (name, email, body) => {
  return (dispatch) => {

    dispatch(request());

    askService.sendAsk(name, email, body).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: askConstants.SEND_REQUEST };
  }
  function success(data) {
    return { type: askConstants.SEND_SUCCESS, data };
  }
  function failure(error) {
    return { type: askConstants.SEND_FAIL, error };
  }
};

export const askAction = {
  sendAsk,
};
