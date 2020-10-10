import { handleResponse, handleFetchError, handleNotfound } from "../helpers";
import { storagePath, apiServer } from "../config";
import { storage } from "../firebaseApp";

const fetchAll = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };

  return fetch(`${apiServer}/gallery/all.php`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleNotfound)
    .catch(handleFetchError);
};

const fetchById = (id) => {
  return storage.ref(`${storagePath}gallery/${id}`).listAll();
};

const fetchInfo = (id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };

  return fetch(`${apiServer}/gallery/one.php?id=${id}`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleNotfound)
    .catch(handleFetchError);
};

export const galleryService = {
  fetchAll,
  fetchById,
  fetchInfo
};
