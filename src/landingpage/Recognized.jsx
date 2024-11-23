import React from 'react';
import recog1 from "../assets/startupindia.png";
import recog2 from "../assets/startupmission.png";


const Recognized = () => {
  return (
    <div className="w-full flex items-center justify-center mb-12">
      <div className="bg-white rounded-2xl w-full max-w-5xl flex flex-col items-center py-8 overflow-hidden">
        <span className="font-medium text-lg mb-6">Recognized by</span>
        <div className="w-full overflow-hidden">
          <div className="flex animate-marquee">
            <img src={recog1} className="h-20 md:h-28 lg:h-36 mx-12" alt="Startup India logo" />
            <img src={recog2} className="h-20 md:h-28 lg:h-36 mx-12" alt="Startup Mission logo" />
            <img src={recog1} className="h-20 md:h-28 lg:h-36 mx-12" alt="Startup India logo" />
            <img src={recog2} className="h-20 md:h-28 lg:h-36 mx-12" alt="Startup Mission logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognized;

