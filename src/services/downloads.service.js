import { handleResponse, handleFetchError, handleNotfound } from "../helpers";
import { apiServer } from "../config";

const fetchAll = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`${apiServer}/downloads/all.php`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleNotfound)
    .catch(handleFetchError);
};


export const downloadsService = {
  fetchAll,
};
