// src/components/MainContent.jsx
import React from 'react';
import '../styles/MainContent.css';
import GetStarted from './GetStarted';



const MainContent = () => {
  return (
    <main className="main-content">
      <div className="hero-section">
        <h1>Find the best freelance talent, fast</h1>
        <p>Your complete work marketplace that connects clients and freelancers worldwide.</p>
        <GetStarted />
      </div>
    </main>
  );
};

export default MainContent;
