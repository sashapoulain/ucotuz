// import React from "react";
// import { Globe } from "lucide-react";

// export default function LanguageDropdown({ language, onChange }) {
//   const languages = [
//     { code: "TR", label: "Türkçe" },
//     { code: "EN", label: "English" },
//     { code: "DE", label: "Deutsch" },
//   ];

//   return (
//     <div className="dropdown">
//       <button
//         className="btn btn-lang dropdown-toggle d-flex align-items-center gap-1"
//         type="button"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         <Globe size={16} />
//         {language}
//       </button>
//       <ul className="dropdown-menu dropdown-menu-end">
//         {languages.map(({ code, label }) => (
//           <li key={code}>
//             <button
//               className="dropdown-item"
//               onClick={() => onChange(code)}
//               type="button"
//             >
//               {label}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// components/LanguageDropdown.jsx

import React from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "tr", label: "Türkçe" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
  ];

  const currentLang = i18n.language.toLowerCase();

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-lang dropdown-toggle d-flex align-items-center gap-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Globe size={16} />
        {currentLang.toUpperCase()}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {languages.map(({ code, label }) => (
          <li key={code}>
            <button
              className="dropdown-item"
              onClick={() => handleLanguageChange(code)}
              type="button"
              disabled={code === currentLang}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
