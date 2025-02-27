import React, { useState } from "react";
import "./home.css";
import logo from './assets/helptrack.png';
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const [notifications, setNotifications] = useState([]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Website Logo" className="logo-image" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"><FaBars /></span>
      </div>

      {/* Navigation links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/History" onClick={toggleMenu}>
            HISTORY
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/profile">
            <FaUser /> PROFILE
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/alert" className="emergency-button">
            <FaBell /> Alerts ({notifications.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
