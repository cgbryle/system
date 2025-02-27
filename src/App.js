import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import History from './components/login/History';
import HomePage from './components/login/home';
import Login from './components/login/signin';
import Alert from './components/login/alert';
import MapView from './components/MapView'; // Import MapView component

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
        <Route path="/alert" element={isAuthenticated ? <Alert /> : <Navigate to="/signin" />} />
        <Route path="/map" element={isAuthenticated ? <MapView /> : <Navigate to="/signin" />} /> {/* Add MapView Route */}
        <Route path="/signin" element={<Login setIsAuthenticated={setIsAuthenticated} />} /> {/* Pass function */}
      </Routes>
    </Router>
  );
}

export default App;

