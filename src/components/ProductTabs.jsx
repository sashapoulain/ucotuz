import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const ProductTabs = () => {
  return (
    <div
      className="mt-4 mb-3 p-3 pro-tabs"
      style={{ background: "#f8f9fa", borderRadius: "0.5rem" }}
    >
      <Tabs
        defaultActiveKey="description"
        id="product-tabs"
        className="custom-tabs"
      >
        <Tab eventKey="description" title="Ürün Açıklaması">
          <div className="p-4 mt-3">
            <h5 className="mb-3 text-success">
              Kapı Kasa ve Pervaz Boyama Kabini
            </h5>
            <p>
              Bu ürün, ahşap kapı kasa ve pervazlarının profesyonelce boyanması
              için tasarlanmış endüstriyel bir makinedir. Ergonomik tasarımı ve
              kullanıcı dostu arayüzü ile işçilik süresini kısaltır ve mükemmel
              yüzey kalitesi sağlar.
            </p>
            <ul className="list-unstyled">
              <li>✔ Tam otomatik boya püskürtme sistemi</li>
              <li>✔ Paslanmaz çelik gövde</li>
              <li>✔ 220V / 380V enerji ile çalışabilir</li>
              <li>✔ Yüksek verimli hava filtresi</li>
              <li>✔ Boya tasarrufu sağlayan sistem</li>
            </ul>
            <p className="mt-3">
              Tüm parçalar CE belgeli olup sanayi standartlarına uygundur.
              Türkiye'nin her yerine sevkiyat yapılır.
            </p>
          </div>
        </Tab>
        <Tab eventKey="comments" title="Ürün Yorumları">
          <div className="position-relative p-4  mt-3">
            <h5 className="mb-4 text-success">Müşteri Yorumları (3)</h5>

            <div className="mb-4">
              <strong>Ahmet Y.</strong>
              <div className="text-warning mb-1">★★★★★</div>
              <p className="mb-0">
                Ürün beklediğimden kaliteli. Hızlı kargo ve sağlam paketleme
                için teşekkürler.
              </p>
            </div>

            <hr />

            <div className="mb-4">
              <strong>Elif K.</strong>
              <div className="text-warning mb-1">★★★★☆</div>
              <p className="mb-0">
                Kullanımı kolay ve verimli bir makina. Ancak kurulum için daha
                detaylı bilgi olabilirdi.
              </p>
            </div>

            <hr />

            <div className="mb-4">
              <strong>Mehmet B.</strong>
              <div className="text-warning mb-1">★★★★★</div>
              <p className="mb-0">
                Satıcı ilgiliydi. Ürün tam anlatıldığı gibi. Tavsiye ederim.
              </p>
            </div>

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
              <p className="mb-0">
                İkitelli OSB Mah. Eski Turgut Özal Cd. No:88, Başakşehir /
                İstanbul
              </p>
            </div>

            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="ilan-konum"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem" }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12033.2462220389!2d28.793055!3d41.070474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3a17869e217%3A0xd7c1d853930f83aa!2zxLBraXRlbGxpIE9yZ2FuaXplIFNhbiBhew!5e0!3m2!1str!2str!4v1685555555555"
              ></iframe>
            </div>
          </div>
        </Tab>
        <Tab eventKey="ask" title="İlan Soru Sor">
          <div className="p-4  mt-3">
            <h5 className="mb-4 text-success">İlan Hakkında Soru Sor</h5>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Adınız *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-posta (isteğe bağlı)
                </label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Sorunuz *
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                ></textarea>
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
          <div className="p-4  mt-3">
            <h5 className="mb-4 text-success">Satıcıya Teklif Gönder</h5>

            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Adınız *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefon *
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-posta (isteğe bağlı)
                </label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="offer" className="form-label">
                  Teklifiniz (Fiyat)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="offer"
                  placeholder="Örn: 22.000 TL"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mesajınız
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
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
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Ürün Kataloğu
                <a
                  href="/docs/urun-katalogu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-sm"
                  style={{ borderRadius: "1rem" }}
                >
                  Görüntüle
                </a>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Kullanım Kılavuzu
                <a
                  href="/docs/kullanim-kilavuzu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-sm"
                  style={{ borderRadius: "1rem" }}
                >
                  Görüntüle
                </a>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                CE Sertifikası
                <a
                  href="/docs/ce-sertifikasi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-sm"
                  style={{ borderRadius: "1rem" }}
                >
                  Görüntüle
                </a>
              </li>
            </ul>
          </div>
        </Tab>
      </Tabs>
    
    </div>
    
  );
};

export default ProductTabs;
