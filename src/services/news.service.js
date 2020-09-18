import { handleResponse, handleFetchError, handleNotfound } from "../helpers";
import { apiServer } from "../config";

const fetchAll = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  return fetch(`${apiServer}/news/all.php`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleNotfound)
    .catch(handleFetchError);
}

const fetchById = (id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  return fetch(`${apiServer}/news/one.php?id=${id}`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleNotfound)
    .catch(handleFetchError);
}

export const newsService = {
  fetchAll,
  fetchById,
};