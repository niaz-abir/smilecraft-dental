import React from 'react';
import { NavLink } from 'react-router';

const Banner = () => {
    return (
      <div className="relative max-w-8xl mx-auto  h-screen  text-white overflow-hidden mr-2">
        <div className="absolute inset-0 flex  justify-center">
          <img
            src="https://i.pinimg.com/1200x/88/87/d5/8887d5a4eb5cd211b4d26c3ec636b397.jpg"
            alt="Background Image"
            className="object-cover object-center  w-full h-full   "
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-md "></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome To Best Dental Clinic In Your City!
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <div className='flex justify-center'>
            <NavLink
             to="/appointment"
    
              className="p-2 flex items-center gap-2 text-[20px] lg:w-full bg-gradient-to-r from-[#2D7699] to-[#274a5b]  w-64 text-white rounded md:border-0"
            >
              Make Appointment
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Banner;