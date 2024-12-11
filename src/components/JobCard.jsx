// src/components/JobCard.jsx
import '../styles/JobCard.css';

const JobCard = (props) => {
  return (
    <div className="job-card">
      <h3>{props.job.title}</h3>
      <p>Description: {props.job.description}</p>
      <p>Budget: {props.job.budget}</p>
      <p>Created: {props.job.createdAt}</p>
      <p>Client ID: {props.job.clientId}</p>
      <p>ID: {props.job.id}</p>
    </div>
  );
};
JobCard.propTypes = {
  job : {
    title: PropTypes.string.isRequired
  }
}
export default JobCard;
