import React from "react";
import airpodImage from "../assets/images/products/airpods.jpg";
import iphoneImage from "../assets/images/products/iphone.webp";
import applewatchImage from "../assets/images/products/applewatch.webp";
import cart from "../assets/images/products/shopping-cart.png";
import heart from "../assets/images/products/heart.png";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const products = [
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

  const ProductCard = ({ imageUrl, altTitle, title, price, reviewCount }) => {
    const handleFavorite = (productTitle) => {
      alert(`${productTitle} favorilere eklendi!`);
    };

    return (
      <Link
        to={`/product/${encodeURIComponent(title)}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card custom-card h-100">
          <div className="image-wrapper">
            <img src={imageUrl} alt={title} className="card-img-top" />
            <span className="badge badge-left">TR</span>
            <span className="badge badge-right">↓ Fiyat Düştü</span>

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
            <p>({reviewCount} Yorum)</p>

            {/* Bu boşluk kalan alanı alır ve alttaki içeriği aşağı iter */}
            <div className="flex-grow-1"></div>

            <div className="price-cart d-flex justify-content-between align-items-center mt-2">
              <span className="price">{price} TRY</span>
              <button className="btn  cart-button">
                <img src={cart} alt="Sepete Ekle" style={{ width: 18 }} />
              </button>
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
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
            <ProductCard {...product} />
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
