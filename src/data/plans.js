// data/plans.js

const plans = [
  {
    id: 1,
    name: "Başlangıç",
    price: "₺49/ay",
    features: [
      { label: "1 Web Sitesi", included: true },
      { label: "10 GB SSD Disk", included: true },
      { label: "Ücretsiz Alan Adı", included: false },
      { label: "Destek Dili", included: "select", options: ["Türkçe", "İngilizce"] },
    ],
  },
  {
    id: 2,
    name: "Profesyonel",
    price: "₺99/ay",
    features: [
      { label: "5 Web Sitesi", included: true },
      { label: "50 GB SSD Disk", included: true },
      { label: "Ücretsiz Alan Adı", included: true },
      { label: "Destek Dili", included: "select", options: ["Türkçe", "İngilizce", "Almanca"] },
    ],
  },
  {
    id: 3,
    name: "Kurumsal",
    price: "₺199/ay",
    features: [
      { label: "Sınırsız Web Sitesi", included: true },
      { label: "Sınırsız SSD Disk", included: true },
      { label: "Ücretsiz Alan Adı", included: true },
      { label: "CDN Desteği", included: true },
    ],
  },
  {
    id: 4,
    name: "Özel",
    price: "₺299/ay",
    features: [
      { label: "Sınırsız Web Sitesi", included: true },
      { label: "Sınırsız SSD Disk", included: true },
      { label: "Ücretsiz Alan Adı", included: true },
      { label: "CDN Desteği", included: true },
      { label: "7/24 Destek", included: true },
    ],
  },
];

export default plans;
