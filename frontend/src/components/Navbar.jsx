import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Portfolio
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;