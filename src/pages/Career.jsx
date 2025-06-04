import React from "react";

const positions = [
  {
    title: "Frontend Developer",
    location: "İstanbul / Uzaktan",
    type: "Tam Zamanlı",
    description:
      "Modern web uygulamaları geliştirme konusunda deneyimli, ReactJS bilen ekip arkadaşı arıyoruz.",
    applyEmail: "kariyer@site.com",
  },
  {
    title: "Satış Uzmanı",
    location: "Ankara",
    type: "Yarı Zamanlı",
    description:
      "Ürünlerimizin satış süreçlerini yönetecek, iletişimi güçlü takım arkadaşları arıyoruz.",
    applyEmail: "kariyer@site.com",
  },
];

const Career = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="career-title">Kariyer</h1>
        <p className="lead text-muted">
          Büyüyen ekibimizin bir parçası olmak ister misiniz?
        </p>
      </div>

      <div className="row">
        {positions.map((job, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5 className="text-green">{job.title}</h5>
                <p className="mb-1">
                  <strong>Lokasyon:</strong> {job.location}
                </p>
                <p className="mb-2">
                  <strong>Çalışma Tipi:</strong> {job.type}
                </p>
                <p>{job.description}</p>
                <a
                  href={`mailto:${job.applyEmail}?subject=${job.title} Pozisyonu için Başvuru`}
                  className="btn btn-outline-success"
                >
                  Başvur
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <h4 className="text-green">Genel Başvuru</h4>
        <p>
          Açık pozisyonlar arasında size uygun bir rol yoksa, yine de bize CV'nizi
          gönderebilirsiniz.
        </p>
        <a href="mailto:kariyer@site.com" className="btn btn-success">
          CV Gönder
        </a>
      </div>
    </div>
  );
};

export default Career;
