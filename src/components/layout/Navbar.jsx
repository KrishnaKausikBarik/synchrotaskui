import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        if (window.scrollY > heroHeight - 100) {
          setIsHeroVisible(false);
          if (isOpen) setIsOpen(false);
        } else {
          setIsHeroVisible(true);
        }
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`top-0 left-0 w-full z-50 transition-all duration-300 md:sticky lg:sticky fixed ${
        isScrolled ? "bg-[#160823] border-0 shadow-none" : "bg-transparent border-0 shadow-none"
      }`}
    >
      <style>{`
        /* Base Navbar Styles */
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          transition: all 0.3s ease;
          position: relative;
          border: none !important;
          outline: none !important;
        }

        @media (min-width: 1024px) {
          .navbar-container {
            justify-content: flex-end;
          }
        }

        /* Hamburger Menu - FIXED POSITION */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 8px;
          padding: 10px 12px;
          z-index: 60;
          transition: all 0.3s ease;
          width: 48px;
          height: 48px;
          position: fixed;
          top: 24px;
          right: 24px;
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
          box-shadow: none !important;
        }

        .hamburger.hidden {
          opacity: 0;
          transform: scale(0.8);
          pointer-events: none;
        }

        .hamburger:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2) !important;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background-color: white;
          border-radius: 2px;
          transition: all 0.3s ease-in-out;
          transform-origin: center;
          position: absolute;
        }

        .hamburger span:nth-child(1) {
          top: 14px;
        }

        .hamburger span:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger span:nth-child(3) {
          bottom: 14px;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg);
          top: 50%;
          margin-top: -1.25px;
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 50%;
          margin-bottom: -1.25px;
        }

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
          gap: 2.5rem;
          color: white;
          font-size: 12px;
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

        @media (max-width: 1023px) {
          .nav-links {
            display: none;
          }
        }

        /* Mobile Menu - NOT full viewport */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          max-height: 85vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          z-index: 40;
          padding-top: 5rem;
          padding-bottom: 2rem;
          overflow-y: auto;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        .mobile-menu.active {
          transform: translateY(0);
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .mobile-menu li {
          color: white;
          font-size: 15px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
          width: 100%;
          text-align: center;
          padding: 0.75rem 0;
        }

        .mobile-menu li:hover {
          color: #a78bfa;
        }

        .mobile-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 80%;
          max-width: 300px;
          margin-top: 0.5rem;
        }

        .mobile-buttons button {
          width: 100%;
          padding: 0.875rem 1.75rem;
          font-size: 15px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (min-width: 1024px) {
          .mobile-menu {
            display: none;
          }
        }

        .nav-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-left: auto;
        }

        .nav-buttons button {
          padding: 0.75rem 1.75rem;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 0.5rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          outline: none !important;
        }

        /* Login Button - Strong White Border */
        .login-btn {
          background: rgba(255, 255, 255, 0.12) !important;
          border: 2px solid rgba(255, 255, 255, 0.9) !important;
          color: white !important;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .login-btn:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: #ffffff !important;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .signup-btn {
          background: #a855f7 !important;
          color: white !important;
          border: none !important;
        }

        .signup-btn:hover {
          background: #9333ea !important;
        }

        @media (max-width: 1023px) {
          .nav-buttons {
            display: none;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .hamburger {
            padding: 8px 10px;
            width: 40px;
            height: 40px;
            gap: 5px;
            top: 16px;
            right: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
          }

          .hamburger span {
            width: 20px;
            height: 2px;
          }

          .hamburger span:nth-child(1) {
            top: 12px;
          }

          .hamburger span:nth-child(3) {
            bottom: 12px;
          }

          .mobile-menu {
            max-height: 80vh;
            padding-top: 4rem;
            gap: 1rem;
            border: none !important;
          }

          .mobile-menu ul {
            gap: 0.75rem;
          }

          .mobile-menu li {
            font-size: 13px;
            padding: 0.5rem 0;
          }

          .mobile-buttons {
            width: 90%;
            gap: 0.75rem;
          }

          .mobile-buttons button {
            padding: 0.55rem 1.5rem;
            font-size: 13px;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .hamburger {
            top: 28px;
            right: 32px;
          }

          .mobile-menu {
            max-height: 80vh;
            border: none !important;
          }

          .mobile-menu ul {
            gap: 1.25rem;
          }

          .mobile-menu li {
            font-size: 15px;
            padding: 0.75rem 0;
          }

          .mobile-buttons {
            width: 70%;
          }
        }

        @media (max-height: 600px) and (orientation: landscape) {
          .mobile-menu {
            max-height: 70vh;
            padding-top: 2rem;
            gap: 0.75rem;
            border: none !important;
          }

          .mobile-menu ul {
            gap: 0.5rem;
          }

          .mobile-menu li {
            padding: 0.4rem 0;
            font-size: 14px;
          }

          .mobile-buttons {
            gap: 0.5rem;
          }

          .mobile-buttons button {
            padding: 0.5rem 1rem;
            font-size: 14px;
          }
        }

        body.menu-open {
          overflow: hidden;
        }
      `}</style>

      <div className="navbar-container px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 py-4 md:py-5 lg:py-6">
        <button
          className={`hamburger ${isOpen ? "active" : ""} ${!isHeroVisible ? "hidden" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="nav-links">
          <li onClick={closeMenu}>Home</li>
          <li onClick={closeMenu}>About Us</li>
          <li onClick={closeMenu}>Custom Service</li>
          <li onClick={closeMenu}>Pricing</li>
          <li onClick={closeMenu}>Contact</li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Mobile Menu - NOT full viewport */}
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