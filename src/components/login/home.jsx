import React, { useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import logo from './assets/helptrack.png';
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import googlePlayBadge from './assets/google-play-badge.png'; // Import Google Play badge image

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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            HelpTrack is your trusted partner for tracking and managing emergencies.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/History">History</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: JesiePusse@gmail.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HelpTrack. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          {/* Animated h1 */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome to HelpTrack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Your trusted partner for tracking and managing emergencies.
          </motion.p>
          {/* Google Play Install Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.example.helptrack" // Replace with your app's Google Play link
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlayBadge} // Use the Google Play badge image
                alt="Get it on Google Play"
                className="google-play-badge"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;