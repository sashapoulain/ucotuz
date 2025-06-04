import React, { useState } from "react";
import { User, Search, Globe } from "lucide-react";
import { isMobile } from "react-device-detect";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [language, setLanguage] = useState("TR");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [activeMainCategory, setActiveMainCategory] = useState(0);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      name: "Elektronik",
      sub: ["Telefon", "Bilgisayar", "TV"],
    },
    {
      name: "Moda",
      sub: ["Kadın", "Erkek", "Çocuk"],
    },
    {
      name: "Ev & Yaşam",
      sub: ["Mobilya", "Dekorasyon", "Mutfak"],
    },
  ];

  const handleLanguageChange = (lang) => setLanguage(lang);
  const toggleCategory = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

  return (
    <header>
      {isMobile && (
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
                <img
                  src={logo}
                  alt="Logo"
                  height="45"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Link to='/giris' className="text-decoration-none text-dark d-flex align-items-center gap-1">
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
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("TR")}
                    >
                      Türkçe
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("EN")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("DE")}
                    >
                      Deutsch
                    </button>
                  </li>
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
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Kadın
            </a>
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Erkek
            </a>
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Anne & Çocuk
            </a>
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Ev & Yaşam
            </a>
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Süpermarket
            </a>
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Kozmetik
            </a>
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Ayakkabı & Çanta
            </a>
            <a className="text-decoration-none text-dark fw-semibold" href="#">
              Elektronik
            </a>
          </div>
        </div>
      )}

      {!isMobile && (
        <>

          <div className="container">
            <div className="d-flex justify-content-end px-4 small gap-3 border-bottom top-menu">
              {/* <Link to="/">Anasayfa</Link> */}
              <Link to="/blog" >Blog</Link>
              <Link to="/ilanlar">İlanlar</Link>
              <Link to="/sss">Sıkça Sorulan Sorular</Link>
              <Link to="/magaza">Mağaza Aç</Link>
              <Link to="/yardim">Yardım & Destek</Link>
              <Link to="/iade-politikasi">İade Politikası</Link>
            </div>
          </div>

          <div className="container py-3 d-flex align-items-center justify-content-between">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                height="45"
                style={{ cursor: "pointer" }}
              />
            </Link>

            <div className="input-group w-50">
              <input
                type="text"
                className="form-control"
                placeholder="Aradığınız ürün, kategori veya markayı yazınız"
              />
              <span className="input-group-text bg-white">
                <Search size={16} />
              </span>
            </div>

            <div className="d-flex align-items-center gap-4">
              <Link to="/giris" className="text-decoration-none text-dark d-flex align-items-center gap-1">  <User size={18} />
                Giriş Yap</Link>

              <div className="dropdown">
                <button
                  className="btn btn-lang dropdown-toggle d-flex align-items-center gap-1"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <Globe size={16} />
                  {language}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("TR")}
                    >
                      Türkçe
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("EN")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange("DE")}
                    >
                      Deutsch
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <nav className="bg-light py-2 border-top">
            <div className="container d-flex gap-3 align-items-center justify-content-between flex-wrap">
              <div
                className="position-relative" style={{paddingBottom: '0.25rem'}}
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <button className="btn btn-link text-dark fw-semibold d-flex align-items-center gap-1 p-0">
                  ☰ TÜM KATEGORİLER
                </button>

                {categoriesOpen && (
                  <div className="mega-menu d-flex shadow">
                    <ul className="list-group list-group-flush main-categories">
                      {categories.map((cat, index) => (
                        <li
                          key={index}
                          className={`list-group-item ${activeMainCategory === index ? "active" : ""
                            }`}
                          onMouseEnter={() => setActiveMainCategory(index)}
                        >
                          {cat.name}
                        </li>
                      ))}
                    </ul>
                    <ul className="list-group list-group-flush sub-categories">
                      {categories[activeMainCategory].sub.map((sub, idx) => (
                        <li key={idx} className="list-group-item">
                          <a
                            href="#"
                            className="text-decoration-none text-dark"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Kadın
              </a>
              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Erkek
              </a>
              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Anne & Çocuk
              </a>
              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Ev & Yaşam
              </a>
              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Süpermarket
              </a>
              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Kozmetik
              </a>
              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Ayakkabı & Çanta
              </a>
              <a
                className="nav-link-tab text-decoration-none text-dark fw-semibold"
                href="#"
              >
                Elektronik
              </a>
            </div>
          </nav>
        </>
      )}

      {isMobile && offcanvasOpen && (
        <div
          className="offcanvas offcanvas-start show d-block bg-white"
          tabIndex="-1"
          style={{ zIndex: 2000 }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Tüm Kategoriler</h5>
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
    </header>
  );
}
