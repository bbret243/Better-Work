// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css'; // Styles specific to the header component

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_left">
          <ul className="header_left_list">
            <li className="header_left_list_item">
              <Link to="/find-talent">Find Talent</Link>
            </li>
            <li className="header_left_list_item">
              <Link to="/find-work">Find Work</Link>
            </li>
            <li className="header_left_list_item">
              <Link to="/why-betterwork">Why BetterWork</Link> 
              
            </li>
            <li className="header_left_list_item">
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
