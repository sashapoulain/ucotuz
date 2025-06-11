import React, { useState } from "react";

const ColorFilter = () => {
  const colors = ["Siyah", "Beyaz", "Mavi", "Kırmızı", "Yeşil", "Gri", "Sarı", "Pembe"];
  const [selectedColors, setSelectedColors] = useState([]);
  const [colorSearch, setColorSearch] = useState("");

  const filteredColors = colors.filter((color) =>
    color.toLowerCase().includes(colorSearch.toLowerCase())
  );

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingColor">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseColor"
          aria-expanded="false"
          aria-controls="collapseColor"
        >
          Renk
        </button>
      </h2>
      <div
        id="collapseColor"
        className="accordion-collapse collapse"
        aria-labelledby="headingColor"
        data-bs-parent="#sidebarAccordion"
      >
        <div className="accordion-body">
          <input
            type="text"
            className="form-control form-control-sm mb-2"
            placeholder="Renk ara..."
            value={colorSearch}
            onChange={(e) => setColorSearch(e.target.value)}
          />
          {filteredColors.length > 0 ? (
            filteredColors.map((color, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`color-${idx}`}
                  checked={selectedColors.includes(color)}
                  onChange={() => toggleColor(color)}
                />
                <label className="form-check-label" htmlFor={`color-${idx}`}>
                  {color}
                </label>
              </div>
            ))
          ) : (
            <p className="text-muted small">Eşleşen renk bulunamadı.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
