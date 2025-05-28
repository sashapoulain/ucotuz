import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "reactstrap";
import proImg from "../assets/images/products/applewatch.webp";
import Thumbs from "../components/Thumbs";
import heart from "../assets/images/products/heart.png";

const ProductDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  const [selectedImage, setSelectedImage] = useState(proImg); // default image

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Ahşap</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Mobilya</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Kabin Makinası
            </li>
          </ol>
        </nav>

        <div className="col-md-5 position-relative">
          <img
            src={selectedImage}
            className="img-fluid rounded"
            style={{
              width: "100%",
              height: "600px",
              objectFit: "contain",
              padding: "10px",
              border: "1px solid #ddd",
            }}
            alt="Product"
          />
          <button
            className="btn btn-light"
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              borderRadius: "50%",
              padding: "8px",
            }}
          >
            <img src={heart} alt="" />
          </button>
          <div className="d-flex mt-3 products-thumbs">
            <Thumbs onSelect={setSelectedImage} />
            {/* {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`/images/product-thumb-${i}.jpg`} className="img-thumbnail me-2" alt={`thumb-${i}`} width={70} />
            ))} */}
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div className="col-md-4">
          <h4>Kapı Kasa Ve Pervaz Boyama Kabini ve Makinası</h4>
          <div className="d-flex align-items-center">
            <span className="text-warning">★★★★★</span>
            <small className="ms-2 text-success">(76)</small>
            <span className="ms-3">Görüntülenme (5)</span>
          </div>

          <table className="table table-borderless mt-3 detail-table ">
            <tbody>
              <tr className="table-secondary" >
                <td>Marka</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr className="table-secondary">
                <td>Durumu</td>
                <td>:</td>
                <td className="text-success">Yeni</td>
              </tr>
              <tr className="table-secondary" >
                <td>İlan No</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr className="table-secondary"  >
                <td>Kimden</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr className="table-secondary" >
                <td>Kategori</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr className="table-secondary" >
                <td>İlan Tarihi</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr className="table-secondary" >
                <td>Yılı</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr className="table-secondary" >
                <td>Adet</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr className="table-secondary" >
                <td>Fiyat</td>
                <td>:</td>
                <td>24.000 TL / Dolar / Euro</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Satıcı Bilgileri */}
        <div className="col-md-3">
          <div className="border p-3 rounded mb-3">
            <h6>Şirket Bilgisi</h6>
            <p className="mb-1">
              <strong>Şehir:</strong> Antalya
            </p>
            <p className="mb-1">
              <strong>Adres:</strong> 555 Sokak, KAFE YANI MERKEZ
            </p>
            <p className="mb-1">
              <strong>Telefon:</strong> 0532 456 88 88
            </p>
            <button className="btn btn-outline-success btn-sm w-100">
              MAĞAZAYA GİT
            </button>
          </div>

          <div className="border p-3 rounded mb-3">
            <h6>Satıcının Diğer Ürünleri</h6>
            <ul className="list-unstyled">
              {Array(5)
                .fill("Ahşap kesme makinesi")
                .map((item, idx) => (
                  <li key={idx}>
                    <a href="#">{item}</a>
                  </li>
                ))}
            </ul>
            <button className="btn btn-outline-secondary btn-sm w-100 mb-2">
              TÜMÜNÜ GÖR
            </button>
            <button
              className="btn btn-danger btn-sm w-100"
              onClick={handleModal}
            >
              HATA BİLDİRİMİ
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up modal */}
      {/* <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Hata Bildir</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>İsim</Form.Label>
              <Form.Control type="text" placeholder="İsminizi girin" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Soyad</Form.Label>
              <Form.Control type="text" placeholder="Soyadınızı girin" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-posta</Form.Label>
              <Form.Control type="email" placeholder="E-posta adresiniz" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mesaj</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Mesajınız" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            İptal
          </Button>
          <Button variant="primary">Gönder</Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default ProductDetail;
