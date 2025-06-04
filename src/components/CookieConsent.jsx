import React, { useEffect, useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="position-fixed bottom-0 w-100 bg-light border-top p-3"
      style={{ zIndex: 9999 }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center container">
        <p className="mb-2 mb-md-0 text-muted small">
          Bu web sitesi deneyiminizi geliştirmek için çerezleri kullanır.
        </p>
        <div>
          <button className="btn btn-success btn-sm me-2" onClick={() => handleConsent("accepted")}>
            Kabul Et
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => handleConsent("declined")}>
            Reddet
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
