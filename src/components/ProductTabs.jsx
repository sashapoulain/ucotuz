import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const ProductTabs = ({ product }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      "★".repeat(fullStars) +
      (halfStar ? "☆" : "") +
      "☆".repeat(emptyStars)
    );
  };

  return (
    <div
      className="mt-4 mb-3 p-3 pro-tabs"
      style={{ background: "#f8f9fa", borderRadius: "0.5rem" }}
    >
      <Tabs defaultActiveKey="description" id="product-tabs" className="custom-tabs">
        <Tab eventKey="description" title="Ürün Açıklaması">
          <div className="p-4 mt-3">
            <h5 className="mb-3 text-success">{product.title}</h5>
            <p>{product.description}</p>
          </div>
        </Tab>

        <Tab eventKey="comments" title={`Ürün Yorumları (${product.reviews.length})`}>
          <div className="position-relative p-4 mt-3">
            <h5 className="mb-4 text-success">Müşteri Yorumları ({product.reviews.length})</h5>

            {product.reviews.map((review, i) => (
              <div key={i} className="mb-4">
                <strong>{review.author}</strong>
                <div className="text-warning mb-1">{renderStars(review.rating)}</div>
                <p className="mb-0">{review.text}</p>
                {i !== product.reviews.length - 1 && <hr />}
              </div>
            ))}

            <button
              className="btn btn-success position-absolute"
              style={{
                bottom: "20px",
                right: "20px",
                borderRadius: "2rem",
                padding: "8px 16px",
                fontWeight: "bold",
              }}
            >
              Yorum Yap
            </button>
          </div>
        </Tab>

        <Tab eventKey="location" title="İlan Konumu">
          <div className="p-4 mt-3">
            <h5 className="mb-3 text-success">İlan Konumu</h5>

            <div className="mb-3">
              <strong>Adres:</strong>
              <p className="mb-0">{product.location.address}</p>
            </div>

            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="ilan-konum"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                loading="lazy"
                allowFullScreen
                src={product.location.mapEmbedUrl}
              />
            </div>
          </div>
        </Tab>

        <Tab eventKey="ask" title="İlan Soru Sor">
          <div className="p-4 mt-3">
            <h5 className="mb-4 text-success">İlan Hakkında Soru Sor</h5>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Adınız *</label>
                <input type="text" className="form-control" id="name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-posta (isteğe bağlı)</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Sorunuz *</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-success fw-bold"
                style={{ borderRadius: "1rem", padding: "0.5rem 1.5rem" }}
              >
                Gönder
              </button>
            </form>
          </div>
        </Tab>

        <Tab eventKey="offer" title="Teklif Gönder">
          <div className="p-4 mt-3">
            <h5 className="mb-4 text-success">Satıcıya Teklif Gönder</h5>

            <form>
              <div className="mb-3">
                <label htmlFor="offer-name" className="form-label">Adınız *</label>
                <input type="text" className="form-control" id="offer-name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="offer-phone" className="form-label">Telefon *</label>
                <input type="tel" className="form-control" id="offer-phone" required />
              </div>

              <div className="mb-3">
                <label htmlFor="offer-email" className="form-label">E-posta (isteğe bağlı)</label>
                <input type="email" className="form-control" id="offer-email" />
              </div>

              <div className="mb-3">
                <label htmlFor="offer-price" className="form-label">Teklifiniz (Fiyat)</label>
                <input
                  type="text"
                  className="form-control"
                  id="offer-price"
                  placeholder="Örn: 22.000 TL"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="offer-message" className="form-label">Mesajınız</label>
                <textarea className="form-control" id="offer-message" rows="4"></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-success fw-bold"
                style={{ borderRadius: "1rem", padding: "0.5rem 1.5rem" }}
              >
                Gönder
              </button>
            </form>
          </div>
        </Tab>

        <Tab eventKey="pdf" title="PDF Dokümanı">
          <div className="p-4 mt-3">
            <h5 className="mb-4 text-success">İlgili Dökümanlar</h5>

            <ul className="list-group">
              {product.documents.map((doc, i) => (
                <li
                  key={i}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {doc.title}
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm"
                    style={{ borderRadius: "1rem" }}
                  >
                    Görüntüle
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
