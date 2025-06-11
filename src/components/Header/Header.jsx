import React from "react";
import { isMobile } from "react-device-detect";
import useHeaderState from "./useHeaderState";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  const headerState = useHeaderState();

  return (
    <header>
      {isMobile ? (
        <MobileHeader {...headerState} />
      ) : (
        <DesktopHeader {...headerState} />
      )}
    </header>
  );
}
