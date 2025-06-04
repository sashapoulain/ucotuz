import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";

const blogCats = [
  {
    name: "Tasarım",
    count: 12,
    subcategories: ["Grafik Tasarım", "Web Tasarım", "Logo Tasarım"],
  },
  {
    name: "Yazılım",
    count: 8,
    subcategories: ["Frontend", "Backend", "Full Stack"],
  },
  {
    name: "E-Ticaret",
    count: 15,
    subcategories: ["Shopify", "WooCommerce"],
  },
  {
    name: "Pazarlama",
    count: 10,
    subcategories: ["Dijital Pazarlama", "E-posta Pazarlama", "SEO"],
  },
  {
    name: "Fotoğrafçılık",
    count: 7,
    subcategories: ["Portre", "Ürün", "Düğün"],
  },
  {
    name: "Veri Bilimi",
    count: 5,
    subcategories: ["Makine Öğrenmesi", "Python", "Veri Görselleştirme"],
  },
  {
    name: "Girişimcilik",
    count: 6,
    subcategories: [],
  },
  {
    name: "Mobil Uygulama",
    count: 4,
    subcategories: ["iOS", "Android", "React Native"],
  },
  {
    name: "UI/UX",
    count: 9,
    subcategories: ["Wireframe", "Prototip", "Kullanıcı Testi"],
  },
];

const BlogCategories = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 shadow-sm rounded bg-white">
      <h5 className="text-green mb-4">Blog Kategorileri</h5>
      <ul
        className="list-unstyled category-list"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {blogCats.map((category, index) => (
          <li
            key={index}
            className="mb-2"
            style={{ cursor: category.subcategories.length > 0 ? "pointer" : "default" }}
            onClick={() =>
              category.subcategories.length > 0 && toggleCategory(index)
            }
          >
            <div className="d-flex align-items-center justify-content-between">
              <span className="d-flex align-items-center">
                <FaCircle className="text-green me-2 icon-dot" />
                <span className="category-link">{category.name}</span>
              </span>
              <span className="badge bg-success text-white">{category.count}</span>
            </div>

            {openIndex === index &&
              category.subcategories.length > 0 && (
                <ul className="list-unstyled ms-4 mt-2">
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex} className="mb-1">
                      <span className="text-muted small">- {sub}</span>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
