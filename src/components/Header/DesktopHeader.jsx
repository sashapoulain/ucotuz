import React from "react";
import { User, Search, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import TopLinks from "./TopLinks";
import SearchBar from "./SearchBar";
import logo from "../../assets/images/logo.png";
import categories from "../../data/categories";

export default function DesktopHeader({
  language,
  handleLanguageChange,
  categoriesOpen,
  setCategoriesOpen,
  activeMainCategory,
  setActiveMainCategory,
}) {
  return (
    <>
      <TopLinks />

      <div className="container py-3 d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src={logo} alt="Logo" height="45" style={{ cursor: "pointer" }} />
        </Link>

        <SearchBar />

        <div className="d-flex align-items-center gap-4">
          <Link to="/giris" className="text-decoration-none text-dark d-flex align-items-center gap-1">
            <User size={18} />
            Giriş Yap
          </Link>

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

      <nav className="bg-light py-2 border-top">
        <div className="container d-flex gap-3 align-items-center justify-content-between flex-wrap">
          <div
            className="position-relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="btn btn-link text-dark fw-semibold d-flex align-items-center gap-1 p-0">
              ☰ TÜM KATEGORİLER
            </button>

            {categoriesOpen && (
              <MegaMenu
                categories={categories}
                activeMainCategory={activeMainCategory}
                setActiveMainCategory={setActiveMainCategory}
              />
            )}
          </div>

          {["Kadın", "Erkek", "Anne & Çocuk", "Ev & Yaşam", "Süpermarket", "Kozmetik", "Ayakkabı & Çanta", "Elektronik"].map((text) => (
            <Link key={text} to="/ilanlar" className="nav-link-tab text-decoration-none text-dark fw-semibold">
              {text}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
