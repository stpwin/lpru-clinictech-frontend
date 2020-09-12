import { handleResponse, handleFetchError } from "../helpers";
import { apiServer } from "../config";

const fetchAll = () => {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getGallery`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
};

const fetchById = (id) => {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getGallery/${id}`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
};

export const galleryService = {
  fetchAll,
  fetchById,
};
