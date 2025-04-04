import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContextBase";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "./Button";
import "../styles/Header.css";
import runprepperLogo from "../assets/runprepperlogo.svg";

const Header = () => {
  const { isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const Logout = () => {
    sessionStorage.removeItem("token");
    setUser({ username: null });
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__branding">
          <NavLink to="/">
            <img
              src={runprepperLogo}
              alt="RunPrepper Logo - A logo representing the RunPrepper application"
              className="site-header__logo"
            />
          </NavLink>
        </div>

        <nav className={`site-header__nav ${menuOpen ? "open" : ""}`}>
          {!isLoggedIn && (
            <>
              <NavLink data-testid="test-login" className="site-header__link" to="/login">Login</NavLink>
              <NavLink className="site-header__link" to="/register">Register</NavLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLink className="site-header__link" to="/create-path">Map Path</NavLink>
              <NavLink data-testid="test-account" className="site-header__link" to="/account">Account</NavLink>
              <NavLink className="site-header__link" to="/user-paths">User Paths</NavLink>
              <NavLink data-testid="test-profile" className="site-header__link" to="/profile">Profile</NavLink>
              <Button onClick={Logout} text={"Logout"} />
              <NavLink className="site-header__link" to="/profile">Profile</NavLink>
              <Button id="test-logout" onClick={Logout} text={"Logout"} />
            </>
          )}
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;