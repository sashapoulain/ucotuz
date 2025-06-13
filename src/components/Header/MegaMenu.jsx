// import React from "react";

// export default function MegaMenu({ categories, activeMainCategory, setActiveMainCategory }) {
//   return (
//     <div className="mega-menu d-flex shadow">
//       <ul className="list-group list-group-flush main-categories">
//         {categories.map((cat, index) => (
//           <li
//             key={index}
//             className={`list-group-item ${activeMainCategory === index ? "active" : ""}`}
//             onMouseEnter={() => setActiveMainCategory(index)}
//           >
//             {cat.name}
//           </li>
//         ))}
//       </ul>
//       <ul className="list-group list-group-flush sub-categories">
//         {categories[activeMainCategory]?.sub.map((sub, idx) => (
//           <li key={idx} className="list-group-item">
//             <a href="#" className="text-decoration-none text-dark">
//               {sub}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function MegaMenu({ categories, activeMainCategory, setActiveMainCategory }) {
//   const { t } = useTranslation("header");

//   return (
//     <div className="mega-menu d-flex shadow">
//       <ul className="list-group list-group-flush main-categories">
//         {categories.map((cat, index) => (
//           <li
//             key={index}
//             className={`list-group-item ${activeMainCategory === index ? "active" : ""}`}
//             onMouseEnter={() => setActiveMainCategory(index)}
//           >
//             {t(`categories.${cat.name}`)}
//           </li>
//         ))}
//       </ul>
//       <ul className="list-group list-group-flush sub-categories">
//         {categories[activeMainCategory]?.sub.map((sub, idx) => (
//           <li key={idx} className="list-group-item">
//             <a href="#" className="text-decoration-none text-dark">
//               {t(`categories.${sub}`)}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


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
            {t(cat.name)} {/* Burada sadece cat.name */}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-flush sub-categories">
        {categories[activeMainCategory]?.sub.map((sub, idx) => (
          <li key={idx} className="list-group-item">
            <a href="#" className="text-decoration-none text-dark">
              {t(sub.name)} {/* Burada da sub.name */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
