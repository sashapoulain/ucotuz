import React from "react";

const BrandFilter = ({
  brands,
  selectedBrands,
  setSelectedBrands,
  searchTerm,
  setSearchTerm,
}) => {
  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingBrand">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseBrand"
          aria-expanded="false"
          aria-controls="collapseBrand"
        >
          Marka
        </button>
      </h2>
      <div
        id="collapseBrand"
        className="accordion-collapse collapse"
        aria-labelledby="headingBrand"
        data-bs-parent="#sidebarAccordion"
      >
        <div className="accordion-body">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Marka ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredBrands.map((brand, idx) => (
            <div className="form-check" key={idx}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                id={`brand-${idx}`}
              />
              <label className="form-check-label" htmlFor={`brand-${idx}`}>
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
