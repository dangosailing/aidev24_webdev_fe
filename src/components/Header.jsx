import React, {useContext} from "react";
import UserContext from "../contexts/UserContextBase";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import "../styles/Header.css";

const Header = () => {
  const { isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate()

  const Logout = () => {
    sessionStorage.removeItem('token')
    setUser({ username: null })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <header className="site-header">
      <div className="site-header__container">
        <h1 className="site-header__title">RunPrepper</h1>
        {!isLoggedIn && (
          <nav className="site-header__nav">
            <Link className={"site-header__link"} to="/login">
              Login
            </Link>
            <Link className={"site-header__link"} to="/register">
              Register
            </Link>
          </nav>
        )}
        {isLoggedIn && (
          <nav className="site-header__nav">
            <Link className={"site-header__link"} to="/create-path">
              Map Path
            </Link>
            <Link className={"site-header__link"} to="/account">
              Account
            </Link>
            <Link className={"site-header__link"} to="/user-paths">
              User Paths
            </Link>
            <Link className={"site-header__link"} to="/profile">
              Profile
            </Link>
            <Button className={"site-header__link"} onClick={Logout} text={"Logout"}/>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
