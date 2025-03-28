import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
      </div>
      <p>© {new Date().getFullYear()} RunPrepper. All rights reserved.</p>
    </footer>
  );
};

export default Footer;