import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <h1 className="site-header__title">RunPrepper</h1>
        <nav className="site-header__nav">
          <a href="Login" className="site-header__link">Login</a>
          <a href="Register" className="site-header__link">Sign Up</a>
          <a href="/" className="site-header__link">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;