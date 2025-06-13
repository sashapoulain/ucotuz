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


// import React from "react";
// import { Globe } from "lucide-react";
// import { useTranslation } from "react-i18next";

// export default function LanguageDropdown({ language, onChange }) {
//   const { t, i18n } = useTranslation();

//   const languages = [
//     { code: "tr", label: t("language.turkish", "Türkçe") },
//     { code: "en", label: t("language.english", "English") },
//     { code: "de", label: t("language.german", "Deutsch") },
//   ];

//   const handleChange = (code) => {
//     i18n.changeLanguage(code);
//     if (onChange) onChange(code);
//   };

//   return (
//     <div className="dropdown">
//       <button
//         className="btn btn-lang dropdown-toggle d-flex align-items-center gap-1"
//         type="button"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         <Globe size={16} />
//         {language.toUpperCase()}
//       </button>
//       <ul className="dropdown-menu dropdown-menu-end">
//         {languages.map(({ code, label }) => (
//           <li key={code}>
//             <button
//               className="dropdown-item"
//               type="button"
//               onClick={() => handleChange(code)}
//             >
//               {label}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from "react";
import { Globe } from "lucide-react";

export default function LanguageDropdown({ language, onChange }) {
  const languages = [
    { code: "TR", label: "Türkçe" },
    { code: "EN", label: "English" },
    { code: "DE", label: "Deutsch" },
  ];

  return (
    <div className="dropdown">
      <button
        className="btn btn-lang dropdown-toggle d-flex align-items-center gap-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <Globe size={16} />
        {language.toUpperCase()}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {languages.map(({ code, label }) => (
          <li key={code}>
            <button
              className="dropdown-item"
              onClick={() => onChange(code.toLowerCase())}
              type="button"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
