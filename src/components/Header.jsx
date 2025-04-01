import React, { useContext } from "react";
import UserContext from "../contexts/UserContextBase";
import { useNavigate, NavLink } from "react-router-dom";
import Button from "./Button";
import "../styles/Header.css";
import runprepperLogo from "../assets/runprepperlogo.svg";

const Header = () => {
  const { isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const Logout = () => {
    sessionStorage.removeItem("token");
    setUser({ username: null });
    setIsLoggedIn(false);
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
        {!isLoggedIn && (
          <nav className="site-header__nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-header__link active" : "site-header__link"
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-header__link active" : "site-header__link"
              }
              to="/register"
            >
              Register
            </NavLink>
          </nav>
        )}
        {isLoggedIn && (
          <nav className="site-header__nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-header__link active" : "site-header__link"
              }
              to="/create-path"
            >
              Map Path
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-header__link active" : "site-header__link"
              }
              to="/account"
            >
              Account
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-header__link active" : "site-header__link"
              }
              to="/user-paths"
            >
              User Paths
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "site-header__link active" : "site-header__link"
              }
              to="/profile"
            >
              Profile
            </NavLink>
            <Button
              className={({ isActive }) =>
                isActive ? "site-header__link active" : "site-header__link"
              }
              onClick={Logout}
              text={"Logout"}
            />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;