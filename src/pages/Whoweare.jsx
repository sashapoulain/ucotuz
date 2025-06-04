import React from "react";
import { FaHandshake, FaStar, FaLightbulb } from "react-icons/fa";
import aboutimg from '../assets/images/about.jpg'

const Whoweare = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="whoweare-title">Biz Kimiz?</h1>
        <p className="lead text-muted">
          İnsanlara ilham vermek, güven yaratmak ve değer sunmak için buradayız.
        </p>
      </div>

      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img
            src={aboutimg}
            alt="Kuruluş hikayesi"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-green">Nereden Başladık?</h3>
          <p>
            Sıradan bir fikirle başlayan yolculuğumuz, kısa sürede binlerce
            müşteriye ulaşan bir başarıya dönüştü. Teknolojiye olan tutkumuz ve
            insan odaklı yaklaşımımızla her zaman daha fazlasını hedefliyoruz.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaHandshake size={40} className="text-green mb-3" />
              <h5 className="text-green">Güven</h5>
              <p>Müşterilerimizle karşılıklı güvene dayalı bir bağ kurarız.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaStar size={40} className="text-green mb-3" />
              <h5 className="text-green">Kalite</h5>
              <p>Her ürünü ve hizmeti yüksek kalite standartlarında sunarız.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaLightbulb size={40} className="text-green mb-3" />
              <h5 className="text-green">Yenilik</h5>
              <p>Daima gelişen, öğrenen ve yenilik peşinde koşan bir ekibiz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
