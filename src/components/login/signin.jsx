import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if the user is already authenticated on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      
     navigate('/') // Redirect to home page if authenticated
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
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;