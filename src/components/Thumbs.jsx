import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Thumbs = ({ images = [], onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (image, index) => {
    setActiveIndex(index);
    onSelect(image);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 4 }
      }
    ]
  };

  return (
    <div className="mt-3 t-wrapper" style={{ width: '100%' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2 bordernone">
            <img
              src={image}
              alt={`Thumb ${index + 1}`}
              className="img-thumbnail"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain',
                cursor: 'pointer',
                border: activeIndex === index ? '2px solid green' : '1px solid #ddd'
              }}
              onClick={() => handleClick(image, index)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Thumbs;
