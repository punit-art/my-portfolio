import "./Main_page.css";
import React from "react";
import image from "./gojo-image.png";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import leetcodeIcon from "@iconify/icons-simple-icons/leetcode";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Main_page() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <main id="home" className="main-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="text-container"
      >
        <h1>Creating digital experiences that matter</h1>
        <h2>
          Hello! I'm Punit Mundotiya, a passionate Full Stack Developer
          committed to designing and developing powerful, user-friendly, and
          scalable web applications.
        </h2>
        <div className="button-container">
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1cjqdTmIC90xSUAr4jPJ_DPiWz9QQqE0Q/preview",
                "_blank"
              );
            }}
            className="resume_button"
          >
            My Resume
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#contact");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="Get_in_touch_button"
          >
            Get in touch
          </button>
        </div>
        <div className="contact_div">
          <a href="https://www.linkedin.com/in/punit-mundotiya-621a84339/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
          <a href="https://github.com/punit-art">
            <FontAwesomeIcon className="github" icon={faGithub} />
          </a>
          <a href="https://leetcode.com/u/Punit___100">
            <Icon className="linkedin" icon={leetcodeIcon} />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="gojo_image_section"
      >
        <img src={image} alt="Profile illustration" />
      </motion.div>
    </main>
  );
}
