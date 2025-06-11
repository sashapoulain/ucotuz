
import React, { useState } from "react";
import productsData from "../data/products.json";
import heart from "../assets/images/products/heart.png";
import { Link } from "react-router-dom";

import airpodImage from "../assets/images/products/airpods.jpg";
import iphoneImage from "../assets/images/products/iphone.webp";
import applewatchImage from "../assets/images/products/applewatch.webp";

const imageMap = {
  "airpods.jpg": airpodImage,
  "iphone.webp": iphoneImage,
  "applewatch.webp": applewatchImage,
};

const ProductCard = ({ badgeType = "default", columns = "col-lg-2" }) => {
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); 

  const handleFavorite = (productTitle) => {
    if (!favorites.includes(productTitle)) {
      const updatedFavorites = [...favorites, productTitle];
      setFavorites(updatedFavorites);
      alert(`${productTitle} favorilere eklendi!`);
      console.log("Favori Ürünler:", updatedFavorites);
    } else {
      alert(`${productTitle} zaten favorilerde!`);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  const SingleProductCard = ({
    imageUrl,
    altTitle,
    title,
    price,
    reviewCount,
    badgeType = "default",
  }) => {
    const renderBadges = () => {
      switch (badgeType) {
        case "category":
          return (
            <>
              <span className="badge badge-left bg-success text-white">Hızlı Teslimat</span>
              <span className="badge badge-right bg-danger text-white">%10</span>
            </>
          );
        case "default":
        default:
          return (
            <>
              <span className="badge badge-left">TR</span>
              <span className="badge badge-right">↓ Fiyat Düştü</span>
            </>
          );
      }
    };

    return (
      <Link
        to={`/product/${encodeURIComponent(title)}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card custom-card h-100">
          <div className="image-wrapper">
            <img src={imageMap[imageUrl]} alt={title} className="card-img-top" />
            {renderBadges()}
            <button
              className="heart-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleFavorite(title);
              }}
            >
              <img src={heart} alt="Favori" className="heart-icon" />
            </button>
          </div>

          <div className="card-body d-flex flex-column text-center">
            <h6>{altTitle}</h6>
            <h5 className="card-title">{title}</h5>
            <div className="flex-grow-1"></div>
            <div className="price-cart d-flex justify-content-between align-items-center mt-2">
              <span className="price">{price} TRY</span>
              <p>({reviewCount} Yorum)</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 productstitle">
        <strong>Ürünler</strong> Bu bölümde gösteriliyor
      </h2>

      <div className="row g-3">
        {productsData.slice(0, visibleCount).map((product, index) => (
          <div className={`col-6 col-sm-4 col-md-3 ${columns}`} key={index}>
            <SingleProductCard {...product} badgeType={badgeType} />
          </div>
        ))}
      </div>

      {visibleCount < productsData.length && (
        <div className="text-center mt-4">
          <button className="btn load-more" onClick={handleLoadMore}>
            Daha Fazla Göster
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

