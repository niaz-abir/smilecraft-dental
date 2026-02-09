import React, {  useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading jobs...</p>;
    return (
      <div className='mt-14'>
        <h1 className='text-center font-bold text-2xl mb-8 mt-4'>Our latest job</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {jobs?.map((job) => (
            <JobCard key={job?._id} job={job} />
          ))}
        </div>
      </div>
    );
};

export default HotJobs;