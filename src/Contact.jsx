import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "./GetInTouch";
import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-info">
        <div className="info-item">
          <FontAwesomeIcon className="info-icon" icon={faEnvelope} />
          <div>
            <h3 className="info-heading">Email</h3>
            <a href="mailto:punitmundotiya24@gmail.com" className="info-text">
              punitmundotiya24@gmail.com
            </a>
          </div>
        </div>
        <div className="info-item">
          <FontAwesomeIcon className="info-icon" icon={faPhone} />
          <div>
            <h3 className="info-heading">Phone</h3>
            <a className="info-text" href="tel:+917006980870">
              +91-7006980870
            </a>
          </div>
        </div>
        <div className="info-item">
          <FontAwesomeIcon className="info-icon" icon={faLocationDot} />
          <div>
            <h3 className="info-heading">Location</h3>
            <p className="info-text">Jaipur, India</p>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://github.com/punit-art" aria-label="GitHub">
            <lord-icon
              src="/git.json"
              trigger="hover"
              colors="primary:#4da6ff,secondary:#ffffff"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/punit-mundotiya-621a84339"
            aria-label="LinkedIn"
          >
            <lord-icon
              src="/linkedin.json"
              trigger="hover"
              colors="primary:#4da6ff,secondary:#ffffff"
              style={{ width: "50px", height: "50px" }}
            />
          </a>

          <a href="https://t.me/+917023843046" aria-label="Telegram">
            <lord-icon
              src="telegram.json"
              trigger="hover"
              colors="primary:#4da6ff,secondary:#ffffff"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a
            href="https://www.instagram.com/punit___100"
            aria-label="Instagram"
          >
            <lord-icon
              src="insta.json"
              trigger="hover"
              colors="primary:#4da6ff,secondary:#ffffff"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <a href="https://wa.me/917006980870" aria-label="WhatsApp">
            <lord-icon
              src="whatsapp.json"
              trigger="hover"
              colors="primary:#4da6ff,secondary:#ffffff"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </div>
      </div>
      <div className="contact-form-container">
        <GetInTouch />
      </div>
    </section>
  );
}
