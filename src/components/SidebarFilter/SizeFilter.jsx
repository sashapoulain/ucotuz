import React, { useState } from "react";

const SizeFilter = () => {
  const allSizes = ["S", "M", "M/L", "M/XL", "XL"];
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sizeSearch, setSizeSearch] = useState("");

  const filteredSizes = allSizes.filter((size) =>
    size.toLowerCase().includes(sizeSearch.toLowerCase())
  );

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSize">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSize"
          aria-expanded="false"
          aria-controls="collapseSize"
        >
          Beden
        </button>
      </h2>
      <div
        id="collapseSize"
        className="accordion-collapse collapse"
        aria-labelledby="headingSize"
        data-bs-parent="#sidebarAccordion"
      >
        <div className="accordion-body">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Beden ara..."
            value={sizeSearch}
            onChange={(e) => setSizeSearch(e.target.value)}
          />
          {filteredSizes.length > 0 ? (
            filteredSizes.map((size, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`size-${idx}`}
                  checked={selectedSizes.includes(size)}
                  onChange={() => toggleSize(size)}
                />
                <label className="form-check-label" htmlFor={`size-${idx}`}>
                  {size}
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

export default SizeFilter;
