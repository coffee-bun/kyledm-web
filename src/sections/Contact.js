import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
import GmailImage from "../assets/gmail-icon.png";
import LinkedinImage from "../assets/linkedin-icon.png";
import ViberImage from "../assets/viber-icon.png";
import FacebookImage from "../assets/facebook-icon.png";

function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const formRef = useRef();

  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  // EmailJS submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_fkce8gf';     // Get from EmailJS dashboard
    const TEMPLATE_ID = 'template_24yh4m9';   // Get from EmailJS dashboard
    const PUBLIC_KEY = '9TfobD9ZRM237hXR5';     // Get from EmailJS account

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitStatus('success');
          setIsSubmitting(false);
          e.target.reset(); // Reset form after successful submission
          setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds
        },
      );
  };

  return (
    <>
      {/* Original Contact Page */}
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

      {/* NEW Contact Page 2 - appears under Social Item */}
      <div className="page-container contact-page2">
        <div className="centered-content">
          <h2 className="centered-title">
            Let's Connect Beyond <br />
            The Portfolio
          </h2>
          
          {/* Contact Form */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="from_name"  // Changed to match EmailJS template
                placeholder="Your name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="from_email"  // Changed to match EmailJS template
                placeholder="your.email@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea 
                id="message" 
                name="message"  // Changed to match EmailJS template
                placeholder="Your message here..." 
                rows="5" 
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="form-success-message">
                ✓ Thank you for your message! I will get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-error-message">
                ✗ Failed to send message. Please try again or contact me directly via email.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;