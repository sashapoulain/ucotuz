import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SidebarFilter = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

const [categorySearch, setCategorySearch] = useState("");

const categories = [
  {
    name: "Elektronik",
    subcategories: [
      "Cep Telefonları",
      "Bilgisayarlar",
      "Tabletler",
      "Aksesuarlar",
      "Akıllı Saatler",
      "Fotoğraf Makineleri",
      "Drone",
    ],
  },
  {
    name: "Moda",
    subcategories: [
      "Kadın Giyim",
      "Erkek Giyim",
      "Çocuk Giyim",
      "Ayakkabı",
      "Çanta",
      "Saat & Aksesuar",
    ],
  },
  {
    name: "Ev & Yaşam",
    subcategories: [
      "Mobilya",
      "Ev Tekstili",
      "Mutfak Eşyaları",
      "Aydınlatma",
      "Dekorasyon",
      "Bahçe Ürünleri",
    ],
  },
];


  const sellerTypes = [
    "Onaylanmış Satıcı",
    "Başarılı Satıcı",
    "Yetkili Satıcı"
  ];
  
  const [selectedSellerTypes, setSelectedSellerTypes] = useState([]);
  
  const toggleSellerType = (type) => {
    setSelectedSellerTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };
  
  const [modelSearch, setModelSearch] = useState("");
  const allModels = [
    "iPhone 13",
    "iPhone 14",
    "iPhone 14 Pro Max",
    "Galaxy A33",
    "Galaxy A53",
    "Galaxy A54",
  ];

  const [selectedModels, setSelectedModels] = useState([]);

  const filteredModels = allModels.filter((model) =>
    model.toLowerCase().includes(modelSearch.toLowerCase())
  );

  const toggleModel = (model) => {
    setSelectedModels((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

  const sizes = ["S", "M", "M/L", "M/XL", "XL"];

  const allSizes = ["S", "M", "M/L", "M/XL", "XL"];
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sizeSearch, setSizeSearch] = useState("");

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const filteredSizes = allSizes.filter((size) =>
    size.toLowerCase().includes(sizeSearch.toLowerCase())
  );
  const colors = [
    "Siyah",
    "Beyaz",
    "Mavi",
    "Kırmızı",
    "Yeşil",
    "Gri",
    "Sarı",
    "Pembe",
  ];

  const [selectedColors, setSelectedColors] = useState([]);
  const [colorSearch, setColorSearch] = useState("");

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const filteredColors = colors.filter((color) =>
    color.toLowerCase().includes(colorSearch.toLowerCase())
  );
 

  const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Huawei",
    "JBL",
    "Vivo",
    "dfgdfh",
    "dfgdfhs",
    "uykjrj",
  ];

  const priceRanges = [
    "0 - 5.000 TL",
    "5.000 - 10.000 TL",
    "10.000 - 20.000 TL",
    "20.000 - 50.000 TL",
    "50.000 - 70.000 TL",
    "70.000 - 100.000 TL",
  ];

  const ratingOptions = [
    { label: "5 yıldız", value: 5 },
    { label: "4 yıldız ve üzeri", value: 4 },
    { label: "3 yıldız ve üzeri", value: 3 },
    { label: "2 yıldız ve üzeri", value: 2 },
    { label: "1 yıldız ve üzeri", value: 1 },
  ];

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const renderStars = (count) => {
    return (
      <span style={{ color: "#f0ad4e" }}>
        {"★".repeat(count)} <span className="text-muted small">ve üzeri</span>
      </span>
    );
  };

  return (
    <div className="accordion sidebar-accordion" id="sidebarAccordion">
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
    data-bs-parent="#sidebarAccordion"
  >
    <div className="accordion-body">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Kategori ara..."
        value={categorySearch}
        onChange={(e) => setCategorySearch(e.target.value)}
      />
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        {categories
          .filter(
            (cat) =>
              cat.name.toLowerCase().includes(categorySearch.toLowerCase()) ||
              cat.subcategories.some((sub) =>
                sub.toLowerCase().includes(categorySearch.toLowerCase())
              )
          )
          .map((cat, idx) => (
            <div key={idx}>
              <strong>{cat.name}</strong>
              <ul className="list-unstyled ps-3">
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
          ))}
      </div>
    </div>
  </div>
</div>


      <div className="accordion-item">
        <h2 className="accordion-header" id="headingBrand">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseBrand"
            aria-expanded="false"
            aria-controls="collapseBrand"
          >
            Marka
          </button>
        </h2>
        <div
          id="collapseBrand"
          className="accordion-collapse collapse"
          aria-labelledby="headingBrand"
          data-bs-parent="#sidebarAccordion"
        >
          <div className="accordion-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Marka ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredBrands.map((brand, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  id={`brand-${idx}`}
                />
                <label className="form-check-label" htmlFor={`brand-${idx}`}>
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingPrice">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePrice"
            aria-expanded="false"
            aria-controls="collapsePrice"
          >
            Fiyat Aralığı
          </button>
        </h2>
        <div
          id="collapsePrice"
          className="accordion-collapse collapse"
          aria-labelledby="headingPrice"
          data-bs-parent="#sidebarAccordion"
        >
          <div className="accordion-body">
            {priceRanges.map((range, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  value={range}
                  checked={selectedPriceRange === range}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  id={`price-${idx}`}
                />
                <label className="form-check-label" htmlFor={`price-${idx}`}>
                  {range}
                </label>
              </div>
            ))}
            <div className="mt-3 d-flex gap-2">
              <input
                type="number"
                placeholder="En az"
                className="form-control"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="En çok"
                className="form-control"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingRating">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseRating"
            aria-expanded="false"
            aria-controls="collapseRating"
          >
            Değerlendirme Puanı
          </button>
        </h2>
        <div
          id="collapseRating"
          className="accordion-collapse collapse"
          aria-labelledby="headingRating"
          data-bs-parent="#sidebarAccordion"
        >
          <div className="accordion-body">
            {ratingOptions.map((opt, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  value={opt.value}
                  checked={selectedRating === opt.value}
                  onChange={() => setSelectedRating(opt.value)}
                  id={`rating-${idx}`}
                />
                <label className="form-check-label" htmlFor={`rating-${idx}`}>
                  {renderStars(opt.value)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingColor">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseColor"
            aria-expanded="false"
            aria-controls="collapseColor"
          >
            Renk
          </button>
        </h2>
        <div
          id="collapseColor"
          className="accordion-collapse collapse"
          aria-labelledby="headingColor"
          data-bs-parent="#sidebarAccordion"
        >
          <div className="accordion-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Renk ara..."
                value={colorSearch}
                onChange={(e) => setColorSearch(e.target.value)}
              />
            </div>

            {filteredColors.length > 0 ? (
              filteredColors.map((color, idx) => (
                <div className="form-check" key={idx}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleColor(color)}
                    id={`color-${idx}`}
                  />
                  <label className="form-check-label" htmlFor={`color-${idx}`}>
                    {color}
                  </label>
                </div>
              ))
            ) : (
              <p className="text-muted">Eşleşen renk bulunamadı.</p>
            )}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSize">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSize"
            aria-expanded="false"
            aria-controls="collapseSize"
          >
            Beden
          </button>
        </h2>
        <div
          id="collapseSize"
          className="accordion-collapse collapse"
          aria-labelledby="headingSize"
          data-bs-parent="#sidebarAccordion"
        >
          <div className="accordion-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Beden ara..."
              value={sizeSearch}
              onChange={(e) => setSizeSearch(e.target.value)}
            />

            {filteredSizes.length > 0 ? (
              filteredSizes.map((size, idx) => (
                <div className="form-check" key={idx}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => toggleSize(size)}
                    id={`size-${idx}`}
                  />
                  <label className="form-check-label" htmlFor={`size-${idx}`}>
                    {size}
                  </label>
                </div>
              ))
            ) : (
              <p className="text-muted small">Sonuç bulunamadı</p>
            )}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingPhoneModel">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePhoneModel"
            aria-expanded="false"
            aria-controls="collapsePhoneModel"
          >
            Cep Telefonu Modeli
          </button>
        </h2>
        <div
          id="collapsePhoneModel"
          className="accordion-collapse collapse"
          aria-labelledby="headingPhoneModel"
          data-bs-parent="#sidebarAccordion"
        >
          <div className="accordion-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Model ara..."
              value={modelSearch}
              onChange={(e) => setModelSearch(e.target.value)}
            />

            {filteredModels.length > 0 ? (
              filteredModels.map((model, idx) => (
                <div className="form-check" key={idx}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectedModels.includes(model)}
                    onChange={() => toggleModel(model)}
                    id={`model-${idx}`}
                  />
                  <label className="form-check-label" htmlFor={`model-${idx}`}>
                    {model}
                  </label>
                </div>
              ))
            ) : (
              <p className="text-muted small">Sonuç bulunamadı</p>
            )}
          </div>
        </div>
      </div>


      <div className="accordion-item">
  <h2 className="accordion-header" id="headingSellerType">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseSellerType"
      aria-expanded="false"
      aria-controls="collapseSellerType"
    >
      Satıcı Tipi
    </button>
  </h2>
  <div
    id="collapseSellerType"
    className="accordion-collapse collapse"
    aria-labelledby="headingSellerType"
    data-bs-parent="#sidebarAccordion"
  >
    <div className="accordion-body">
      {sellerTypes.map((type, idx) => (
        <div className="form-check" key={idx}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={selectedSellerTypes.includes(type)}
            onChange={() => toggleSellerType(type)}
            id={`sellerType-${idx}`}
          />
          <label className="form-check-label" htmlFor={`sellerType-${idx}`}>
            {type}
          </label>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default SidebarFilter;
