import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <h1 className="site-header__title">RunPrepper</h1>
        <nav className="site-header__nav">
          <a href="#" className="site-header__link">Home</a>
          <a href="#" className="site-header__link">My sessions</a>
          <a href="#" className="site-header__link">Profile</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;