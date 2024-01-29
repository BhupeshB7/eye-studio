// components/LazyImage.js
import React from "react";

const LazyImage = ({ src, alt }) => {
  return <img src={src} height="350px" width="100%"  loading='lazy' alt={alt} />;
};

export default LazyImage;
