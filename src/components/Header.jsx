import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContextBase";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "./Button";
import "../styles/Header.css";

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
        <h1 className="site-header__title">RunPrepper</h1>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {!isLoggedIn && (
          <nav className={`site-header__nav ${menuOpen ? "open" : ""}`}>
            <NavLink className="site-header__link" to="/login">Login</NavLink>
            <NavLink className="site-header__link" to="/register">Register</NavLink>
          </nav>
        )}
        {isLoggedIn && (
          <nav className={`site-header__nav ${menuOpen ? "open" : ""}`}>
            <NavLink className="site-header__link" to="/create-path">Map Path</NavLink>
            <NavLink className="site-header__link" to="/account">Account</NavLink>
            <NavLink className="site-header__link" to="/user-paths">User Paths</NavLink>
            <NavLink className="site-header__link" to="/profile">Profile</NavLink>
            <Button className="site-header__link" onClick={Logout} text={"Logout"} />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;