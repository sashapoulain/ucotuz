import React from "react";
import { Link } from "react-router-dom";

export default function TopLinks() {
  return (
    <div className="container">
      <div className="d-flex justify-content-end px-4 small gap-3 border-bottom top-menu">
        <Link to="/pricing">Paketlerimiz</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/sss">Sıkça Sorulan Sorular</Link>
        <Link to="/magaza">Mağaza Aç</Link>
        <Link to="/yardim">Yardım & Destek</Link>
        <Link to="/iade-politikasi">İade Politikası</Link>
      </div>
    </div>
  );
}
