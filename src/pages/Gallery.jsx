import React, { useEffect } from 'react';
import GallerySection from '../sections/GallerySection';
import FinalCTA from '../sections/FinalCTA';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Campus & Events Gallery | AppStack Academy';
  }, []);

  return (
    <div className="pt-24">
      <GallerySection />
      <FinalCTA />
    </div>
  );
};

export default Gallery;
