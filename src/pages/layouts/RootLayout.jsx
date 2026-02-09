import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
      <div className="max-w-8xl  mx-auto bg-[#d5e4eb] ">
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </div>
    );
};

export default RootLayout;