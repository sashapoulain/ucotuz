

import React, { useState } from "react";
import { User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import categories from "../../data/categories";
import scrollCategories from "../../data/scrollCategories";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

export default function MobileHeader({ language, handleLanguageChange }) {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { t } = useTranslation("header");

  const toggleCategory = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

  return (
    <>
    {  /* took d-md-none */}
      <div className="d-block border-bottom shadow-sm">
        <div className="d-flex justify-content-between align-items-center px-3 py-2">
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-link text-dark fw-semibold p-0"
              onClick={() => setOffcanvasOpen(true)}
            >
              ☰ {t("menu")}
            </button>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                height="45"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Link
              to="/giris"
              className="text-decoration-none text-dark d-flex align-items-center gap-1"
            >
              <User size={18} />
            </Link>

            <LanguageDropdown
              language={language}
              onChange={handleLanguageChange}
            />
          </div>
        </div>

        <div className="px-3 pb-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder={t("searchPlaceholder")}
            />
            <span className="input-group-text bg-white">
              <Search size={16} />
            </span>
          </div>
        </div>

     <div className="d-flex overflow-auto px-3 pb-2 gap-3 scroll-menu">
  {scrollCategories.map(({ key }) => (
    <Link
      key={key}
      to="/ilanlar"
      className="nav-link-tab text-decoration-none text-dark fw-semibold"
    >
      {t(`scrollCategories.${key}`)}
    </Link>
  ))}
</div>

      </div>

      {offcanvasOpen && (
        <div
          className="offcanvas offcanvas-start show d-block bg-white"
          tabIndex="-1"
          style={{ zIndex: 2000 }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">{t("allCategories")}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setOffcanvasOpen(false)}
            ></button>
          </div>
          <div className="offcanvas-body">
            {categories.map((cat, index) => (
              <div key={index} className="mb-2">
                <button
                  className="btn w-100 text-start text-dark fw-semibold"
                  onClick={() => toggleCategory(index)}
                  aria-expanded={expandedCategory === index}
                >
                  {t(cat.name)}
                </button>
                {expandedCategory === index && (
                  <ul className="list-group ps-3">
                    {cat.sub.map((sub, idx) => (
                      <li key={idx} className="list-group-item border-0 ps-4">
                        <a href="#" className="text-decoration-none text-dark">
                          {t(sub.name)}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
