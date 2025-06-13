
// import React, { useState } from "react";
// import { isMobile } from "react-device-detect";
// import useHeaderState from "./useHeaderState";
// import MobileHeader from "./MobileHeader";
// import DesktopHeader from "./DesktopHeader";
// import i18n from "../../i18n"; 

// export default function Header() {
//   const headerState = useHeaderState();

//   const [language, setLanguage] = useState(i18n.language || "tr");

//   const handleLanguageChange = (lng) => {
//     i18n.changeLanguage(lng);
//     setLanguage(lng);
//   };

//   return (
//     <header>
//       {isMobile ? (
//         <MobileHeader
//           {...headerState}
//           language={language}
//           handleLanguageChange={handleLanguageChange}
//         />
//       ) : (
//         <DesktopHeader
//           {...headerState}
//           language={language}
//           handleLanguageChange={handleLanguageChange}
//         />
//       )}
//     </header>
//   );
// }


import React from "react";
import { isMobile } from "react-device-detect";
import useHeaderState from "./useHeaderState";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  const {
    language,
    handleLanguageChange,
    ...headerState
  } = useHeaderState();

  return (
    <header>
      {isMobile ? (
        <MobileHeader
          {...headerState}
          language={language}
          handleLanguageChange={handleLanguageChange}
        />
      ) : (
        <DesktopHeader
          {...headerState}
          language={language}
          handleLanguageChange={handleLanguageChange}
        />
      )}
    </header>
  );
}
