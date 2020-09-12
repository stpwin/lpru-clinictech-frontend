import { handleResponse, handleFetchError } from "../helpers";
import { apiServer } from "../config";

const fetchAll = () => {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getSpecialist`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
};

export const specialistService = {
  fetchAll,
};
