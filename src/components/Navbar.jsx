import React, { useState, useEffect } from "react";
import logo from "../assets/b2cloud_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Logo */}
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "100%",
            width: isMobile ? "22vw" : "10vw",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <div className="desktop-links">
          <a href="/" style={{ color: "white", textDecoration: "none", fontFamily: "Poppins, sans-serif" }}>
            Home
          </a>
          <a href="/aboutus" style={{ color: "white", textDecoration: "none", fontFamily: "Poppins, sans-serif" }}>
            About
          </a>
          <a href="/portfolio" style={{ color: "white", textDecoration: "none", fontFamily: "Poppins, sans-serif" }}>
            Portfolio
          </a>
        </div>
      )}

      {/* Desktop "Get in touch" Button */}
      {!isMobile && (
        <a href="/contactus">
          <button className="get-in-touch" style={{ fontFamily: "Poppins, sans-serif" }}>
            Get in touch
          </button>
        </a>
      )}

      {/* Mobile Hamburger Icon */}
      {isMobile && (
        <div onClick={toggleMenu} className="mobile-menu" style={{ fontFamily: "Poppins, sans-serif" }}>
          &#9776; {/* Hamburger icon */}
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && isMenuOpen && (
        <div className="dropdown-menu" style={{ fontFamily: "Poppins, sans-serif" }}>
          <a href="/">Home</a>
          <a href="/aboutus">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contactus">
            <button>Get in touch</button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
