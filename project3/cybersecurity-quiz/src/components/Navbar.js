import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo Section */}
      <div className="logo">
        <span>🔐 CyberSafe</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>

      {/* Secure Access Button */}
      <motion.button
        className="secure-btn"
        whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00ffff" }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/login">🔒 Secure Access</Link>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
