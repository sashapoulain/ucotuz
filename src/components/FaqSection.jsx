
import React, { useState, useEffect } from "react";
import faqData from "../data/faq.json";

const FaqSection = ({ showTitle = false }) => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setFaqs(faqData);
    } catch (err) {
      setError("SSS verileri yüklenemedi.");
      console.error(err);
    }
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="my-5">
      {showTitle && (
        <h4 className="fw-bold mb-4 text-success text-center">
          Sıkça Sorulan Sorular
        </h4>
      )}
      <div className="accordion" id="faqAccordion">
        {faqs.map((item, index) => (
          <div className="accordion-item border rounded mb-3" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed bg-white text-success fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-secondary">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
