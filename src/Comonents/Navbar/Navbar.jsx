import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import nesh from "../../assets/nesh.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "hero-container", label: "Home" },
    { to: "program", label: "Program" },
    { to: "about", label: "About Us" },
    { to: "campus", label: "Campus" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact Us" },
  ];

  return (
    <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <img className="logo" src={nesh} alt="Logo" />

      <ul className="nav-links">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} smooth={true} duration={500} offset={-68} spy={true} onClick={closeMenu}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <span className={menuOpen ? "bar open-1" : "bar"} />
        <span className={menuOpen ? "bar open-2" : "bar"} />
        <span className={menuOpen ? "bar open-3" : "bar"} />
      </button>

      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} smooth={true} duration={500} offset={-68} onClick={closeMenu}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;