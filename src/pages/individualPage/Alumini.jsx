import React, { useState, useEffect } from 'react';
import mobileImage from "../../assets/Alumini/mentorMobile.avif";
import mobileDesktop from "../../assets/Alumini/mentorDesktop.avif";

const Alumini = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mentorImage = width < 768 ? mobileImage : width < 1024 ? mobileDesktop : mobileDesktop;

  return (
    <div className="w-full flex flex-col justify-center items-center my-10 md:my-28">
      <div className="container w-[90%] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold md:text-5xl my-10">
          Our Alumni Placed 
        </h1>
        <div className="w-full p-4 sm:p-6">
          <img
            src={mentorImage}
            alt="Alumni Companies"
            className="object-contain select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Alumini;
