
import React, { useState } from "react";
import PackageCard from "../components/PackageCard";

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
];

const Pricing = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 package-title">Paketlerimiz</h2>

      <div className="row justify-content-center g-4 mb-3">
        {plans.map((plan) => (
          <div key={plan.id} className="col-md-4 col-sm-6 d-flex flex-column">
            <PackageCard
              {...plan}
              isSelected={selectedId === plan.id}
              onSelect={setSelectedId}
            />
            {selectedId === plan.id && (
              <div className="border rounded p-3 mt-3 bg-light">
                <h6 className="mb-3">Bilgilerinizi Girin</h6>
                <form>
                  <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Ad Soyad" />
                  </div>
                  <div className="mb-2">
                    <input type="email" className="form-control" placeholder="E-posta" />
                  </div>
                  <div className="mb-2">
                    <input type="tel" className="form-control" placeholder="Telefon" />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Devam Et</button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
