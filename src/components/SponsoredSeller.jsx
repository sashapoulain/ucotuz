


import React from "react";
import { Link } from "react-router-dom";
import sponsoredData from "../data/sponsoredProducts.json";

const SponsoredSeller = () => {
  return (
    <div>
      {sponsoredData.map((sellerData, sellerIndex) => (
        <div
          className="bg-white p-3 rounded shadow-sm mb-4"
          key={sellerIndex}
        >
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <img
                src={sellerData.seller.avatar}
                alt={`${sellerData.seller.name} Profil`}
                className="rounded-circle me-2"
                width={40}
                height={40}
              />
              <h5 className="fw-bold mb-0">{sellerData.seller.name}</h5>
            </div>
            <button className="btn btn-outline-success btn-md">Takip Et</button>
          </div>

          <div className="row d-none d-md-flex g-0 rounded overflow-hidden">
            {sellerData.products.map((product, index) => (
              <div
                key={index}
                className={`col-3 d-flex align-items-center p-3 ${
                  index !== sellerData.products.length - 1 ? "border-end" : ""
                }`}
              >
                <Link
                  to={`/product/${encodeURIComponent(product.title)}`}
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    width={90}
                    className="me-3"
                  />
                  <div>
                    <div className="fw-semibold">{product.title}</div>
                    <div className="text-muted">
                      ({product.reviewCount} Yorum)
                    </div>
                    <div className="fw-bold">{product.price} TL</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="d-md-none overflow-auto">
            <div className="d-flex flex-nowrap">
              {sellerData.products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 me-3 bg-light p-2 rounded"
                  style={{ width: "200px" }}
                >
                  <Link
                    to={`/product/${encodeURIComponent(product.title)}`}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid mb-2 rounded"
                    />
                    <div className="fw-semibold">{product.title}</div>
                    <div className="text-muted small">
                      ({product.reviewCount} Yorum)
                    </div>
                    <div className="fw-bold">{product.price} TL</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsoredSeller;
