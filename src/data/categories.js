// const categories = [
//   {
//     name: "Makine1",
//     sub: ["Makine111", "Makine222", "Makine333"],
//   },
//   {
//     name: "CatMakine2",
//     sub: ["Makine222", "Makineasdf", "Makine"],
//   },
//   {
//     name: "CatMakine3",
//     sub: ["Maksdfg", "ABC", "ABC123"],
//   },
// ];

// export default categories;



// const categories = [
//   {
//     name: "category.machine1",
//     sub: [
//       "category.machine1_1",
//       "category.machine1_2",
//       "category.machine1_3",
//     ],
//   },
//   {
//     name: "category.machine2",
//     sub: [
//       "category.machine2_1",
//       "category.machine2_2",
//       "category.machine2_3",
//     ],
//   },
//   {
//     name: "category.machine3",
//     sub: [
//       "category.machine3_1",
//       "category.machine3_2",
//       "category.machine3_3",
//     ],
//   },
// ];

// export default categories;



const categories = [
  {
    id: 1,
    name: "category.vehicles",   // i18n key
    slug: "vehicles",            // URL için kullanılabilir
    icon: "🚗",                  // isteğe bağlı (ikon, resim, class vs.)
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
