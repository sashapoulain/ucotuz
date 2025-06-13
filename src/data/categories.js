

const categories = [
  {
    id: 1,
    name: "category.vehicles",   
    slug: "vehicles",            
    icon: "🚗",                 
    sub: [
      {
        id: 11,
        name: "category.trucks",
        slug: "trucks",
      },
      {
        id: 12,
        name: "category.vans",
        slug: "vans",
      },
      {
        id: 13,
        name: "category.pickups",
        slug: "pickups",
      },
    ],
  },
  {
    id: 2,
    name: "category.agriculture",
    slug: "agriculture",
    icon: "🌾",
    sub: [
      {
        id: 21,
        name: "category.tractors",
        slug: "tractors",
      },
      {
        id: 22,
        name: "category.harvesters",
        slug: "harvesters",
      },
    ],
  },
  {
    id: 3,
    name: "category.electronics",
    slug: "electronics",
    icon: "💻",
    sub: [
      {
        id: 31,
        name: "category.laptops",
        slug: "laptops",
      },
      {
        id: 32,
        name: "category.smartphones",
        slug: "smartphones",
      },
    ],
  },
];

export default categories;
