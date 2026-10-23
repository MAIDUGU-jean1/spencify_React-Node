import React from 'react';
import { imageList } from '../ProductContent';

// simple gallery that renders every image file pulled in by the
// glob in ProductContent.js

const ImageGallery = () => {
  if (!imageList || imageList.length === 0) return null;

  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {imageList.map((src, idx) => (
        <div key={idx} className="shadow-lg rounded-md overflow-hidden">
          <img
            src={src}
            alt={`gallery-${idx}`}
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
