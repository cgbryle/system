import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './signin.css';
import logo from './assets/helptrack.png'; // Import your logo image
import backgroundImage from './assets/qwe.jpg'; // Import your background image

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if the user is already authenticated on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      navigate('/'); // Redirect to home page if authenticated
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (email === '123@yahoo.com' && password === '123') {
      sessionStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true); // Update the authentication state
      navigate('/'); // Redirect to home page
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animate to visible state
        transition={{ duration: 0.5 }} // Animation duration
      >
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
          animate={{ opacity: 1, scale: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        />

        <h1>Login</h1>
        {error && (
          <motion.p
            className="error-message"
            initial={{ opacity: 0, y: -20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animate to visible state
            transition={{ duration: 0.3, delay: 0.2 }} // Animation duration and delay
          >
            {error}
          </motion.p>
        )}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
        >
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
          >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
          >
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }} // Hover animation
            whileTap={{ scale: 0.95 }} // Click animation
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
          >
            Login
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;