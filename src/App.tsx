import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import BusinessPage from './pages/BusinessPage';
import BusinessDetailsPage from './pages/BusinessDetailsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/business/:id" element={<BusinessDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;