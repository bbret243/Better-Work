// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import '../styles/HomePage.css'; // Custom styles for the homepage

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
