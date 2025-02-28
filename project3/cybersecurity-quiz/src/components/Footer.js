import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <h2>CyberSafe Security</h2>
        <p>
          Stay safe online, learn cybersecurity, and protect your digital life.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/amitcode0"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Twitter
          </a>
        </div>
      </div>
      <p className="copyright">
        © 2025 The Data Whisperers | All Rights Reserved
      </p>
    </motion.footer>
  );
};

export default Footer;
