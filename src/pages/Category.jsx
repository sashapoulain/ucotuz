import React from "react";
import { Link } from "react-router-dom";
import SidebarFilter from "../components/SidebarFilter";
import airpodsImg from "../assets/images/products/airpods.jpg";
import iphoneImage from "../assets/images/products/iphone.webp";
import applewatchImage from "../assets/images/products/applewatch.webp";
import ProductCard from "../components/ProductCard";
import SponsoredSeller from "../components/SponsoredSeller";

const CategoryPage = () => {
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
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <SidebarFilter />
        </div>

        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="fw-bold mb-0" style={{ color: "#586f7c" }}>
              REKLAM BÖLÜMÜ
            </h3>
            <select className="form-select w-auto">
              <option>Önerilen sıralama</option>
              <option>En düşük fiyat</option>
              <option>En yüksek fiyat</option>
              <option>En yeniler</option>
              <option>Çok satanlar</option>
              <option>Çok beğenilenler</option>
              <option>Değerlendirme</option>
            </select>
          </div>

          <SponsoredSeller />

          <div className="row">
            <ProductCard badgeType="category" columns="col-lg-3" />
          </div>
          <SponsoredSeller />

        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
