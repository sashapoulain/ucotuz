// import React from "react";
// import { Link } from "react-router-dom";

// export default function TopLinks() {
//   return (
//     <div className="container">
//       <div className="d-flex justify-content-end px-4 small gap-3 border-bottom top-menu">
//         <Link to="/pricing">Paketlerimiz</Link>
//         <Link to="/blog">Blog</Link>
//         <Link to="/sss">Sıkça Sorulan Sorular</Link>
//         <Link to="/magaza">Mağaza Aç</Link>
//         <Link to="/yardim">Yardım & Destek</Link>
//         <Link to="/iade-politikasi">İade Politikası</Link>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function TopLinks() {
  const { t } = useTranslation("header");

  return (
    <div className="container">
      <div className="d-flex justify-content-end px-4 small gap-3 border-bottom top-menu">
        <Link to="/pricing">{t("topLinks.pricing")}</Link>
        <Link to="/blog">{t("topLinks.blog")}</Link>
        <Link to="/sss">{t("topLinks.faq")}</Link>
        <Link to="/magaza">{t("topLinks.openStore")}</Link>
        <Link to="/yardim">{t("topLinks.support")}</Link>
        <Link to="/iade-politikasi">{t("topLinks.returnPolicy")}</Link>
      </div>
    </div>
  );
}

