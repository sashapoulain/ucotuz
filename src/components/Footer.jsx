import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import x from "../assets/images/socialmedia/x.png";
import linkedin from "../assets/images/socialmedia/linkedin-logo.png";
import facebook from "../assets/images/socialmedia/facebook.png";
import instagram from "../assets/images/socialmedia/instagram.png";
import youtube from "../assets/images/socialmedia/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-4 pb-4 border-top">
      <div className="container">
        <div className="row text-start">
          {/* Hızlı Linkler */}
          <div className="col-12 col-md-2 mb-3">
            <h5>Hızlı Linkler</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Anasayfa</a></li>
              <li><a href="#" className="text-decoration-none">Hakkımızda</a></li>
              <li><a href="#" className="text-decoration-none">Hizmetler</a></li>
            </ul>
          </div>

          {/* Kaynaklar */}
          <div className="col-12 col-md-2 mb-3">
            <h5>Kaynaklar</h5>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none">Ekibimiz</a></li>
              <li><a href="#" className=" text-decoration-none">Kariyer</a></li>
              <li><a href="#" className=" text-decoration-none">Gizlilik Politikası</a></li>
              <li><a href="#" className=" text-decoration-none">Biz Kimiz</a></li>
            </ul>
          </div>

          {/* Yardım */}
          <div className="col-12 col-md-2 mb-3">
            <h5>Yardım</h5>
            <ul className="list-unstyled">
              <li><a href="#" className=" text-decoration-none">Yardım</a></li>
              <li><a href="#" className=" text-decoration-none">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className=" text-decoration-none">İletişim</a></li>
            </ul>
          </div>

          {/* Sosyal Medyalar */}
          <div className="col-12 col-md-3 mb-3">
            <h5>Sosyal Medyalar</h5>
            <ul className="list-unstyled">
              <li>
                <img src={x} alt="X" width="20" className="me-2" />
                <a href="#" className=" text-decoration-none">X</a>
              </li>
              <li>
                <img src={facebook} alt="Facebook" width="20" className="me-2" />
                <a href="#" className=" text-decoration-none">Facebook</a>
              </li>
              <li>
                <img src={youtube} alt="YouTube" width="20" className="me-2" />
                <a href="#" className=" text-decoration-none">YouTube</a>
              </li>
              <li>
                <img src={instagram} alt="Instagram" width="20" className="me-2" />
                <a href="#" className=" text-decoration-none">Instagram</a>
              </li>
              <li>
                <img src={linkedin} alt="LinkedIn" width="20" className="me-2" />
                <a href="#" className=" text-decoration-none">LinkedIn</a>
              </li>
            </ul>
          </div>




          {/* Bize Ulaşın */}
          <div className="col-12 col-md-3 mb-3">
            <h5>Bize Ulaşın</h5>
            <ul className="list-unstyled">
              <p>
                Hemen bir mağaza oluşturarak satışa başlayın.{" "}
                <a href="#" className="text-decoration-none fw-bold" style={{color: '#04724d'}}>Mağaza Oluştur</a>
              </p>
              <li><strong>+90 212 333 33 33</strong></li>
              <li><small>support@siteniz.com</small></li>
            </ul>
          </div>
        </div>
        <hr className="border-dark" />
        <div className="text-center">
          <small>&copy; 2025 Tüm Hakları Saklıdır.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
