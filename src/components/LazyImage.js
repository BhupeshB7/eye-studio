// components/LazyImage.js
import React from "react";

const LazyImage = ({ src, alt }) => {
  return <img src={src} height="350px" width="100%" alt={alt} />;
};

export default LazyImage;
