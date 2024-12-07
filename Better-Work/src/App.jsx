// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindTalent from './pages/FindTalent';
import FindWork from './pages/FindWork';
import HomePage from './pages/HomePage';  // Import HomePage
import WhyBetterWork from './pages/WhyBetterWork';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-talent" element={<FindTalent />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/why-betterwork" element={<WhyBetterWork />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
