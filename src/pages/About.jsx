
import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import aboutimg from '../assets/images/about.jpg'
import { useTranslation } from 'react-i18next';
// import i18n from "../i18n";
const About = () => {
  const { t } = useTranslation();
  // const {i18n} = useTranslation();
  return (
    <div className="container my-5 about">
      <div className="text-center mb-5">
      {/* <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('tr')}>Türkçe</button> */}
        <h1 className="about-title">{t('about.title')}</h1>
        <p className="lead text-muted">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="text-green">{t('about.whoWeAreTitle')}</h3>
          <p>
            {t('about.whoWeAreText')}
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={aboutimg}
            alt={t('about.imageAlt')}
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaBullseye size={40} className="text-green mb-3" />
              <h5 className="text-green">{t('about.missionTitle')}</h5>
              <p>
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <FaEye size={40} className="text-green mb-3" />
              <h5 className="text-green">{t('about.visionTitle')}</h5>
              <p>
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
