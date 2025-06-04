import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import proImg from "../assets/images/products/applewatch.png";
import procontlogo from "../assets/images/products/procontlogo.png";
import Thumbs from "../components/Thumbs";
import heart from "../assets/images/products/heart.png";
import Breadcrumb from "./BreadCrumb";
import { Home } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import ProductTabs from "./ProductTabs";
import FaqSection from "./FaqSection";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(proImg);
  const breadcrumbItems = [
    { icon: <Home size={18} />, href: "/", label: null },
    { label: "Ahşap", href: "/ahsap" },
    { label: "Mobilya", href: "/mobilya" },
    { label: "Kabin Makinası" },
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
            alt="Product"
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
            <img src={heart} alt="" />
          </button>
          <div className="d-flex mt-3 products-thumbs">
            <Thumbs onSelect={setSelectedImage} />
          </div>
        </div>

        <div className="col-md-4">
          <h4>Kapı Kasa Ve Pervaz Boyama Kabini ve Makinası</h4>
          <div className="d-flex align-items-center mb-2">
            <span className="text-warning">★★★★★</span>
            <small className="ms-2 text-success">(76)</small>
            <span className="ms-3">Görüntülenme (5)</span>
          </div>
          <div className="detail-table-wrapper">
            <table className="table table-borderless detail-table mb-0">
              <tbody>
                <tr>
                  <td>Marka</td>
                  <td>:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Durumu</td>
                  <td>:</td>
                  <td className="text-success">Yeni</td>
                </tr>
                <tr>
                  <td>İlan No</td>
                  <td>:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Kimden</td>
                  <td>:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Kategori</td>
                  <td>:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>İlan Tarihi</td>
                  <td>:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Yılı</td>
                  <td>:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Adet</td>
                  <td>:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Fiyat</td>
                  <td>:</td>
                  <td>24.000 TL / Dolar / Euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3  mb-3 pro-contact">
            <div className="text-center mt-2 mb-2">
              <img src={procontlogo} alt="" style={{ width: 100 }} />
              <h6 className="fw-bold pt-2">
                Soylu otomasyon
                <br />
                san tic ltd şti
              </h6>
            </div>
            <hr />
            <p className="mb-1">
              <strong>İletişim</strong>
            </p>
            {/* <p className="mb-1">
              <strong>
                <FaPhoneAlt size={16} />
              </strong>{" "}
              +90 212 564 5858
            </p>
            <p className="mb-1">
              <strong>
                <FaPhoneAlt size={18} />
              </strong>{" "}
              0532 456 88 88
            </p> */}

            <p className="mb-1 phone-hover">
  <strong>
    <FaPhoneAlt size={16} />
  </strong>{" "}
  <span className="masked-phone">+90 212 xxx xx xx</span>
  <span className="real-phone">+90 212 564 5858</span>
</p>

<p className="mb-1 phone-hover">
  <strong>
    <FaPhoneAlt size={18} />
  </strong>{" "}
  <span className="masked-phone">0532 xxx xx xx</span>
  <span className="real-phone">0532 456 88 88</span>
</p>

            <hr />
            <button
              className="btn btn-outline-success btn-sm w-100 fw-bold mb-2"
              style={{ borderRadius: 20 }}
            >
              <strong>
                <IoLogoWhatsapp size={18} />
              </strong>{" "}
              0532 456 88 88
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
      <ProductTabs />
      <FaqSection showTitle={true} />
    </div>
  );
};

export default ProductDetail;
