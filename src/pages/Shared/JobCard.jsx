import React from 'react';
import { Link } from 'react-router';

const JobCard = ({job}) => {

    const {title,category,location,jobType,description,company,company_logo,_id} = job
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={company_logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <div className="card-actions justify-start">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{location}</div>
            <div className="badge badge-outline">{company}</div>
            <div className="badge badge-outline">{jobType}</div>
          </div>

          <div className='mt-2'>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default JobCard;