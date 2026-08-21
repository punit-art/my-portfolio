// About.jsx
import "./About.css";
import React from "react";
import image from "./about_pic.png";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaRocket, 
  FaBrain, 
  FaPalette,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function About() {
  const stats = [
    { value: "2+", label: "Years Experience", icon: <FaCode /> },
    { value: "1000+", label: "LeetCode Solved", icon: <SiLeetcode /> },
    { value: "5+", label: "Projects", icon: <FaRocket /> },
    { value: "3+", label: "Tech Stack", icon: <FaBrain /> },
  ];

  const skills = [
    { icon: <FaLaptopCode />, name: "Frontend", desc: "React, Tailwind, UI/UX" },
    { icon: <FaServer />, name: "Backend", desc: "Node.js, Express, APIs" },
    { icon: <FaDatabase />, name: "Database", desc: "MongoDB, PostgreSQL" },
    { icon: <FaMobileAlt />, name: "Responsive", desc: "Mobile-first Design" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="about-section">
      {/* Background Effects */}
      <div className="about-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="about-container">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="about-image-wrapper"
        >
          <div className="image-frame">
            <div className="image-glow"></div>
            <img
              className="about-image"
              src={image}
              alt="Punit Mundotiya - Web Developer"
            />
            
            {/* Floating Badges */}
            <motion.div
              className="floating-badge badge-1"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>⚡</span> Full Stack
            </motion.div>
            <motion.div
              className="floating-badge badge-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span>🏆</span> DSA Expert
            </motion.div>
            <motion.div
              className="floating-badge badge-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span>🚀</span> 4+ Years
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="about-content"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="about-tag">
            <span className="tag-dot"></span>
            About Me
          </motion.div>

          {/* Title */}
          <motion.h2 variants={itemVariants} className="about-title">
            Who <span className="gradient-text">am I?</span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="about-description">
            I'm a passionate Web Developer and Problem Solver with a strong
            foundation in C++ and Data Structures & Algorithms. I love building
            clean, efficient, and scalable solutions that make a difference.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div>
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="skills-section">
            <h3 className="section-title">What I Do</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  whileHover={{ scale: 1.03, x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div>
                    <h4>{skill.name}</h4>
                    <p>{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy & CTA */}
          <motion.div variants={itemVariants} className="footer-section">
            <div className="philosophy-box">
              <span className="quote-icon">💡</span>
              <p>
                "I believe in writing code that's not only functional but also
                optimized, maintainable, and future-ready. Merging creativity
                with technology while keeping performance in mind."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}