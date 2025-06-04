import React from "react";
import airpodImage from "../assets/images/products/airpods.jpg";
import iphoneImage from "../assets/images/products/iphone.webp";
import applewatchImage from "../assets/images/products/applewatch.webp";
import heart from "../assets/images/products/heart.png";
import { Link } from "react-router-dom";

const ProductCard = ({ badgeType = "default", columns = "col-lg-2" } ) => {
  const products = [
    {
      imageUrl: airpodImage,
      altTitle: "Kulaklık",
      title: "Apple AirPods ProApple AirPods Pro ",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: iphoneImage,
      altTitle: "Kulaklık",
      title: "Apple iPhone Pro Apple iPhone Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: applewatchImage,
      altTitle: "Kulaklık",
      title: "Apple Watch Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: airpodImage,
      altTitle: "Kulaklık",
      title: "Apple AirPods Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: iphoneImage,
      altTitle: "Kulaklık",
      title: "Apple iPhone Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: applewatchImage,
      altTitle: "Kulaklık",
      title: "Apple Watch Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: airpodImage,
      altTitle: "Kulaklık",
      title: "Apple AirPods Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: iphoneImage,
      altTitle: "Kulaklık",
      title: "Apple iPhone Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: applewatchImage,
      altTitle: "Kulaklık",
      title: "Apple Watch Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: airpodImage,
      altTitle: "Kulaklık",
      title: "Apple AirPods Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: iphoneImage,
      altTitle: "Kulaklık",
      title: "Apple iPhone Pro",
      price: "49.999",
      reviewCount: 78,
    },
    {
      imageUrl: applewatchImage,
      altTitle: "Kulaklık",
      title: "Apple Watch Pro",
      price: "49.999",
      reviewCount: 78,
    },
  ];

  const SingleProductCard  = ({ imageUrl, altTitle, title, price, reviewCount,badgeType = "default",  }) => {
    const handleFavorite = (productTitle) => {
      alert(`${productTitle} favorilere eklendi!`);
    };
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
            <img src={imageUrl} alt={title} className="card-img-top" />
            {/* <span className="badge badge-left">TR</span>
            <span className="badge badge-right">↓ Fiyat Düştü</span> */}
            {renderBadges()}

            <button
              className="heart-button"
              onClick={(e) =>
              {e.preventDefault();
              e.stopPropagation();
               handleFavorite(title)}}
            >
              <img src={heart} alt="Favori" className="heart-icon" />
            </button>
          </div>

          <div className="card-body d-flex flex-column text-center">
            <h6>{altTitle}</h6>
            <h5 className="card-title">{title}</h5>
            {/* <p>({reviewCount} Yorum)</p> */}

            <div className="flex-grow-1"></div>

            <div className="price-cart d-flex justify-content-between align-items-center mt-2">
              <span className="price">{price} TRY</span>
              <p>({reviewCount} Yorum)</p>
              {/* <button className="btn  cart-button">
                <img src={cart} alt="Sepete Ekle" style={{ width: 18 }} />
              </button> */}
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
      {products.map((product, index) => (
          <div className={`col-6 col-sm-4 col-md-3 ${columns}`} key={index}>
            <SingleProductCard {...product} badgeType={badgeType} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn load-more">Daha Fazla Göster</button>
      </div>
    </div>
  );
};

export default ProductCard;
