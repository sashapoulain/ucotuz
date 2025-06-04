import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/slider/banner-img.png";
import banner2 from "../assets/images/slider/banner-img.png";
import banner3 from "../assets/images/slider/banner-img.png";

const sliderItems = [
  {
    title: "",
    discount: "SEPETTE %20 İNDİRİM",
    description: "Yüksek performans, yüksek tasarruf şimdi seni bekliyor2!",
    image: banner1,
  },
  {
    title: "",
    discount: "SEPETTE %25 İNDİRİM",
    description: "Yüksek performans, yüksek tasarruf şimdi seni bekliyor!",
    image: banner2,
  },
  {
    title: "PETLAS İNDİRİMİ 3.slider",
    discount: "SEPETTE %15 İNDİRİM",
    description: "Petlas lastiklerde bu haftaya özel indirim fırsatını kaçırma!",
    image: banner3,
  },
];

const CampaignSlider = () => {
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
    <div className="campaign-slider-wrapper container" style={{ paddingRight: '0', paddingLeft: '0'}}>
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="container p-0">
            <div className="row align-items-center p-0">
              <div className="col-12 col-md-5 campain-text-wrapper">
                <div className="campaign-text">
                  <h5>{item.title}</h5>
                  <h2>{item.discount}</h2>
                  <p>{item.description}</p>
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
                    src={item.image}
                    alt={`Slide ${index}`}
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
