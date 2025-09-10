import reactLogo from "./assets/react.svg";
import Header from "./Header.jsx";
import Main_page from "./Main_page.jsx";
import Service from "./Service.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import IntroSplash from "./Home.jsx";
import React, { useState, useEffect } from "react";
import Home from "./Home.jsx";


export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000); // 4 secend ke liye
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <Home name="Punit Mundotiya" />
      ) : (
        <div className="app-container">
          <header>
            <Header />
          </header>
          <main>
            <section className="main-section">
              <Main_page />
            </section>
            <section>
              <About />
            </section>
            <section >
              <Service />
            </section>
            <section>
              <Skills />
            </section>
            <section>
              <Contact />
            </section>
            <section>
              <Footer />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
