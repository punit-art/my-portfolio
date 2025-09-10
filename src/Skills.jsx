import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
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
import { useInView } from "react-intersection-observer";
export default function Skills() {
  const skillsData = [
    {
      icon: <FontAwesomeIcon icon={faHtml5} />,
      name: "HTML",
      description: "Semantics • Accessibility",
      level: "Advanced",
      color: "#E34F26",
    },
    {
      icon: <FontAwesomeIcon icon={faCss3Alt} />,
      name: "CSS",
      description: "Layout • Animations • Responsive Design",
      level: "Advanced",
      color: "#1572B6",
    },
    {
      icon: <FontAwesomeIcon icon={faJs} />,
      name: "JavaScript",
      description: "ES6+ • DOM • Async Programming",
      level: "Intermediate",
      color: "#F7DF1E",
    },
    {
      icon: <FontAwesomeIcon icon={faReact} />,
      name: "React",
      description: "Hooks • Components • State Management",
      level: "Advanced",
      color: "#61DAFB",
    },
    {
      icon: <Icon icon={expressIcon} />,
      name: "Express.js",
      description: "REST API • Middleware • Routing",
      level: "Intermediate",
      color: "#000000",
    },
    {
      icon: <Icon icon={tailwindIcon} />,
      name: "Tailwind CSS",
      description: "Utility-First • Responsive • Components",
      level: "Advanced",
      color: "#06B6D4",
    },
    {
      icon: <Icon icon={mongoIcon} />,
      name: "MongoDB",
      description: "NoSQL • Aggregation • Indexing",
      level: "Intermediate",
      color: "#47A248",
    },
    {
      icon: <Icon icon={nodeIcon} />,
      name: "Node.js",
      description: "Runtime • NPM • Backend Development",
      level: "Intermediate",
      color: "#339933",
    },
    {
      icon: <Icon icon={mysqlIcon} />,
      name: "MySQL",
      description: "Relational DB • Queries • Joins",
      level: "Advanced",
      color: "#4479A1",
    },
    {
      icon: <Icon icon={gitIcon} />,
      name: "Git",
      description: "Version Control • Branching • Collaboration",
      level: "Advanced",
      color: "#F05032",
    },
    {
      icon: <Icon icon={githubIcon} />,
      name: "GitHub",
      description: "Repositories • CI/CD • Project Management",
      level: "Advanced",
      color: "#181717",
    },
    {
      icon: <Icon icon={leetcodeIcon} />,
      name: "Problem Solving",
      description: "450+ Questions • DSA • Algorithms",
      level: "Advanced",
      color: "#FFA116",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="skills_container"
      id="skills"
    >
      <h2 className="skills_heading">Technical Skills</h2>
      <p className="skills_subheading">Technologies I work with</p>
      <div className="skills_grid">
        {skillsData.map((skill, index) => (
          <motion.div
            className="skill_card"
            key={index}
            style={{ "--skill-color": skill.color }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: .08*(index)}}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="skill_icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill_content">
              <h3 className="skill_name">{skill.name}</h3>
              <p className="skill_description">{skill.description}</p>
            </div>
            <div className="skill_level">
              <span className="level_badge">{skill.level}</span>
              <div className="level_bar">
                <div
                  className="level_progress"
                  data-level={skill.level.toLowerCase()}
                ></div>
              </div>
            </div>
            <div className="skill_hover_effect"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
