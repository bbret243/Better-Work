// src/pages/FindWork.jsx
import React, { useEffect, useState } from 'react';
import { getJobs } from '../services/apiService';
import JobCard from '../components/JobCard';
import useFetch from '../hooks/useFetch';

const FindWork = () => {
  const { data: jobs, loading, error } = useFetch(getJobs);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="find-work">
      <h2>Find Work</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FindWork;
