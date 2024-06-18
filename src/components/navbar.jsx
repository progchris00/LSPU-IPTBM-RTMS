import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import OpenMenu from "../assets/images/open-menu.svg";
import CloseMenu from "../assets/images/close-menu.svg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <header>
        <div className="nav-wrapper">
          <div className="logo-container">
            <img src={Logo} alt="LSPU IPTBM Logo" id="nav-logo" />
            <h1 className="nav-logoname">LSPU IPTBM</h1>
          </div>
          <nav onClick={this.handleClick}>
            <div id="menu">
              <img
                src={this.state.clicked ? CloseMenu : OpenMenu}
                alt="hamburger-menu"
                id="menu-icon"
              />
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About-us">About us</Link>
              </li>
              <li>
                <Link to="/Technologies">Technologies</Link>
              </li>
              <li>
                <Link to="/Contact-us">Contact us</Link>
              </li>
              <div className="mobile-auth">
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/sign-up">Sign Up</Link>
              </div>
            </ul>
            <div className="auth-buttons">
              <Link to="/auth/login" className="ghost-button">
                Login
              </Link>
              <Link to="/auth/sign-up" className="solid-button">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
