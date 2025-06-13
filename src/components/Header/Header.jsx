


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
