

// import React from "react";
// import { User } from "lucide-react";
// import { Link } from "react-router-dom";
// import MegaMenu from "./MegaMenu";
// import TopLinks from "./TopLinks";
// import SearchBar from "./SearchBar";
// import LanguageDropdown from "../../components/Header/LanguageDropdown";

// import logo from "../../assets/images/logo.png";
// import categories from "../../data/categories";
// import scrollCategories from "../../data/scrollCategories"; // scrollcat import edildi

// export default function DesktopHeader({
//   language,
//   handleLanguageChange,
//   categoriesOpen,
//   setCategoriesOpen,
//   activeMainCategory,
//   setActiveMainCategory,
// }) {
//   return (
//     <>
//       <TopLinks />

//       <div className="container py-3 d-flex align-items-center justify-content-between">
//         <Link to="/">
//           <img src={logo} alt="Logo" height="45" style={{ cursor: "pointer" }} />
//         </Link>

//         <SearchBar />

//         <div className="d-flex align-items-center gap-4">
//           <Link
//             to="/giris"
//             className="text-decoration-none text-dark d-flex align-items-center gap-1"
//           >
//             <User size={18} />
//             Giriş Yap
//           </Link>

//           <LanguageDropdown language={language} onChange={handleLanguageChange} />
//         </div>
//       </div>

//       <nav className="bg-light py-2 border-top">
//         <div className="container d-flex gap-3 align-items-center justify-content-between flex-wrap">
//           <div
//             className="position-relative"
//             onMouseEnter={() => setCategoriesOpen(true)}
//             onMouseLeave={() => setCategoriesOpen(false)}
//           >
//             <button className="btn btn-link text-dark fw-semibold d-flex align-items-center gap-1 p-0">
//               ☰ TÜM KATEGORİLER
//             </button>

//             {categoriesOpen && (
//               <MegaMenu
//                 categories={categories}
//                 activeMainCategory={activeMainCategory}
//                 setActiveMainCategory={setActiveMainCategory}
//               />
//             )}
//           </div>

//           {scrollCategories.map((text) => (
//             <Link
//               key={text}
//               to="/ilanlar"
//               className="nav-link-tab text-decoration-none text-dark fw-semibold"
//             >
//               {text}
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </>
//   );
// }

// import React from "react";
// import { User } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// import MegaMenu from "./MegaMenu";
// import TopLinks from "./TopLinks";
// import SearchBar from "./SearchBar";
// import LanguageDropdown from "../../components/Header/LanguageDropdown";

// import logo from "../../assets/images/logo.png";
// import categories from "../../data/categories";
// import scrollCategories from "../../data/scrollCategories";

// export default function DesktopHeader({
//   language,
//   handleLanguageChange,
//   categoriesOpen,
//   setCategoriesOpen,
//   activeMainCategory,
//   setActiveMainCategory,
// }) {
//   const { t } = useTranslation("header");

//   return (
//     <>
//       <TopLinks />

//       <div className="container py-3 d-flex align-items-center justify-content-between">
//         <Link to="/">
//           <img src={logo} alt="Logo" height="45" style={{ cursor: "pointer" }} />
//         </Link>

//         <SearchBar />

//         <div className="d-flex align-items-center gap-4">
//           <Link
//             to="/giris"
//             className="text-decoration-none text-dark d-flex align-items-center gap-1"
//           >
//             <User size={18} />
//             {t("signIn")}
//           </Link>

// <LanguageDropdown language={language} onChange={handleLanguageChange} />
//         </div>
//       </div>

//       <nav className="bg-light py-2 border-top">
//         <div className="container d-flex gap-3 align-items-center justify-content-between flex-wrap">
//           <div
//             className="position-relative"
//             onMouseEnter={() => setCategoriesOpen(true)}
//             onMouseLeave={() => setCategoriesOpen(false)}
//           >
//             <button className="btn btn-link text-dark fw-semibold d-flex align-items-center gap-1 p-0">
//               ☰ {t("allCategories")}
//             </button>

//             {categoriesOpen && (
//               <MegaMenu
//                 categories={categories}
//                 activeMainCategory={activeMainCategory}
//                 setActiveMainCategory={setActiveMainCategory}
//               />
//             )}
//           </div>

//           {scrollCategories.map((text) => (
//             <Link
//               key={text}
//               to="/ilanlar"
//               className="nav-link-tab text-decoration-none text-dark fw-semibold"
//             >
//               {t(`scrollCategories.${text}`)}
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </>
//   );
// }
import React from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MegaMenu from "./MegaMenu";
import TopLinks from "./TopLinks";
import SearchBar from "./SearchBar";
import LanguageDropdown from "../../components/Header/LanguageDropdown";

import logo from "../../assets/images/logo.png";
import categories from "../../data/categories";
import scrollCategories from "../../data/scrollCategories";

export default function DesktopHeader({
  language,
  handleLanguageChange,
  categoriesOpen,
  setCategoriesOpen,
  activeMainCategory,
  setActiveMainCategory,
}) {
  const { t } = useTranslation("header");

  return (
    <>
      <TopLinks />

      <div className="container py-3 d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src={logo} alt="Logo" height="45" style={{ cursor: "pointer" }} />
        </Link>

        <SearchBar />

        <div className="d-flex align-items-center gap-4">
          <Link
            to="/giris"
            className="text-decoration-none text-dark d-flex align-items-center gap-1"
          >
            <User size={18} />
            {t("signIn")}
          </Link>

          <LanguageDropdown language={language} onChange={handleLanguageChange} />
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
              ☰ {t("allCategories")}
            </button>

            {categoriesOpen && (
              <MegaMenu
                categories={categories}
                activeMainCategory={activeMainCategory}
                setActiveMainCategory={setActiveMainCategory}
              />
            )}
          </div>

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
      </nav>
    </>
  );
}
