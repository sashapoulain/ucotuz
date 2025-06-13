

import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import trendNews from "../data/trendNews.json";

const CustomArrows = ({ onPrev, onNext }) => {
  return (
    <div className="d-flex justify-content-end gap-0 mt-2">
      <button
        onClick={onPrev}
        className="bg-transparent text-success"
        style={{ fontSize: "1.5rem", border: "none", outline: "none" }}
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={onNext}
        className="bg-transparent text-success"
        style={{ fontSize: "1.5rem", border: "none", outline: "none" }}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

const TrendNewsSlider = () => {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mt-4 bg-white rounded shadow-sm">
      <h5
        className="mb-3 d-flex justify-content-between align-items-center"
        style={{ color: "#04724d", fontSize: "1.5rem", paddingLeft: "1rem" }}
      >
        Trend Haberler
        <CustomArrows
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
        />
      </h5>

      <Slider ref={sliderRef} {...settings}>
        {trendNews.map((item) => (
          <div key={item.id} className="p-2 bg-white rounded shadow-sm">
            <div className="d-flex gap-3 align-items-center">
             <img
  src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, "")}`}
  alt={item.title}
  style={{
    width: "100px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "0.5rem",
  }}
/>

              <div>
                <h6 className="mb-3">{item.title}</h6>
                <div className="d-flex gap-3 small text-muted flex-column">
                  <span>{item.date}</span>
                  <span style={{ color: "#04724d" }}>{item.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendNewsSlider;
