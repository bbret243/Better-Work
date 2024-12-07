// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bwlogo1.png';

import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo"/>
          </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/find-talent">Find Talent</Link></li>
        <li><Link to="/find-work">Find Work</Link></li>
        <li><button className="btn btn-login"><Link to="/login">Log In</Link></button></li>
        <li><button className="btn btn-signup"><Link to="/signup">Sign Up</Link></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
