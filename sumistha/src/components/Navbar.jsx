import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Marketplace Logo" className="logo-img" />
        <span className="logo-text">Marketplace</span>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search for anything..."
          className="search-input"
        />
      </div>

      <div className="navbar-right">
        <button className="nav-btn">Login</button>
        <button className="nav-btn">Register</button>
        <button className="post-btn">+ Post Ad</button>
      </div>
    </nav>
  );
}
