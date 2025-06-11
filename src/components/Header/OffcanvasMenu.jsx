import React, { useState } from "react";

export default function OffcanvasMenu({ categories, onClose }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="offcanvas offcanvas-start show d-block bg-white"
      tabIndex="-1"
      style={{ zIndex: 2000 }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Tüm Kategoriler</h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
      <div className="offcanvas-body">
        {categories.map((cat, index) => (
          <div key={index} className="mb-2">
            <button
              className="btn w-100 text-start text-dark fw-semibold"
              onClick={() => toggleCategory(index)}
              aria-expanded={expandedCategory === index}
            >
              {cat.name}
            </button>
            {expandedCategory === index && (
              <ul className="list-group ps-3">
                {cat.sub.map((sub, idx) => (
                  <li key={idx} className="list-group-item border-0 ps-4">
                    <a href="#" className="text-decoration-none text-dark">
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
