import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Lütfen gerekli alanları doldurun.");
      return;
    }
    console.log("Form verisi:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="contact-title text-center mb-4">İletişim</h2>
          <p className="text-muted">
            Bizimle iletişime geçmek için formu doldurun ya da aşağıdaki
            bilgileri kullanın.
          </p>
        </div>

        {submitted && (
          <div className="alert alert-success text-center" role="alert">
            Mesajınız başarıyla gönderildi!
          </div>
        )}

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body contact-card-body">
                <h5>İletişim Bilgileri</h5>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2 d-flex align-items-center">
                    <FaPhoneAlt className="me-2" />
                    <a href="tel:+905551112233" className="text-decoration-none link-green">
                      +90 555 111 22 33
                    </a>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaWhatsapp className="me-2" />
                    <a
                      href="https://wa.me/905551112233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none link-green"
                    >
                      WhatsApp'tan yaz
                    </a>
                  </li>
                  <li className="mb-2 d-flex align-items-center">
                    <FaEnvelope className="me-2" />
                    <a
                      href="mailto:info@site.com"
                      className="text-decoration-none link-green"
                    >
                      info@site.com
                    </a>
                  </li>
                </ul>


                <h5>Bizi Takip Et</h5>


                <div className="d-flex gap-3 mb-4 fs-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaFacebook className="hover-green" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaTwitter className="hover-green" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaInstagram className="hover-green" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <FaLinkedin className="hover-green" />
                  </a>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    allowFullScreen=""
                    loading="lazy"
                    title="Harita"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="mb-4">Bize Yazın</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Adınız</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">E-posta</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Konu</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mesaj</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-green w-100 mt-4">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
