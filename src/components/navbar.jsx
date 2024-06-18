import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import HamMenu from "../assets/images/ham-menu.svg";

function Navbar() {
  return (
    <header>
      <div className="nav-wrapper">
        <div className="logo-container">
          <img src={Logo} alt="LSPU IPTBM Logo" id="nav-logo" />
          <h1 className="nav-logoname">LSPU IPTBM</h1>
        </div>
        <nav>
          <div className="menu">
            <img src={HamMenu} alt="" id="menu-icon" />
          </div>
          <ul className="nav-menu">
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

export default Navbar;
