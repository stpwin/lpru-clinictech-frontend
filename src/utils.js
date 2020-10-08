import React from "react";

export const genNewsLink = (id) => {
  return id ? `news/${id}` : null;
};

export const genGalleryLink = (id) => {
  return id ? `gallery/${id}` : null;
};

export const ReactIsInDevelomentMode = () => {
  return "_self" in React.createElement("div");
};
