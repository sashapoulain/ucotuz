import React, { useState } from "react";
import { User, Search, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import categories from "../../data/categories";

export default function MobileHeader({ language, handleLanguageChange }) {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="d-block d-md-none border-bottom shadow-sm">
        <div className="d-flex justify-content-between align-items-center px-3 py-2">
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-link text-dark fw-semibold p-0"
              onClick={() => setOffcanvasOpen(true)}
            >
              ☰ Menü
            </button>
            <Link to="/">
              <img src={logo} alt="Logo" height="45" style={{ cursor: "pointer" }} />
            </Link>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Link to="/giris" className="text-decoration-none text-dark d-flex align-items-center gap-1">
              <User size={18} />
            </Link>

            <div className="dropdown">
              <button
                className="btn btn-outline-success dropdown-toggle btn-sm d-flex align-items-center gap-1"
                type="button"
                data-bs-toggle="dropdown"
              >
                <Globe size={16} />
                {language}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {["TR", "EN", "DE"].map((lang) => (
                  <li key={lang}>
                    <button className="dropdown-item" onClick={() => handleLanguageChange(lang)}>
                      {lang === "TR" ? "Türkçe" : lang === "EN" ? "English" : "Deutsch"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="px-3 pb-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            />
            <span className="input-group-text bg-white">
              <Search size={16} />
            </span>
          </div>
        </div>

        <div className="d-flex overflow-auto px-3 pb-2 gap-3 scroll-menu">
          {["Kadın", "Erkek", "Anne & Çocuk", "Ev & Yaşam", "Süpermarket", "Kozmetik", "Ayakkabı & Çanta", "Elektronik"].map((text) => (
            <Link key={text} to="/ilanlar" className="nav-link-tab text-decoration-none text-dark fw-semibold">
              {text}
            </Link>
          ))}
        </div>
      </div>

      {offcanvasOpen && (
        <div className="offcanvas offcanvas-start show d-block bg-white" tabIndex="-1" style={{ zIndex: 2000 }}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Tüm Kategoriler</h5>
            <button type="button" className="btn-close" onClick={() => setOffcanvasOpen(false)}></button>
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
      )}
    </>
  );
}
