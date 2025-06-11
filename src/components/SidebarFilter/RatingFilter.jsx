import React from "react";

const RatingFilter = ({ selectedRating, setSelectedRating }) => {
  const ratingOptions = [
    { label: "5 yıldız", value: 5 },
    { label: "4 yıldız ve üzeri", value: 4 },
    { label: "3 yıldız ve üzeri", value: 3 },
    { label: "2 yıldız ve üzeri", value: 2 },
    { label: "1 yıldız ve üzeri", value: 1 },
  ];

  const renderStars = (count) => {
    return (
      <span style={{ color: "#f0ad4e" }}>
        {"★".repeat(count)} <span className="text-muted small">ve üzeri</span>
      </span>
    );
  };

  return (
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
  );
};

export default RatingFilter;
