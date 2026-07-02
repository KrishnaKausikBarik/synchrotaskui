import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-20"
    >
      <style>{`
        /* Base Navbar Styles */
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          transition: all 0.3s ease;
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .navbar-container {
            justify-content: flex-end;
          }
        }

        /* Hamburger Menu */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0.5rem;
          z-index: 30;
          transition: all 0.3s ease;
        }

        .hamburger span {
          width: 1.5rem;
          height: 0.15rem;
          background-color: white;
          border-radius: 0.1rem;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(0.6rem, 0.6rem);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(0.5rem, -0.5rem);
        }

        /* Hide hamburger on desktop */
        @media (min-width: 1024px) {
          .hamburger {
            display: none;
          }
        }

        /* Center Links - Desktop */
        .nav-links {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 4rem;
          color: white;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          cursor: pointer;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .nav-links li:hover {
          color: #a78bfa;
        }

        /* Hide on mobile/tablet */
        @media (max-width: 1023px) {
          .nav-links {
            display: none;
          }
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 20;
          padding-top: 5rem;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .mobile-menu li {
          color: white;
          font-size: 1.125rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
          width: 100%;
          text-align: center;
          padding: 1rem 0;
        }

        .mobile-menu li:hover {
          color: #a78bfa;
        }

        /* Mobile Buttons Container */
        .mobile-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 80%;
          max-width: 300px;
        }

        .mobile-buttons button {
          width: 100%;
          padding: 0.875rem 1.75rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* Hide mobile menu on desktop */
        @media (min-width: 1024px) {
          .mobile-menu {
            display: none;
          }
        }

        /* Right Buttons - Desktop */
        .nav-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-left: auto;
        }

        .nav-buttons button {
          padding: 0.75rem 1.75rem;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 0.5rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .login-btn {
          border: 1px solid rgba(255, 255, 255, 0.6);
          color: white;
          background: transparent;
        }

        .login-btn:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .signup-btn {
          background: #a855f7;
          color: white;
          border: none;
        }

        .signup-btn:hover {
          background: #9333ea;
        }

        /* Hide buttons on mobile */
        @media (max-width: 1023px) {
          .nav-buttons {
            display: none;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .hamburger {
            padding: 0.25rem;
          }

          .hamburger span {
            width: 1.25rem;
            height: 0.125rem;
          }

          .mobile-menu {
            padding-top: 4rem;
            gap: 1.5rem;
          }

          .mobile-menu li {
            font-size: 1rem;
            padding: 0.75rem 0;
          }

          .mobile-buttons {
            width: 90%;
            gap: 0.75rem;
          }

          .mobile-buttons button {
            padding: 0.75rem 1.5rem;
            font-size: 0.7rem;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1023px) {
          .mobile-menu li {
            font-size: 1.25rem;
            padding: 1.25rem 0;
          }

          .mobile-buttons {
            width: 70%;
          }
        }

        /* Landscape mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .mobile-menu {
            padding-top: 2rem;
            gap: 1rem;
          }

          .mobile-menu ul {
            gap: 1rem;
          }

          .mobile-menu li {
            padding: 0.5rem 0;
            font-size: 0.875rem;
          }
        }

        /* Prevent scroll when menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>

      <div className="navbar-container px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 py-6 md:py-8">
        {/* Hamburger Menu - Mobile/Tablet */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Center Links - Desktop */}
        <ul className="nav-links">
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>About Us</li>
          <li onClick={closeMenu}>Custom Service</li>
          <li onClick={closeMenu}>Pricing</li>
          <li onClick={closeMenu}>Contact</li>
        </ul>

        {/* Right Buttons - Desktop */}
        <div className="nav-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>About Us</li>
          <li onClick={closeMenu}>Custom Service</li>
          <li onClick={closeMenu}>Pricing</li>
          <li onClick={closeMenu}>Contact</li>
        </ul>

        <div className="mobile-buttons">
          <button className="login-btn" onClick={closeMenu}>
            Log In
          </button>
          <button className="signup-btn" onClick={closeMenu}>
            Sign Up
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;