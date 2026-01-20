import React from "react";
import "./Footer.css";
import { useSyncExternalStore } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

//

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul>
          <span>
            <h3>About Us</h3>
            <p className="pal">
              Educity is  a global leader in digital education, providing accessible,<br />
              high-quality learning for the modern professional. Our mission is
              to bridge,<br /> the skills gap by connecting expert instructors with
              learners worldwide,<br /> through flexible, future-proof curricula
              designed for the 2026 job market.
            </p>

            
          </span>
          <span>
            <h3>Quick links</h3>
            <ul>
            </ul>
              <li><a href="" className="hover:underline text-grey-300">Home</a></li>
              <li><a href="" className="hover:underline text-grey-300">Services</a></li>
              <li><a href="" className="hover:underline text-grey-300">Contact</a></li>
              <li><a href="" className="hover:underline text-grey-300">About</a></li>
              <li><a href="" className="hover:underline text-grey-300">Programs</a></li>
              <li><a href="" className="hover:underline text-grey-300">Campus</a></li>
              <li><a href="" className="hover:underline text-grey-300">Testimonials</a></li>

          
          </span>
          <span>
            <h3>Follow Us</h3>
            <li>< FaFacebook className="face"/><a href="" >Facebook</a></li>
            <li>< FaTwitter className="twitter"/><a href="" className="hover:underline text-grey-300">Twitter</a></li>
            <li>< FaInstagram className="insta"/><a href="" className="hover:underline text-grey-300">Instagram</a></li>
          </span>
          <span className="toppi">
            <p>&copy; 2026 Code with Neuville. All right Reserved.</p>
          </span>
         
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
