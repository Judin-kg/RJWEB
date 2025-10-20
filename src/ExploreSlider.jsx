import React, { useState } from 'react';
import './ExploreSlider.css';

import image1 from '../src/assets/poster1.jpg';
import image2 from '../src/assets/poster3.jpg';
import image3 from '../src/assets/poster5.jpg';
import image4 from '../src/assets/poster4.jpg';
import image5 from '../src/assets/poster2.jpg';

const images = [image1, image2, image3, image4, image5];

const ExploreSlider = () => {
  const [centerIndex, setCenterIndex] = useState(2);

  const handleImageClick = (index) => {
    setCenterIndex(index);
  };

  return (
    <div className="explore-section" id="exploreus">
      {/* Heading */}
      <div className="explore-heading">
        Explore <span className="highlight">Us</span>
      </div>
      {/* Subheading */}
      <div className="explore-subheading">
        Designing, Digital Marketing, Web
      </div>

      {/* Slider */}
      <div className="slider-container">
        {images.map((imageSrc, index) => {
          const offset = index - centerIndex;

          if (offset < -2 || offset > 2) return null;

          const rotateY = offset * 15;
          const scale = offset === 0 ? 1 : 0.7;
          const translateX = offset * 180;

          return (
            <div
              key={index}
              className={`slider-item ${offset === 0 ? 'center-item' : ''}`}
              onClick={() => handleImageClick(index)}
              style={{
                backgroundImage: `url(${imageSrc})`,
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                opacity: offset === 0 ? 1 : 0.6,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSlider;
