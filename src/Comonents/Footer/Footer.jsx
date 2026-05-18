import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {/* About */}
        <span>
          <h3>About Us</h3>
          <p className="pal">
            Educity is a global leader in digital education, providing
            accessible, high-quality learning for the modern professional.
            Our mission is to bridge the skills gap by connecting expert
            instructors with learners worldwide through flexible,
            future-proof curricula designed for the 2026 job market.
          </p>
        </span>

        {/* Quick Links */}
        <span>
          <h3>Quick Links</h3>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/programs">Programs</a></li>
          <li><a href="/campus">Campus</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
        </span>

        {/* Follow Us */}
        <span>
          <h3>Follow Us</h3>
          <li>
            <FaFacebook className="facebook"/>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </li>
          <li>
            <FaTwitter className="twitter"/>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </li>
          <li>
            <FaInstagram className="instagram"/>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </li>
        </span>

        {/* Copyright */}
        <span className="toppi">
          <p>&copy; 2026 Code with Neuville. All Rights Reserved.</p>
        </span>
      </ul>
    </footer>
  );
};

export default Footer;