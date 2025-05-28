import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import thumb1 from "../assets/images/products/airpods.jpg";
import thumb2 from "../assets/images/products/applewatch.webp";
import thumb3 from "../assets/images/products/iphone.webp";
import thumb4 from "../assets/images/products/applewatch.webp";
import thumb5 from "../assets/images/products/applewatch.webp";

const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5];

const Thumbs = ({onSelect}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobilde 2 göster
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // çok küçük ekranlarda 1 göster
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  

  return (
    <div className="mt-3" style={{width: '100%'}}>
      <Slider {...settings}>
        {thumbs.map((thumb, index) => (
          <div key={index} className="px-2">
            <img
              src={thumb}
              alt={`Thumb ${index + 1}`}
              className="img-thumbnail"
              style={{ width: '80px', height: '80px', objectFit: 'contain' ,cursor: 'pointer' }}
              onClick={() => onSelect(thumb)} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Thumbs;