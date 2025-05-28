import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import searchIcon from "../assets/images/searchicon.png";
import productsIcon from "../assets/images/elements.png";
import "../assets/css/style.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="border-bottom shadow-sm">
      <div className="top-menu-wrapper">
        <div className="top-menu-wrapper-alt container py-2 d-flex justify-content-between small">
          <a href="#" className="text-decoration-none text-light">Anasayfa</a>
          <a href="#" className="text-decoration-none text-light">Sıkça Sorulan Sorular</a>
          <a href="#" className="text-decoration-none text-light">Yardım Merkezi</a>
          <a href="#" className="text-decoration-none text-light">İade Politikası</a>
        </div>
      </div>

      <div className="container py-3 d-flex justify-content-between align-items-center bg-white">
        <div className="d-flex align-items-center gap-3 header-left">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
          <a href="#" className="text-decoration-none text-dark small">Blog</a>
          <a href="#" className="text-decoration-none text-dark small">İlan</a>
        </div>

        <div className="input-group w-25">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Ürün veya Markayı Yazınız.."
          />
          <span className="input-group-text bg-white">
            <img src={searchIcon} alt="Ara" style={{ width: "16px" }} />
          </span>
        </div>

        <div className="align-items-center gap-3 header-right d-flex">
          <button className="btn btn-outline-success btn-sm">MAĞAZANI AÇ</button>

          <button
            className="btn btn-success btn-sm d-flex flex-column align-items-center px-3 py-1"
            style={{ fontWeight: "bold", fontSize: "13px", lineHeight: "1" }}
          >
            GİRİŞ YAP
            <small style={{ fontSize: "10px", fontWeight: "normal" }}>veya kayıt ol</small>
          </button>

          <div className="position-relative language-dropdown">
            <button
              onClick={toggleDropdown}
              className="btn btn-success text-white fw-bold btn-sm language-button"
            >
              TR <span className="ms-1">&#x25BC;</span>
            </button>

            {dropdownOpen && (
              <div className="language-menu">
                <button className="dropdown-item" onClick={() => alert("Dil TR seçildi")}>TR</button>
                <button className="dropdown-item" onClick={() => alert("Dil EN seçildi")}>EN</button>
                <button className="dropdown-item" onClick={() => alert("Dil DE seçildi")}>DE</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav>
        <div className="container d-flex justify-content-between gap-5 py-4">
          <div
            className="products"
            onMouseEnter={() => !isMobile && setProductsMenuOpen(true)}
            onMouseLeave={() => !isMobile && setProductsMenuOpen(false)}
          >
            <a
              href="#"
              className="text-decoration-none text-dark small d-flex align-items-center gap-1"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setProductsMenuOpen(!productsMenuOpen);
                }
              }}
            >
              <img
                src={productsIcon}
                alt="Ürünler"
                style={{ height: "16px", width: "16px" }}
              />
              Ürünler
            </a>

            {productsMenuOpen && (
  <div className="altmenu">
    <div className="altmenu-inner">
      <div className="altmenu-column">
        <h6 className="fw-bold mb-2">Elektronik</h6>
        <a href="#" className="dropdown-item small">Telefonlar</a>
        <a href="#" className="dropdown-item small">Tabletler</a>
        <a href="#" className="dropdown-item small">Aksesuarlar</a>
      </div>

      <div className="altmenu-column">
        <h6 className="fw-bold mb-2">Bilgisayar</h6>
        <a href="#" className="dropdown-item small">Dizüstü</a>
        <a href="#" className="dropdown-item small">Masaüstü</a>
        <a href="#" className="dropdown-item small">Parçalar</a>
      </div>

      <div className="altmenu-column">
        <h6 className="fw-bold mb-2">Giyim</h6>
        <a href="#" className="dropdown-item small">Kadın</a>
        <a href="#" className="dropdown-item small">Erkek</a>
        <a href="#" className="dropdown-item small">Çocuk</a>
      </div>
    </div>
  </div>
)}

          </div>

          <a href="#" className="text-dark text-decoration-none small">Ürün</a>
          <a href="#" className="text-dark text-decoration-none small">Tablet & Telefon</a>
          <a href="#" className="text-dark text-decoration-none small">Aksesuar</a>
          <a href="#" className="text-dark text-decoration-none small">Mağazalar</a>
          <a href="#" className="text-dark text-decoration-none small">Elektronik</a>
          <a href="#" className="text-dark text-decoration-none small">Bilgisayar & Ofis</a>
          <a href="#" className="text-dark text-decoration-none small">İş İlanları</a>
          <a href="#" className="text-dark text-decoration-none small">Diğerleri %10</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
