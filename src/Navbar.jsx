import React, { useState } from "react";
import "./Navbar.css";
import logo from "../src/assets/logo.png"; // your local logo

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle("no-scroll", !menuActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="brand">
            RJ ATLAS <span>DIGITAL AI & Services</span>
          </h1>
        </div>

        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#ailab">AILab</a></li>
          <li><a href="#exploreus">Explore Us</a></li>
          <li>
            <a href="#contact" className="contact-btn">
              Contact
              <span className="shine"></span>
            </a>
          </li>
        </ul>

        <div
          className={`hamburger ${menuActive ? "toggle" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Navbar;
