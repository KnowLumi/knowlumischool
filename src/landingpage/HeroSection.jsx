import heroline from "./hero_line.png";
import { heroImages } from "./landing_helpers";
import { useRef, useState } from "react";
import "./landing.css";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import {
  IconButton,
  Button,
  Avatar,
  Rating,
  Carousel,
} from "@material-tailwind/react";
const HeroSection = () => {
  const navRef = useRef(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full relative flex flex-wrap font-archivo justify-between bg-[#F7F7F7]">
      <img src={heroline} alt="" className="absolute z-20 bottom-16" />
      <div className="w-full md:w-fit flex flex-col items-center md:items-start p-4 ml-0 md:ml-16 mt-12">
        <div className="flex flex-col md:items-end">
          <span className="font-medium text-3xl md:text-6xl">
            Transform dreams
          </span>
          <div className="flex md:justify-between w-full items-center">
            <IoArrowForwardSharp className="h-8 w-8" />
            <span className="font-medium text-3xl md:text-6xl">
              into reality
            </span>
          </div>
        </div>
        <div className="flex flex-col font-semibold text-sm mt-8">
          <span className="uppercase text-gray-600">
            Unlock Your Potential with Knowlumi -<br />
            <span className="text-black"> A Parallel Education System </span>
            for Dreamers
          </span>
        </div>
        <span className="text-left mt-8">
          Connect with seasoned mentors, access top-notch resources, and{" "}
          <br className="hidden md:inline" />
          join a community where individual success fuels collective growth.
        </span>
        <Button className="font-archivo bg-black p-1.5 mt-12 gap-2 text-[#F7F7F7] font-semibold  text-lg flex items-center w-fit rounded-full">
          get started
          <IconButton className="bg-gray-800 p-1 rounded-full">
            <IoArrowForwardSharp size={20} className="text-white -rotate-45" />
          </IconButton>
        </Button>
        <div className="flex mt-6 md:mt-12 items-center gap-4">
          <div className="flex items-center -space-x-4">
            {new Array(3).fill("").map((_, i) => (
              <Avatar
                variant="circular"
                key={i}
                size="sm"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            ))}
          </div>
          <span className="font-medium text-lg">204 Reviews</span>
          <Rating
            unratedColor="#88DB1B"
            ratedColor="#88DB1B"
            value={4}
            readonly
          />
          <span className="font-medium text-lg">4.7</span>
        </div>
        <span className="hidden md:block mt-12 text-[7.5rem] font-medium text-[#E7E7E7] opacity-65">
          KnowLumi
        </span>
      </div>
      <Carousel
        prevArrow={({ handlePrev }) => <i></i>}
        nextArrow={({ handleNext }) => <i></i>}
        className="w-full md:w-[33.438rem] h-full"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div
            ref={navRef}
            className="absolute bottom-1/3 left-1/3 z-50 flex -translate-x-2/4 gap-1"
          >
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-6 bg-white" : "w-3 bg-white/50"
                }`}
                onClick={() => {
                  navRef.current = i;
                  console.log(navRef.current);
                  setActiveIndex(i);
                }}
              />
            ))}
          </div>
        )}
      >
        {heroImages.map((item, index) => (
          <div
            key={index}
            className="bg-cover relative  flex flex-col gap-4 mx-6 md:mx-0 justify-end items-center bg-center object-cover rounded-3xl h-96 md:h-[40.125rem] my-12 md:w-[33.438rem] pb-6"
            style={{ backgroundImage: `url('${item.main}')` }}
          >
            <div className="absolute w-20 h-64  rounded-ss-3xl rounded-ee-3xl top-0 left-0 bg-[#F7F7F7]"></div>
            <div className="w-6 h-6 absolute top-0 left-20 piece-1 rounded-ss-full"></div>
            <div className="w-6 h-6 absolute top-64 left-0 piece-1 rounded-ss-full"></div>
            <div className="flex flex-col items-start gap-4">
              <div className="h-32 w-56 backdrop-blur-lg rounded-xl flex pl-3 items-center">
                <img src={item.sub} className="w-24 h-24 rounded-xl" alt="" />
                <div className="flex flex-col justify-center ml-3">
                  <span className="text-white text-sm font-medium tracking-wider">
                    {item.title}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="bg-[#F7F7F7] w-72 md:w-[30.5rem] h-24 rounded-t-3xl rounded-ee-3xl flex justify-center items-center p-6">
                  <div className="w-full z-10 flex items-center gap-3">
                    <i className="rounded-full bg-[#88DB1B] p-2.5">
                      <MdOutlineLocalLibrary className="text-white w-4 h-4" />
                    </i>
                    <div className="flex flex-col items-start text-black">
                      <span className="font-semibold text-sm uppercase">
                        {item.title}
                      </span>
                      <span className="font-light text-sm">{item.desc}</span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-[#F7F7F7] w-56 z-10 h-12 rounded-es-3xl">
                    <Button
                      variant="outlined"
                      className="bg-white capitalize  font-archivo text-black py-0 px-1 border-gray-300 ml-2 flex w-fit justify-end gap-3 items-center rounded-full"
                    >
                      <span className="font-medium text-xs">
                        Explore our programs
                      </span>
                      <IconButton className="bg-gray-200 border border-white rounded-full">
                        <IoArrowForwardSharp
                          size={20}
                          className="text-black -rotate-45"
                        />
                      </IconButton>
                    </Button>
                  </div>
                  <div className="bg-[#F7F7F7] w-[2rem] -translate-x-4 h-12 rounded-b-3xl -skew-x-12 flex justify-end items-end"></div>
                  <div className="w-6 h-6 -translate-x-4 rounded-ss-3xl piece-1"></div>
                  {/* <div className="w-64 h-20 bg-black"></div> */}
                </div>
              </div>
            </div>

            <div className="w-6 h-6 absolute right-0 bottom-12 rounded-ee-3xl piece-2"></div>
            <div className="w-56 h-12 absolute bottom-0 right-0 rounded-ss-3xl  bg-[#F7F7F7]"></div>
            <div className="w-56 h-12 absolute bottom-0 right-3 rounded-ss-3xl -skew-x-12 bg-[#F7F7F7]"></div>
            <div className="w-6 h-6 absolute bottom-0 right-[14.75rem] rounded-ee-3xl piece-3"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
