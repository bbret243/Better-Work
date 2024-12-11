// src/components/GetStarted.jsx
import { useNavigate } from 'react-router-dom';
import '../styles/GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  return (
    <div className="get-started">
      <button className="btn btn-get-started" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
