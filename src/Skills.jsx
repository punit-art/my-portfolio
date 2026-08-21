import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect, useRef } from "react";
import expressIcon from "@iconify/icons-simple-icons/express";
import { Icon } from "@iconify/react";
import tailwindIcon from "@iconify/icons-simple-icons/tailwindcss";
import mongoIcon from "@iconify/icons-simple-icons/mongodb";
import nodeIcon from "@iconify/icons-simple-icons/nodedotjs";
import mysqlIcon from "@iconify/icons-simple-icons/mysql";
import gitIcon from "@iconify/icons-simple-icons/git";
import githubIcon from "@iconify/icons-simple-icons/github";
import leetcodeIcon from "@iconify/icons-simple-icons/leetcode";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);

  const skillsData = [
    {
      icon: <FontAwesomeIcon icon={faHtml5} />,
      name: "HTML",
      level: "Advanced",
      color: "#E34F26",
      bg: "#E34F2620",
      description: "Semantic markup & accessibility",
      years: "4+ yrs"
    },
    {
      icon: <FontAwesomeIcon icon={faCss3Alt} />,
      name: "CSS",
      level: "Advanced",
      color: "#1572B6",
      bg: "#1572B620",
      description: "Animations & responsive design",
      years: "4+ yrs"
    },
    {
      icon: <FontAwesomeIcon icon={faJs} />,
      name: "JavaScript",
      level: "Intermediate",
      color: "#F7DF1E",
      bg: "#F7DF1E20",
      description: "ES6+, DOM, async/await",
      years: "3+ yrs"
    },
    {
      icon: <FontAwesomeIcon icon={faReact} />,
      name: "React",
      level: "Advanced",
      color: "#61DAFB",
      bg: "#61DAFB20",
      description: "Hooks, Context, Performance",
      years: "3+ yrs"
    },
    {
      icon: <Icon icon={expressIcon} />,
      name: "Express.js",
      level: "Intermediate",
      color: "#ffffff",
      bg: "#ffffff20",
      description: "REST APIs & middleware",
      years: "2+ yrs"
    },
    {
      icon: <Icon icon={tailwindIcon} />,
      name: "Tailwind",
      level: "Advanced",
      color: "#06B6D4",
      bg: "#06B6D420",
      description: "Utility-first CSS",
      years: "2+ yrs"
    },
    {
      icon: <Icon icon={mongoIcon} />,
      name: "MongoDB",
      level: "Intermediate",
      color: "#47A248",
      bg: "#47A24820",
      description: "NoSQL, Aggregation",
      years: "2+ yrs"
    },
    {
      icon: <Icon icon={nodeIcon} />,
      name: "Node.js",
      level: "Intermediate",
      color: "#339933",
      bg: "#33993320",
      description: "Event-driven architecture",
      years: "3+ yrs"
    },
    {
      icon: <Icon icon={mysqlIcon} />,
      name: "MySQL",
      level: "Advanced",
      color: "#4479A1",
      bg: "#4479A120",
      description: "Complex queries & optimization",
      years: "3+ yrs"
    },
    {
      icon: <Icon icon={gitIcon} />,
      name: "Git",
      level: "Advanced",
      color: "#F05032",
      bg: "#F0503220",
      description: "Version control mastery",
      years: "4+ yrs"
    },
    {
      icon: <Icon icon={githubIcon} />,
      name: "GitHub",
      level: "Advanced",
      color: "#ffffff",
      bg: "#ffffff20",
      description: "CI/CD & collaboration",
      years: "4+ yrs"
    },
    {
      icon: <Icon icon={leetcodeIcon} />,
      name: "DSA",
      level: "Advanced",
      color: "#FFA116",
      bg: "#FFA11620",
      description: "650+ problems solved",
      years: "2+ yrs"
    },
  ];

  // 3D Rotation effect on mouse move
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setRotation({ x: y * 10, y: x * 10 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="skills_section" id="skills">
      {/* Animated Background */}
      <div className="skills_bg">
        <div className="glow_orb glow_orb_1"></div>
        <div className="glow_orb glow_orb_2"></div>
        <div className="glow_orb glow_orb_3"></div>
      </div>

      <div className="skills_container" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills_header"
        >
          <span className="skills_tag">⚡ Expertise</span>
          <h2 className="skills_heading">My Tech Stack</h2>
          <p className="skills_subheading">
            Technologies I've mastered to build amazing digital experiences
          </p>
        </motion.div>

        {/* Floating Skills Grid with 3D effect */}
        <motion.div
          className="skills_grid_3d"
          style={{
            transform: `perspective(1000px) rotateX(${rotation?.x || 0}deg) rotateY(${rotation?.y || 0}deg)`,
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill_card_3d ${activeIndex === index ? "active" : ""}`}
              style={{
                "--skill-color": skill.color,
                "--skill-bg": skill.bg,
              }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              whileHover={{ 
                scale: 1.08,
                rotateY: 0,
                z: 50,
                transition: { duration: 0.2 }
              }}
            >
              {/* Glow effect on hover */}
              <div className="card_glow" style={{ background: `radial-gradient(circle, ${skill.color}40, transparent 70%)` }} />
              
              {/* Icon with rotating border */}
              <div className="icon_ring">
                <div className="icon_ring_rotate" style={{ borderColor: skill.color }}>
                  <div className="skill_icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>
              </div>

              <div className="skill_details">
                <h3 className="skill_name">{skill.name}</h3>
                <p className="skill_desc">{skill.description}</p>
                
                {/* Level indicator with animated bar */}
                <div className="level_container">
                  <div className="level_bar_bg">
                    <motion.div 
                      className="level_bar_fill"
                      style={{ 
                        width: skill.level === "Advanced" ? "90%" : 
                               skill.level === "Intermediate" ? "65%" : "40%",
                        background: `linear-gradient(to right, ${skill.color}, ${skill.color}cc)`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === "Advanced" ? "90%" : 
                                    skill.level === "Intermediate" ? "65%" : "40%" }}
                      transition={{ duration: 1, delay: index * 0.03 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="level_text" style={{ color: skill.color }}>
                    {skill.level}
                  </span>
                </div>

                <span className="skill_years">{skill.years}</span>
              </div>

              {/* Floating particles */}
              <div className="particles">
                <span className="particle" style={{ background: skill.color }} />
                <span className="particle" style={{ background: skill.color }} />
                <span className="particle" style={{ background: skill.color }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with animated numbers */}
        <motion.div 
          className="skills_footer_stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stat_card">
            <div className="stat_icon">🚀</div>
            <div>
              <h4>12+</h4>
              <p>Technologies</p>
            </div>
          </div>
          <div className="stat_divider_line" />
          <div className="stat_card">
            <div className="stat_icon">💪</div>
            <div>
              <h4>8</h4>
              <p>Advanced Skills</p>
            </div>
          </div>
          <div className="stat_divider_line" />
          <div className="stat_card">
            <div className="stat_icon">🏆</div>
            <div>
              <h4>2+</h4>
              <p>Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}