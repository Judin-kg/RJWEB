import React from "react";
import "./Navbar.css";
import logo from "../src/assets/logo.png"; // your local logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="brand">
          RJ ATLAS <span>DIGITAL AI & Services</span>
        </h1>
      </div>

      <ul className="nav-links">
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
    </nav>
  );
};

export default Navbar;
