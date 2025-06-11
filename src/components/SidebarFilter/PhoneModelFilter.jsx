import React, { useState } from "react";

const PhoneModelFilter = () => {
  const allModels = [
    "iPhone 13",
    "iPhone 14",
    "iPhone 14 Pro Max",
    "Galaxy A33",
    "Galaxy A53",
    "Galaxy A54",
  ];

  const [modelSearch, setModelSearch] = useState("");
  const [selectedModels, setSelectedModels] = useState([]);

  const filteredModels = allModels.filter((model) =>
    model.toLowerCase().includes(modelSearch.toLowerCase())
  );

  const toggleModel = (model) => {
    setSelectedModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingPhoneModel">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePhoneModel"
          aria-expanded="false"
          aria-controls="collapsePhoneModel"
        >
          Cep Telefonu Modeli
        </button>
      </h2>
      <div
        id="collapsePhoneModel"
        className="accordion-collapse collapse"
        aria-labelledby="headingPhoneModel"
        data-bs-parent="#sidebarAccordion"
      >
        <div className="accordion-body">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Model ara..."
            value={modelSearch}
            onChange={(e) => setModelSearch(e.target.value)}
          />
          {filteredModels.length > 0 ? (
            filteredModels.map((model, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedModels.includes(model)}
                  onChange={() => toggleModel(model)}
                  id={`model-${idx}`}
                />
                <label className="form-check-label" htmlFor={`model-${idx}`}>
                  {model}
                </label>
              </div>
            ))
          ) : (
            <p className="text-muted small">Sonuç bulunamadı</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneModelFilter;
