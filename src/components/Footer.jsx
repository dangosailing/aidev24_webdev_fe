import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">About</a>
        <a href="/login">Privacy</a>
        <a href="/">Contact</a>
      </div>
      <div className="footer-socials">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/instagram.svg" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/facebook.svg" alt="Facebook" className="social-icon" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} RunPrepper. All rights reserved.</p>
    </footer>
  );
};

export default Footer;