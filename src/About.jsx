import "./About.css";
import React from "react";
import image from "./about_pic.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="about-image"
        >
          <img
            className="My-image"
            src={image}
            alt="Punit Mundotiya - Web Developer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="about-content"
        >
          <div className="about-intro">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true }}
              className="tagline"
            >
              Web Developer | Programmer | Problem Solver
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="description"
            >
              I have a strong foundation in C++, Data Structures & Algorithms,
              and hands-on experience in Web Development. I enjoy solving
              real-world problems through clean, efficient, and scalable code.
            </motion.p>
          </div>

          <div className="skills-section">
            <h3 className="section-title">What I Do</h3>
            <div className="skills-grid">
              <div className="skill-item">
                Frontend Development (React, HTML, CSS, JavaScript)
              </div>
              <div className="skill-item">Backend Basics & API Integration</div>
              <div className="skill-item">
                Competitive Programming (450+ Leetcode problems solved)
              </div>
              <div className="skill-item">
                Designing responsive, interactive, and creative websites
              </div>
            </div>
          </div>

          <div className="about-philosophy">
            <p>
              I believe in writing code that's not only functional but also
              optimized, maintainable, and future-ready. My goal is to create
              solutions that merge creativity with technology while keeping
              performance in mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
