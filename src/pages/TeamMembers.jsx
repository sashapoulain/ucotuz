import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import mert from '../assets/images/ourteammember/mert.jpg'
import elif from '../assets/images/ourteammember/elif.webp'
import ahmet from '../assets/images/ourteammember/ahmet.jpg'
const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    position: "Kurucu & CEO",
    image: ahmet,
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Elif Kaya",
    position: "Tasarım Yöneticisi",
    image: elif,
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  {
    name: "Mert Demir",
    position: "Yazılım Geliştirici",
    image: mert,
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
];

const TeamPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="team-title">Ekibimiz</h1>
        <p className="lead text-muted">
          İşte bizi biz yapan insanlar.
        </p>
      </div>

      <div className="row">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 mb-4">
            <div className="card team-card text-center border-0 shadow-sm h-100">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top rounded-circle p-3"
              />
              <div className="card-body">
                <h5 className="text-green">{member.name}</h5>
                <p className="text-muted">{member.position}</p>
                <div className="d-flex justify-content-center gap-3 fs-5">
                  <a href={member.linkedin} className="text-dark" target="_blank" rel="noreferrer">
                    <FaLinkedin className="hover-green" />
                  </a>
                  <a href={member.twitter} className="text-dark" target="_blank" rel="noreferrer">
                    <FaTwitter className="hover-green" />
                  </a>
                  <a href={member.instagram} className="text-dark" target="_blank" rel="noreferrer">
                    <FaInstagram className="hover-green" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
