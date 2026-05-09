import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import GmailImage from "../assets/gmail-icon.png";
import LinkedinImage from "../assets/linkedin-icon.png";
import ViberImage from "../assets/viber-icon.png";
import FacebookImage from "../assets/facebook-icon.png";

function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  return (
    <div className="page-container">
      <div className="contact-columns">
        {/* Top Column */}
        <div className="contact-column-top">
          <div className="contact-header">
            <p className="contact-small-title contact">CONTACTS</p>
            <h2 className="contact-catchy-phrase contact">
              Interested in my work? <br />
              Let's make something great.
            </h2>
            <p className="contact-description contact">
              Feel free to explore my projects or reach out if you'd like to collaborate.
            </p>
            <p className="contact-address contact">
              San Mateo, Rizal, Philippines 1850
            </p>

              <div className="contact-buttons-container">
                <Link to="/about">
                  <button className="btn-contact-me contact">
                    About Me
                  </button>
                </Link>

                <Link to="/projects">
                  <button className="btn-explore contact">
                    Explore Projects
                  </button>
                </Link>
              </div>
            </div>
          </div>
     

        {/* Bottom Column */}
        <div className="column-bottom">
          <div className="social-grid">
            {/* Email */}
            <div 
              className="social-item" 
              onClick={() => handleCopy("kyledmendoza02@gmail.com", "email")}
              style={{ cursor: "pointer" }}
            >
              <div className="tool-icon"> 
                <img src={GmailImage} alt="Email Icon" />
              </div>
              <h3>Email</h3>
              <p>kyledmendoza02@gmail.com</p>
              {copiedItem === "email" && <span className="copied-text">COPIED!</span>}
            </div>

            {/* LinkedIn */}
            <div 
              className="social-item" 
              onClick={() => handleCopy("linkedin.com/in/kyle-dcm-d0204", "linkedin")}
              style={{ cursor: "pointer" }}
            >
              <div className="tool-icon"> 
                <img src={LinkedinImage} alt="LinkedIn Icon" />
              </div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/kyle-dcm-d0204</p>
              {copiedItem === "linkedin" && <span className="copied-text">COPIED!</span>}
            </div>

            {/* Viber */}
            <div 
              className="social-item" 
              onClick={() => handleCopy("+63 924 397 7908", "viber")}
              style={{ cursor: "pointer" }}
            >
              <div className="tool-icon"> 
                <img src={ViberImage} alt="Viber Icon" />
              </div>
              <h3>Viber</h3>
              <p>+63 924 397 7908</p>
              {copiedItem === "viber" && <span className="copied-text">COPIED!</span>}
            </div>

            {/* Facebook */}
            <div 
              className="social-item" 
              onClick={() => handleCopy("facebook.com/KyleDcMendoza", "facebook")}
              style={{ cursor: "pointer" }}
            >
              <div className="tool-icon"> 
                <img src={FacebookImage} alt="Facebook Icon" />
              </div>
              <h3>Facebook</h3>
              <p>facebook.com/KyleDcMendoza</p>
              {copiedItem === "facebook" && <span className="copied-text">COPIED!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;