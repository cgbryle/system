import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import History from './components/login/History';
import HomePage from './components/login/home';
import Login from './components/login/signin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />} />
        <Route path="/History" element={isAuthenticated ? <History /> : <Navigate to="/signin" />} />
        <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> {/* Pass the function here */}
      </Routes>
    </Router>
  );
}

export default App;
