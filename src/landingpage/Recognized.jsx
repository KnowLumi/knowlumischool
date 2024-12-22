import React from "react";
import recog1 from "../assets/startupindia.png";
import recog2 from "../assets/startupmission.png";
import aboutbar from "../assets/about_bar1.png";

const Recognized = () => {
  return (
    <main>
      <div className="w-full flex items-center justify-center mb-12">
        <div className="bg-white rounded-2xl w-full max-w-5xl flex flex-col items-center py-8 overflow-hidden">
          <span className="font-medium text-lg mb-6">Recognized by</span>
          <div className="w-full overflow-hidden">
            <div className="flex justify-around md:justify-around">
              <img
                src={recog1}
                className="h-20 md:h-28 lg:h-36 md:mx-12"
                alt="Startup India logo"
              />
              <img
                src={recog2}
                className="h-20 md:h-28 lg:h-36 md:mx-12"
                alt="Startup Mission logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-start  bg-white mt-6">
        <img
          src={aboutbar}
          className="w-full md:w-fit h-8 md:h-16 -rotate-180"
          alt="Decorative bar"
        />
      </div>
    </main>
  );
};

export default Recognized;
