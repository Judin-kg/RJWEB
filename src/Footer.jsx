import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn,  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2 className="footer-logo">RJ Atlas Digital AI</h2>
          <p>
            Empowering businesses with AI-driven digital transformation — from
            web development to marketing intelligence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/ailab">AILab</a></li>
            <li><a href="/exploreus">Explore</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>AI Automation</li>
            <li>Video Creation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: rjatlasdigitalai@gmail.com</p>
          <p>Phone: +91 9995528426</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1GUZpRDkec/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/rjatlasdigitalai_?igsh=OGI0cXo4eXV1Z3Rt"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/rjatlasjewllery/"><FaLinkedinIn /></a>
           
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RJ Atlas Digital AI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
