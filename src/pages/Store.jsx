import React from "react";

export default function Store() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "700px", width: "100%" }}>
        <h4 className="text-center mb-4">Mağaza Aç</h4>
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Adınız Soyadınız</label>
              <input type="text" className="form-control border border-success" placeholder="Adınız Soyadınız" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Kategori</label>
              <select className="form-select border border-success">
                <option>Elektronik</option>
                <option>Moda</option>
                <option>Ev & Yaşam</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">E-Posta</label>
              <input type="email" className="form-control border border-success" placeholder="ornek@mail.com" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Şirket Türü</label>
              <select className="form-select border border-success">
                <option>Şahıs</option>
                <option>LTD</option>
                <option>A.Ş.</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Telefon Numarası</label>
              <input type="tel" className="form-control border border-success" placeholder="05xx xxx xx xx" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mağaza Adı</label>
              <input type="text" className="form-control border border-success" placeholder="Mağaza Adı" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">İl</label>
              <input type="text" className="form-control border border-success" placeholder="İl" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Vergi Dairesi</label>
              <input type="text" className="form-control border border-success" placeholder="Vergi Dairesi" />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">İlçe</label>
              <input type="text" className="form-control border border-success" placeholder="İlçe" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Vergi Levhası</label>
              <input type="file" className="form-control border border-success" />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                className="form-check-input border border-success"
                type="radio"
                id="aydinlatmaMetni"
                name="onay"
              />
              <label className="form-check-label" htmlFor="aydinlatmaMetni">
                Aydınlatma metnini okudum, anladım.
              </label>
            </div>
            <button type="submit" className="btn btn-success w-50">
              Başvuru Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
