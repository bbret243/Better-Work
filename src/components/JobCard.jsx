// src/components/JobCard.jsx
import React from 'react';
import '../styles/JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Description: {job.description}</p>
      <p>Budget: {job.budget}</p>
      <p>Created: {job.createdAt}</p>
      <p>Client ID: {job.clientId}</p>
      <p>ID: {job.id}</p>
    </div>
  );
};

export default JobCard;
