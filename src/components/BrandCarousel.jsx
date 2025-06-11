import React, { useState, useEffect } from "react";
import brandsData from "../data/brands.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import puma from "../assets/images/brands/puma.png";
import apple from "../assets/images/brands/apple.jpg";
import adidas from "../assets/images/brands/adidas.jpg";
import nike from "../assets/images/brands/adidas.jpg";
import samsung from "../assets/images/brands/apple.jpg";
import sony from "../assets/images/brands/puma.png";
import lg from "../assets/images/brands/puma.png";
import microsoft from "../assets/images/brands/apple.jpg";
import google from "../assets/images/brands/adidas.jpg";
import xiaomi from "../assets/images/brands/puma.png";
const logosMap = {
  puma,
  apple,
  adidas,
  nike,
  samsung,
  sony,
  lg,
  microsoft,
  google,
  xiaomi
};

const BrandCarousel = () => {
  const [brands, setBrands] = useState([]);
  const [boxSize, setBoxSize] = useState(90); 

  useEffect(() => {
    setBrands(brandsData);

    // Ekran boyutuna göre boxSize ayarla
    const handleResize = () => {
      setBoxSize(window.innerWidth < 576 ? 80 : 90); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 12,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 10 } },
      { breakpoint: 992, settings: { slidesToShow: 8 } },
      { breakpoint: 768, settings: { slidesToShow: 6 } },
      { breakpoint: 576, settings: { slidesToShow: 4 } },
      { breakpoint: 400, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="my-4 px-3 container">
      <Slider {...settings}>
        {brands.map(({ id, name }) => (
          <div key={id} className="d-flex justify-content-center">
            <div
              className="rounded-circle border d-flex justify-content-center align-items-center bg-white"
              style={{
                width: boxSize,
                height: boxSize,
                overflow: "hidden",
              }}
            >
              <img
                src={logosMap[name.toLowerCase()]}
                alt={name}
                style={{
                  width: "90%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
