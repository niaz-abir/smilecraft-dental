import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import AboutMe from './AboutMe';
import ServicesSection from './Service';
import ClearAlignerSection from './ClearAlignerSection';
import FAQ from './Faq';
import ContactUs from './ContactUs';
import Testimonials from './Testimonial';
import ChooseUs from './ChooseUs';

const MainHome = () => {

    // const jobPromise = fetch("http://localhost:3000/jobs").then(res=>res.json())
    
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <ServicesSection/>
            <ClearAlignerSection/>
            <Testimonials/>
            <ChooseUs/>
            <FAQ/>
            <ContactUs/>

           
        </div>
    );
};

export default MainHome;