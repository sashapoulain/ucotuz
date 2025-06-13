

import React from "react";
import { useTranslation } from "react-i18next";

export default function MegaMenu({ categories, activeMainCategory, setActiveMainCategory }) {
  const { t } = useTranslation("header");

  return (
    <div className="mega-menu d-flex shadow">
      <ul className="list-group list-group-flush main-categories">
        {categories.map((cat, index) => (
          <li
            key={index}
            className={`list-group-item ${activeMainCategory === index ? "active" : ""}`}
            onMouseEnter={() => setActiveMainCategory(index)}
          >
            {t(cat.name)}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-flush sub-categories">
        {categories[activeMainCategory]?.sub.map((sub, idx) => (
          <li key={idx} className="list-group-item">
            <a href="#" className="text-decoration-none text-dark">
              {t(sub.name)} 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
