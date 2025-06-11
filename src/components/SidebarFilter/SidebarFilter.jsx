// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CategoryFilter from "./CategoryFilter";
// import BrandFilter from "./BrandFilter";
// import PriceFilter from "./PriceFilter";
// import RatingFilter from "./RatingFilter"; 
// import ColorFilter from "./ColorFilter";
// import SizeFilter from "./SizeFilter";
// import PhoneModelFilter from "./PhoneModelFilter";
// import SellerTypeFilter from "./SellerTypeFilter";

// const SidebarFilter = () => {
//   const [selectedRating, setSelectedRating] = useState(null);
//   const brands = ["Apple", "Samsung", "Xiaomi", "Huawei", "JBL", "Vivo"];
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const priceRanges = [
//     "0 - 5.000 TL",
//     "5.000 - 10.000 TL",
//     "10.000 - 20.000 TL",
//     "20.000 - 50.000 TL",
//     "50.000 - 70.000 TL",
//     "70.000 - 100.000 TL",
//   ];
//   const [selectedPriceRange, setSelectedPriceRange] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   return (
//     <div className="accordion sidebar-accordion" id="sidebarAccordion">
//       <CategoryFilter />
//       <BrandFilter
//         brands={brands}
//         selectedBrands={selectedBrands}
//         setSelectedBrands={setSelectedBrands}
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//       />
//       <PriceFilter
//         priceRanges={priceRanges}
//         selectedPriceRange={selectedPriceRange}
//         setSelectedPriceRange={setSelectedPriceRange}
//         minPrice={minPrice}
//         setMinPrice={setMinPrice}
//         maxPrice={maxPrice}
//         setMaxPrice={setMaxPrice}
//       />
//       <RatingFilter
//         selectedRating={selectedRating}
//         setSelectedRating={setSelectedRating}
//       />
//       <ColorFilter />
//       <SizeFilter />
//       <PhoneModelFilter />
//      <SellerTypeFilter/>
//     </div>
//   );
// };

// export default SidebarFilter;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter"; 
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import PhoneModelFilter from "./PhoneModelFilter";
import SellerTypeFilter from "./SellerTypeFilter";
import products from "../../data/products.json"; // ✅ ürün verisi

const SidebarFilter = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const brands = [...new Set(products.map((p) => p.brand?.trim()).filter(Boolean))];

  const priceRanges = [
    "0 - 5.000 TL",
    "5.000 - 10.000 TL",
    "10.000 - 20.000 TL",
    "20.000 - 50.000 TL",
    "50.000 - 70.000 TL",
    "70.000 - 100.000 TL",
  ];
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div className="accordion sidebar-accordion" id="sidebarAccordion">
      <CategoryFilter />
      <BrandFilter
        brands={brands}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <PriceFilter
        priceRanges={priceRanges}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <RatingFilter
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <ColorFilter />
      <SizeFilter />
      <PhoneModelFilter />
      <SellerTypeFilter />
    </div>
  );
};

export default SidebarFilter;
