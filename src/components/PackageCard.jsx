

import React from "react";

const PackageCard = ({ id, name, price, features, isSelected, onSelect }) => {
  return (
    <div
      className={`card h-100 border-0 rounded-3 position-relative ${
        isSelected ? "border border-success shadow-lg" : "shadow-sm"
      }`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="card-body d-flex flex-column justify-content-between text-center p-4 flex-grow-1 mx-auto">
        <div>
          <h3 className="fw-bold text-success mb-2">{name}</h3>
          <h5 className="fw-semibold text-dark mb-4 mt-4">{price}</h5>

          <ul className="list-unstyled text-start" style={{ fontSize: "0.95rem" }}>
            {features.map((feature, i) => {
              if (feature.included === true) {
                return <li key={i} className="mb-2">✅ {feature.label}</li>;
              } else if (feature.included === false) {
                return <li key={i} className="text-muted mb-2">❌ {feature.label}</li>;
              } else if (feature.included === "select") {
                return (
                  <li key={i} className="mb-3">
                    ✅ {feature.label}:<br />
                    <select className="form-select form-select-sm mt-1">
                      {feature.options.map((opt, j) => (
                        <option key={j}>{opt}</option>
                      ))}
                    </select>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        <button
          className={`btn mt-3 w-100 text-center rounded-pill py-2 px-4 ${
            isSelected ? "btn-outline-success" : "btn-custom-package btn-primary"
          }`}
          onClick={() => onSelect(id)}
        >
          {isSelected ? "✔ Seçildi" : "Paket Seç"}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
