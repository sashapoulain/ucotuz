import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Thumbs from "../components/Thumbs";
import heart from "../assets/images/products/heart.png";
import Breadcrumb from "./BreadCrumb";
import { Home } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import ProductTabs from "./ProductTabs";
import FaqSection from "./FaqSection";
import productsData from "../data/products.json";
import ProductDetailTable from "./ProductDetailTable"; 

const ProductDetail = () => {
  const product = productsData[0]; 

  const [selectedImage, setSelectedImage] = useState(
    `/ucotuz/images/productImgs/${product.imageUrl}`
  );

  const breadcrumbItems = [
    { icon: <Home size={18} />, href: "/", label: null },
    { label: product.category, href: `/${product.category.toLowerCase()}` },
    { label: product.title },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div
        className="row pt-5"
        style={{
          background: "#f8f9fa",
          borderRadius: "0.5rem",
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        <div className="col-md-5 position-relative">
          <img
            src={selectedImage}
            className="img-fluid rounded pro-img"
            alt={product.altTitle || product.title}
            style={{
              border: "3px solid #dddddd",
              background: "white",
            }}
          />
          <button
            className="btn btn-light"
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              borderRadius: "50%",
              padding: "8px",
            }}
          >
            <img src={heart} alt="Favorilere ekle" />
          </button>
          <div className="d-flex mt-3 products-thumbs">
            <Thumbs
              images={product.images.map(
                (img) => `/ucotuz/images/productImgs/${img}`
              )}
              onSelect={setSelectedImage}
              selectedImage={selectedImage}
            />
          </div>
        </div>

        <div className="col-md-4">
          <h4>{product.title}</h4>
          <div className="d-flex align-items-center mb-2">
            <span className="text-warning">
              {"★".repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && "½"}
              {"☆".repeat(4 - Math.floor(product.rating))}
            </span>
            <small className="ms-2 text-success">({product.reviewCount})</small>
            <span className="ms-3">Görüntülenme ({product.views})</span>
          </div>
      <ProductDetailTable product={product} />
        </div>

        <div className="col-md-3">
          <div className="p-3 mb-3 pro-contact">
            <div className="text-center mt-2 mb-2">
              <img
  src={`/ucotuz/images/productImgs/${product.logoUrl}`}
  alt={`${product.seller} Logo`}
  style={{ width: 100 }}
/>

              <h6 className="fw-bold pt-2">{product.seller}</h6>
            </div>
            <hr />
            <p className="mb-1">
              <strong>İletişim</strong>
            </p>

            <p className="mb-1 phone-hover">
              <strong>
                <FaPhoneAlt size={16} />
              </strong>{" "}
              <span className="masked-phone">+90 212 xxx xx xx</span>
              <span className="real-phone">{product.contact.phone1}</span>
            </p>

            <p className="mb-1 phone-hover">
              <strong>
                <FaPhoneAlt size={18} />
              </strong>{" "}
              <span className="masked-phone">0532 xxx xx xx</span>
              <span className="real-phone">{product.contact.phone2}</span>
            </p>

            <hr />
            <button
              className="btn btn-outline-success btn-sm w-100 fw-bold mb-2"
              style={{ borderRadius: 20 }}
            >
              <strong>
                <IoLogoWhatsapp size={18} />
              </strong>{" "}
              {product.contact.whatsapp}
            </button>
            <button
              className="btn btn-outline-success btn-sm w-100 fw-bold mb-2"
              style={{ borderRadius: 20 }}
            >
              TÜM İLANLAR
            </button>
            <button
              className="btn btn-outline-success btn-sm w-100 fw-bold mb-2"
              style={{ borderRadius: 20 }}
            >
              HATA BİLDİRİMİ
            </button>
          </div>
        </div>
      </div>
      <ProductTabs product={product} />
      <FaqSection showTitle={true} />
    </div>
  );
};

export default ProductDetail;
