// src/components/TalentCard.jsx
import '../styles/TalentCard.css';

const TalentCard = ({ talent }) => {
  return (
    <div className="talent-card">
      <h3>{talent.name}</h3>
      <p>Skills: {talent.skills.join(', ')}</p>
      <p>Location: {talent.location}</p>
    </div>
  );
};

export default TalentCard;
