
import React, { useState, useEffect } from "react";
import products from "../../data/products.json"; 

const CategoryFilter = () => {
  const [categorySearch, setCategorySearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const catMap = {};

    products.forEach((product) => {
      const cat = product.category?.trim();
      const subcat = product.subCategory?.trim();

      if (cat) {
        if (!catMap[cat]) catMap[cat] = new Set();
        if (subcat) catMap[cat].add(subcat);
      }
    });

    const categoryArray = Object.entries(catMap).map(([cat, subSet]) => ({
      name: cat,
      subcategories: Array.from(subSet),
    }));

    setCategories(categoryArray);
  }, []);


  /*end*/

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingCategory">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseCategory"
          aria-expanded="true"
          aria-controls="collapseCategory"
        >
          Kategoriler
        </button>
      </h2>
      <div
        id="collapseCategory"
        className="accordion-collapse collapse show"
        aria-labelledby="headingCategory"
      >
        <div className="accordion-body">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Kategori ara..."
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
          />
          <div
            className="accordion"
            id="innerCategoryAccordion"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            {categories
              .filter(
                (cat) =>
                  cat.name.toLowerCase().includes(categorySearch.toLowerCase()) ||
                  cat.subcategories.some((sub) =>
                    sub.toLowerCase().includes(categorySearch.toLowerCase())
                  )
              )
              .map((cat, idx) => {
                const collapseId = `collapseInner${idx}`;
                const headingId = `headingInner${idx}`;
                return (
                  <div className="accordion-item" key={idx}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                        style={{ padding: "1rem 0.5rem" }}
                      >
                        {cat.name}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className="accordion-collapse collapse show"
                      aria-labelledby={headingId}
                      data-bs-parent="#innerCategoryAccordion"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled ps-3 mb-0">
                          {cat.subcategories
                            .filter((sub) =>
                              sub.toLowerCase().includes(categorySearch.toLowerCase())
                            )
                            .map((sub, subIdx) => (
                              <li key={subIdx}>
                                <a href="#" className="text-decoration-none small">
                                  {sub}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
