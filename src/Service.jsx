import React, { useEffect } from "react";
import "./Service.css";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { motion } from "framer-motion";

export default function Service() {
  useEffect(() => {
    defineElement(lottie.loadAnimation);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.1 }}
      className="service-container"
      id="services"
    >
      <h2>My Services</h2>
      <section className="services-grid">
        <div className="card">
          <lord-icon
            src="/devleoper.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>Web Development</h3>
          <p>
            I create responsive and dynamic websites tailored to your needs,
            ensuring high performance and scalability.
          </p>
        </div>
        <div className="card">
          <lord-icon
            src="https://cdn.lordicon.com/qhgmphtg.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>UI/UX Design</h3>
          <p>
            Designing user-friendly interfaces with an emphasis on
            accessibility, usability, and aesthetic appeal.
          </p>
        </div>
        <div className="card">
          <lord-icon
            src="/Edit.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>Content Writing</h3>
          <p>
            Providing professional content creation services for blogs,
            articles, websites, and more.
          </p>
        </div>
        <div className="card">
          <lord-icon
            src="/Globe.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>SEO Optimization</h3>
          <p>
            Optimizing websites to rank higher on search engines and attract
            more organic traffic.
          </p>
        </div>
        <div className="card">
          <lord-icon
            src="https://cdn.lordicon.com/qhviklyi.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>Backend Development</h3>
          <p>
            Building secure and efficient server-side applications with robust
            database management to ensure seamless performance.
          </p>
        </div>
        <div className="card">
          <lord-icon
            src="/Rest API.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>API Integration & Development</h3>
          <p>
            Creating and integrating RESTful and GraphQL APIs for smooth data
            communication between applications and platforms.
          </p>
        </div>
        <div className="card">
          <lord-icon
            src="/Bar Chart.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>E-Commerce Solutions</h3>
          <p>
            Developing feature-rich online stores with secure payment gateways,
            inventory management, and a smooth user experience.
          </p>
        </div>
        <div className="card">
          <lord-icon
            src="/contact.json"
            trigger="hover"
            colors="primary:#4da6ff,secondary:#ffffff"
            style={{ width: "60px", height: "60px" }}
          ></lord-icon>
          <h3>Maintenance & Support</h3>
          <p>
            Offering continuous website monitoring, updates, bug fixes, and
            technical support to keep your project running flawlessly.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
