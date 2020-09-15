import { handleResponse, handleFetchError } from "../helpers";
import { apiServer } from "../config";

const sendAsk = (name, email, body) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, body }),
  };

  return fetch(`${apiServer}/sendAsk`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
};

export const askService = {
  sendAsk,
};
