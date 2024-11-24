import Lottie from "lottie-react";
import React from "react";
import animation from "./animation.json";
import Navigation from "../../landingpage/Navigation";
import Footer from "../../landingpage/Footer";
import { useEffect } from "react";
import { heroImages } from "../../landingpage/landing_helpers";
import {
  MdArrowForward,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowRight,
  MdOutlineLocalLibrary,
} from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { IoArrowForward } from "react-icons/io5";
import { Fade } from "react-slideshow-image";

export default function CommingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Navigation />
      <main className="lg:px-20 p-6">
        <div className="w-full relative flex md:flex-row flex-col py-20 font-archivo justify-between bg-[#F7F7F7]">
    
        <div className="w-full flex h-full flex-col items-center justify-center">
          <h3 className="max-w-lg lg:text-6xl text-4xl font-medium">Full-Stack Web Development with MERN Stack</h3>
        </div>
          <div className="relative z-20 bg-[#F7F7F7] w-full md:w-[535px] h-full md:mr-14 md:-translate-x-12">
            <Fade
              arrows={false}
              infinite
              autoplay
              duration={3000}
              easing="linear"
            >
              {heroImages.map((item, index) => (
                <div
                  key={index}
                  className="bg-cover relative flex flex-col gap-4 mx-6 md:mx-0 justify-end items-center bg-center object-cover rounded-3xl h-96 md:h-[40.125rem] my-12 w-80 md:w-[535px] pb-6"
                  style={{ backgroundImage: `url('${item.main}')` }}
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="rectangle w-[18.4rem] md:w-[31rem] h-[6.25rem] md:h-36 z-40 p-3 md:p-6 gap-2 bg-cover object-cover flex flex-col justify-between items-start">
                      <div className="w-full z-10 flex items-start gap-3">
                        <i className="rounded-full bg-[#88DB1B] p-2.5">
                          <MdOutlineLocalLibrary className="text-white w-4 h-4" />
                        </i>
                        <div className="flex flex-col items-start text-black text-wrap">
                          <span className="font-semibold text-[10px] md:text-sm uppercase">
                            {item.title}
                          </span>
                          <span className="font-light text-[10px] md:text-sm">
                            {item.desc}
                          </span>
                        </div>
                      </div>

                      <div className="md:w-56 flex">
                        <Button
                          variant="outlined"
                          className="my-button capitalize font-archivo text-black py-[3px] pr-[3px] pl-2 md:pl-[18px] border-gray-300 flex w-fit justify-end gap-3 items-center rounded-full"
                        >
                          <a
                            href="#explore"
                            className="font-medium text-[8px] md:text-xs tracking-wide"
                          >
                            Explore our programs
                          </a>
                          <i className="bg-gray-200 icon flex justify-center items-center border p-0 w-4 h-4 md:w-7 md:h-7 border-white rounded-full">
                            <MdArrowForward className="text-black" />
                          </i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </main>
    </main>
  );
}
