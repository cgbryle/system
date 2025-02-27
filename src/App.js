import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import History from './components/login/History'; // Import History component
import HomePage from './components/login/home'; // Import HomePage component
import Login from './components/login/signin'; // Import Login component
import Alert from './components/login/alert'; // Import Alert component
import MapView from './components/MapView'; // Import MapView component
import Profile from './components/login/profile'; // Import Profile component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  // Handle successful login
  const handleLoginSuccess = () => {
    sessionStorage.setItem('isAuthenticated', 'true'); // Store auth status in sessionStorage
    setIsAuthenticated(true); // Update state to reflect the authenticated status
  };

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated'); // Clear auth status from sessionStorage
    setIsAuthenticated(false); // Update state to reflect the unauthenticated status
  };

  // ProtectedRoute component to simplify route protection
  const ProtectedRoute = ({ element: Element, ...rest }) => {
    return isAuthenticated ? <Element {...rest} /> : <Navigate to="/signin" />;
  };

  return (
    <Router>
      <Routes>
        {/* Protected routes */}
        <Route
          path="/"
          element={<ProtectedRoute element={HomePage} />}
        />
        <Route
          path="/history"
          element={<ProtectedRoute element={History} />}
        />
        <Route
          path="/home"
          element={<ProtectedRoute element={HomePage} />}
        />
        <Route
          path="/alert"
          element={<ProtectedRoute element={Alert} />}
        />
        <Route
          path="/map"
          element={<ProtectedRoute element={MapView} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={Profile} />}
        />

        {/* Sign-in route */}
        <Route
          path="/signin"
          element={
            isAuthenticated ? (
              <Navigate to="/" /> // Redirect to home if already authenticated
            ) : (
              <Login setIsAuthenticated={handleLoginSuccess} />
            )
          }
        />

        <Route
          path="/logout"
          element={
            <Navigate
              to="/signin"
              replace
              onClick={handleLogout} // Handle logout on navigation
            />
          }
        />

        {/* Fallback route for unknown paths */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/signin"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;