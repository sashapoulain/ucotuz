import React from "react";

const PriceFilter = ({
  priceRanges,
  selectedPriceRange,
  setSelectedPriceRange,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingPrice">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePrice"
          aria-expanded="false"
          aria-controls="collapsePrice"
        >
          Fiyat Aralığı
        </button>
      </h2>
      <div
        id="collapsePrice"
        className="accordion-collapse collapse"
        aria-labelledby="headingPrice"
        data-bs-parent="#sidebarAccordion"
      >
        <div className="accordion-body">
          {priceRanges.map((range, idx) => (
            <div className="form-check" key={idx}>
              <input
                className="form-check-input"
                type="radio"
                name="price"
                value={range}
                checked={selectedPriceRange === range}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                id={`price-${idx}`}
              />
              <label className="form-check-label" htmlFor={`price-${idx}`}>
                {range}
              </label>
            </div>
          ))}
          <div className="mt-3 d-flex gap-2">
            <input
              type="number"
              placeholder="En az"
              className="form-control"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="En çok"
              className="form-control"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
