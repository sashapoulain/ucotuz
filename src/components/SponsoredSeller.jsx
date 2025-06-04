import React from "react";
import { Link } from "react-router-dom";
import airpodsImg from "../assets/images/products/airpods.jpg";
import iphoneImage from "../assets/images/products/iphone.webp";
import applewatchImage from "../assets/images/products/applewatch.webp";

const SponsoredSeller = () => {
  const sponsoredProducts = [
    {
      title: "Apple AirPods Pro",
      image: airpodsImg,
      reviewCount: 76,
      price: "49.999",
    },
    {
      title: "Apple iPhone 15",
      image: iphoneImage,
      reviewCount: 120,
      price: "89.999",
    },
    {
      title: "Apple Watch Series 9",
      image: applewatchImage,
      reviewCount: 34,
      price: "29.999",
    },
    {
      title: "AirPods Max",
      image: airpodsImg,
      reviewCount: 22,
      price: "59.999",
    },
  ];

  return (
    <div className="bg-white p-3 rounded shadow-sm mb-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Satıcı Profil"
            className="rounded-circle me-2"
            width={40}
            height={40}
          />
          <h5 className="fw-bold mb-0">SPONSORLU SATICI</h5>
        </div>
        <button className="btn btn-outline-success btn-md">Takip Et</button>
      </div>

      <div className="row g-0 rounded overflow-hidden">
        {sponsoredProducts.map((product, index) => (
          <div
            key={index}
            className={`col-3 d-flex align-items-center p-3 ${
              index !== sponsoredProducts.length - 1 ? "border-end" : ""
            }`}
          >
            <Link
              to={`/product/${encodeURIComponent(product.title)}`}
              className="d-flex align-items-center text-decoration-none text-dark"
            >
              <img
                src={product.image}
                alt={product.title}
                width={60}
                className="me-3"
              />
              <div>
                <div className="fw-semibold">{product.title}</div>
                <div className="text-muted">({product.reviewCount} Yorum)</div>
                <div className="fw-bold">{product.price} TL</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsoredSeller;
