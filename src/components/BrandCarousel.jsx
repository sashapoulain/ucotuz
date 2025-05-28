import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Örnek logo importları (bunları kendi logolarınızla değiştirin)
import logo1 from "../assets/images/brands/puma.png";
import logo2 from "../assets/images/brands/apple.jpg";
import logo3 from "../assets/images/brands/adidas.jpg";
import logo4 from "../assets/images/brands/puma.png";
import logo5 from "../assets/images/brands/puma.png";
import logo6 from "../assets/images/brands/puma.png";
import logo7 from "../assets/images/brands/puma.png";
import logo8 from "../assets/images/brands/puma.png";
import logo9 from "../assets/images/brands/puma.png";
import logo10 from "../assets/images/brands/puma.png";
import logo11 from "../assets/images/brands/puma.png";
import logo12 from "../assets/images/brands/puma.png";

const brands = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const BrandCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 12,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="my-4 px-3 container">
      <Slider {...settings}>
        {brands.map((logo, index) => (
          <div key={index} className="d-flex justify-content-center">
            <div
              className="rounded-circle border d-flex justify-content-center align-items-center bg-white"
              style={{
                width: 85,
                height: 85,
                overflow: "hidden",
              }}
            >
              <img
                src={logo}
                alt={`Brand ${index}`}
                style={{ width: "90%", height: "auto" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
