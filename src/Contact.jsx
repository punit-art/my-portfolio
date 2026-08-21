import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2 className="contact-title">📬 Get In Touch</h2>
          <p className="contact-subtitle">Let's connect — I'm just a message away!</p>
        </div>

        <div className="contact-grid">
          {/* Email */}
          <div className="contact-card card-email">
            <div className="card-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3>Email</h3>
            <a href="mailto:punitmundotiya24@gmail.com">
              punitmundotiya24@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="contact-card card-phone">
            <div className="card-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3>Phone</h3>
            <a href="tel:+917006980870">+91-7006980870</a>
          </div>

          {/* Location */}
          <div className="contact-card card-location">
            <div className="card-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h3>Location</h3>
            <p>Jaipur, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <p className="social-label">✨ Connect with me</p>
          <div className="social-icons">
            <a href="https://github.com/punit-28" aria-label="GitHub" className="social-link github">
              <lord-icon
                src="/git.json"
                trigger="hover"
                colors="primary:#4da6ff,secondary:#ffffff"
                style={{ width: "45px", height: "45px" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/punit-mundotiya-621a84339" aria-label="LinkedIn" className="social-link linkedin">
              <lord-icon
                src="/linkedin.json"
                trigger="hover"
                colors="primary:#4da6ff,secondary:#ffffff"
                style={{ width: "45px", height: "45px" }}
              />
            </a>
            <a href="https://t.me/+917023843046" aria-label="Telegram" className="social-link telegram">
              <lord-icon
                src="telegram.json"
                trigger="hover"
                colors="primary:#4da6ff,secondary:#ffffff"
                style={{ width: "45px", height: "45px" }}
              />
            </a>
            <a href="https://www.instagram.com/punit___100" aria-label="Instagram" className="social-link instagram">
              <lord-icon
                src="insta.json"
                trigger="hover"
                colors="primary:#4da6ff,secondary:#ffffff"
                style={{ width: "45px", height: "45px" }}
              />
            </a>
            <a href="https://wa.me/917006980870" aria-label="WhatsApp" className="social-link whatsapp">
              <lord-icon
                src="whatsapp.json"
                trigger="hover"
                colors="primary:#4da6ff,secondary:#ffffff"
                style={{ width: "45px", height: "45px" }}
              />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="contact-footer">
          <p>⚡ Available for freelance & collaborations</p>
        </div>
      </div>
    </section>
  );
}