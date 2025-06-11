

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import footerData from "../data/footerData.json";

import xIcon from "../assets/images/socialmedia/x.png";
import linkedinIcon from "../assets/images/socialmedia/linkedin-logo.png";
import facebookIcon from "../assets/images/socialmedia/facebook.png";
import instagramIcon from "../assets/images/socialmedia/instagram.png";
import youtubeIcon from "../assets/images/socialmedia/youtube.png";

const iconMap = {
  "x.png": xIcon,
  "linkedin-logo.png": linkedinIcon,
  "facebook.png": facebookIcon,
  "instagram.png": instagramIcon,
  "youtube.png": youtubeIcon,
};

const Footer = () => {
  return (
    <footer className="bg-white pt-4 pb-4 border-top">
      <div className="container">
        <div className="row text-start">
          {footerData.links.map((section, index) => (
            <div className="col-12 col-md-2 mb-3" key={index}>
              <h5>{section.title}</h5>
              <ul className="list-unstyled">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-decoration-none">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-12 col-md-3 mb-3">
            <h5>Sosyal Medyalar</h5>
            <ul className="list-unstyled">
              {footerData.social.map((item, index) => (
                <li key={index}>
                  <img
                    src={iconMap[item.icon]}
                    alt={item.label}
                    width="20"
                    className="me-2"
                  />
                  <a href={item.url} className="text-decoration-none">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-3">
            <h5>Bize Ulaşın</h5>
            <p>
              {footerData.contact.text}{" "}
              <a
                href={footerData.contact.cta.url}
                className="text-decoration-none fw-bold"
                style={{ color: "#04724d" }}
              >
                {footerData.contact.cta.label}
              </a>
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>{footerData.contact.phone}</strong>
              </li>
              <li>
                <small>{footerData.contact.email}</small>
              </li>
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
