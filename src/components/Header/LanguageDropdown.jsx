

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
