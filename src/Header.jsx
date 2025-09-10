import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useEffect, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navRef = useRef(null);
  const headerRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuOpen &&
        navRef.current &&
        headerRef.current &&
        !navRef.current.contains(e.target) &&
        !headerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  useEffect(() => {
    function handleScroll() {
      if (menuOpen) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <motion.header
        id="header"
        ref={headerRef}
        className="app-header"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="logo"
        >
          Punit Mundotiya
        </motion.div>
        <nav className="navigation">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="desktop-nav"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                className="nav-item"
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href.substring(1));
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
          <div className="mobile-toggle">
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              onClick={handleMenuToggle}
              className="toggle-icon"
            />
          </div>
        </nav>
      </motion.header>
      <motion.div
        className={`mobile-menu ${menuOpen && windowWidth < 768 ? "open" : ""}`}
        ref={navRef}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            className="mobile-nav-item"
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item.href.substring(1));
              setMenuOpen(false);
            }}
          >
            {item.name}
          </a>
        ))}
      </motion.div>
    </>
  );
}
