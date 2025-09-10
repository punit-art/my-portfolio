import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentLetter, setCurrentLetter] = useState(0);
  const name = ["PUNIT", "MUNDOTIYA"];

useEffect(() => {
  const totalLetters = name.reduce((acc, word) => acc + word.length, 0);
  const letterInterval = setInterval(() => {
    setCurrentLetter((prev) => (prev >= totalLetters - 1 ? 0 : prev + 1));
  }, 150);
  const timer = setTimeout(() => setShowSplash(false), 5000);
  return () => {
    clearInterval(letterInterval);
    clearTimeout(timer);
  };
}, [name]);
  return (
    <div className="app">
      <AnimatePresence>
        {showSplash ? (
          <motion.div
            key="splash"
            className="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="floating-dots">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="floating-dot"></div>
              ))}
            </div>
            <div className="creative-text-container">
              <h1 className="creative-text">
                {name.map((word, wIndex) => {
                  const letterOffset = name
                    .slice(0, wIndex) 
                    .reduce((acc, w) => acc + w.length, 0);
                  return (
                    <div key={wIndex} className="creative-word">
                      {word.split("").map((letter, index) => {
                        const globalIndex = letterOffset + index;

                        return (
                          <motion.span
                            key={index}
                            className={`creative-letter ${
                              currentLetter === globalIndex ? "active" : ""
                            }`}
                            initial={{ opacity: 0, y: 50, rotate: -10 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              rotate: 0,
                              color:
                                currentLetter === globalIndex
                                  ? "#4da6ff"
                                  : "#ffffff",
                            }}
                            transition={{
                              duration: 0.5,
                              delay: globalIndex * 0.1, 
                            }}
                          >
                            {letter}
                          </motion.span>
                        );
                      })}
                    </div>
                  );
                })}
              </h1>
              <div className="creative-underline">
                <motion.div
                  className="underline-active"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
            </div>
            <motion.div
              className="creative-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <span>Coding the Future</span>
              <span>Designing Experiences</span>
              <span>Building Dreams</span>
            </motion.div>

            <div className="creative-progress">
              <motion.div
                className="progress-active"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            className="portfolio"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>🚀 Welcome to My Portfolio</h2>
            <p>
              Creating exceptional digital experiences through innovative web
              development and design.
            </p>
            <button className="cta-button">Explore My Work</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
