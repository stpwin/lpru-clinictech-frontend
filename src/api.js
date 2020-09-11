import {
  handleResponse,
  handleFetchError,
} from "./helpers";

import { apiServer} from "./config"

export function getNewsList() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getNews`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
}

export function getNewsById(id) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getNews/${id}`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
}

export function getGalleryList() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getGallery`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
}

export function getGalleryById(id) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getGallery/${id}`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
}

export function getDownloadList() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getDownload`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
}

export function getSpecialist() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${apiServer}/getSpecialist`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res;
    })
    .catch(handleFetchError);
}