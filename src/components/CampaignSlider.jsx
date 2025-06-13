

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderData from "../data/campaigns.json"; 

import banner1 from "../assets/images/slider/banner-img.png";
import banner2 from "../assets/images/slider/banner-img.png";
import banner3 from "../assets/images/slider/banner-img.png";

const imagesMap = {
  1: banner1,
  2: banner2,
  3: banner3,
};

const CampaignSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(sliderData);
  }, []);

  const settings = {
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="campaign-slider-wrapper container px-0">
      <Slider {...settings}>
        {slides.map(({ id, title, discount, description }) => (
          <div key={id} className="container p-0">
            <div className="row align-items-center p-0">
              <div className="col-12 col-md-5 campain-text-wrapper">
                <div className="campaign-text">
                  <h5>{title}</h5>
                  <h2>{discount}</h2>
                  <p>{description}</p>
                  <button className="campaign-button me-2">
                    ŞİMDİ DAHA FAZLASI <span>→</span>
                  </button>
                  <button className="campaign-share">
                    PAYLAŞ <span>→</span>
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-7 text-center campain-img-wrapper">
                <img
                  src={imagesMap[id]}
                  alt={`Slide ${id}`}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CampaignSlider;

