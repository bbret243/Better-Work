// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/bwlogo1.png';
import { useUser } from '../hooks/useUser'
import '../styles/Navbar.css';

const Navbar = () => {
  const [user, setUser] = useUser();

  const onLogoutClick = () => {
    setUser(null)
  }

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
        {!user?.email && <li><button className="btn btn-login"><Link to="/login">Log In</Link></button></li>}
        {!user?.email && <li><button className="btn btn-signup"><Link to="/signup">Sign Up</Link></button></li>}
        {user?.email && <li><button onClick={onLogoutClick} className="btn btn-login">Sign Out</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
