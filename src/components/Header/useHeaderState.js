import { useState } from "react";

export default function useHeaderState() {
  const [language, setLanguage] = useState("TR");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [activeMainCategory, setActiveMainCategory] = useState(0);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    { name: "Elektronik", sub: ["Telefon", "Bilgisayar", "TV"] },
    { name: "Moda", sub: ["Kadın", "Erkek", "Çocuk"] },
    { name: "Ev & Yaşam", sub: ["Mobilya", "Dekorasyon", "Mutfak"] },
  ];

  const handleLanguageChange = (lang) => setLanguage(lang);
  const toggleCategory = (index) => {
    setExpandedCategory((prev) => (prev === index ? null : index));
  };

  return {
    language,
    handleLanguageChange,
    categoriesOpen,
    setCategoriesOpen,
    activeMainCategory,
    setActiveMainCategory,
    offcanvasOpen,
    setOffcanvasOpen,
    expandedCategory,
    toggleCategory,
    categories,
  };
}
