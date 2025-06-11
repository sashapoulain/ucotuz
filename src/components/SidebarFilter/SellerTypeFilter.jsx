import React, { useState } from "react";

const SellerTypeFilter = () => {
  const sellerTypes = [
    "Onaylanmış Satıcı",
    "Başarılı Satıcı",
    "Yetkili Satıcı"
  ];

  const [selectedSellerTypes, setSelectedSellerTypes] = useState([]);

  const toggleSellerType = (type) => {
    setSelectedSellerTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSellerType">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSellerType"
          aria-expanded="false"
          aria-controls="collapseSellerType"
        >
          Satıcı Tipi
        </button>
      </h2>
      <div
        id="collapseSellerType"
        className="accordion-collapse collapse"
        aria-labelledby="headingSellerType"
        data-bs-parent="#sidebarAccordion"
      >
        <div className="accordion-body">
          {sellerTypes.map((type, idx) => (
            <div className="form-check" key={idx}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedSellerTypes.includes(type)}
                onChange={() => toggleSellerType(type)}
                id={`sellerType-${idx}`}
              />
              <label className="form-check-label" htmlFor={`sellerType-${idx}`}>
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerTypeFilter;
