import React from 'react';
import ImageSlideshow from '../../../../components/ImageSlideshow';
import img1 from '../../public/img1.jpeg';
import img2 from '../../public/img2.jpeg';
import img3 from '../../public/img3.jpeg';
import img4 from '../../public/img4.jpeg';
import img5 from '../../public/img5.jpeg';
import img6 from '../../public/img6.jpeg';
import img7 from '../../public/img7.jpeg';

// Gallery images for AI-VERSE 3.0
const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

export default function Gallery() {
  return (
    <ImageSlideshow 
      images={galleryImages} 
      eventName="AI-VERSE 3.0"
      title="Event Gallery"
    />
  );
}