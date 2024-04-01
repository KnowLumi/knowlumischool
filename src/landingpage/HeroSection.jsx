import { heroImages } from "./landing_helpers";
import "./landing.css";
import {
  MdOutlineLocalLibrary,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IconButton, Button, Avatar, Carousel } from "@material-tailwind/react";
import rating from "../assets/rating.png";
const HeroSection = () => {
  return (
    <div className="w-full relative flex flex-wrap font-archivo justify-between bg-[#F7F7F7]">
      <svg
        width="1279"
        height="123"
        viewBox="0 0 1279 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-[10] bottom-36 w-full hidden md:flex"
      >
        <path
          d="M-69 122.5H617C635.778 122.5 651 107.278 651 88.5V67.75V35C651 16.2223 666.222 1 685 1H1001.5H1352"
          stroke="black"
          strokeOpacity="0.5"
        />
      </svg>
      <i className="slider-anime w-7 h-5 text-white z-10 p-1.5 flex justify-center items-center rounded-full bg-[#88DB1B] absolute bottom-[8.5rem] translate-x-[88px]">
        <MdKeyboardDoubleArrowRight />
      </i>
      <div className="w-full md:w-fit flex flex-col items-center md:items-start p-4 ml-0 md:ml-16 mt-12">
        <div className="flex flex-col md:items-end herogradient p-4 rounded-2xl">
          <span className="font-medium text-3xl md:text-6xl">
            Transform dreams
          </span>
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-0">
              <span className=" bg-black lineanime"></span>
              <IoArrowForwardSharp className="h-8 w-8 text-black -translate-x-2" />
            </div>
            <span className="font-medium text-3xl md:text-6xl">
              into reality
            </span>
          </div>
        </div>
        <div className="flex flex-col font-semibold text-sm mt-8">
          <span className="uppercase text-gray-600">
            Unlock Your Potential with Knowlumi -<br />
            <span className="textanime"> A Parallel Education System </span>
            for Dreamers
          </span>
        </div>
        <span className="text-left mt-8">
          Connect with seasoned mentors, access top-notch resources, and{" "}
          <br className="hidden md:inline" />
          join a community where individual success fuels collective growth.
        </span>
        <Button className="font-archivo text-xs bg-black hover:bg-[#F7F7F7] hover:border hover:border-black py-1.5 pr-1.5 pl-6 mt-12 gap-2 text-[#F7F7F7] hover:text-black font-medium md:text-lg flex items-center w-fit rounded-full">
          get started
          <i className="bg-gray-800 p-1 rounded-full">
            <IoArrowForwardSharp size={20} className="text-white -rotate-45" />
          </i>
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
          <span className="font-medium text-[10px] md:text-lg">
            204 Reviews
          </span>
          {/* <Rating
            unratedColor="#88DB1B"
            ratedColor="#88DB1B"
            value={4}
            readonly
            className="w-14 h-2.5"
          /> */}
          <img src={rating} className="w-14 md:w-24 h-2.5 md:h-5" alt="" />
          <span className="font-medium text-[10px] md:text-lg">4.7</span>
        </div>
        <span className="hidden z-20 md:block mt-12 text-[7.5rem] font-medium text-[#E7E7E7] opacity-65">
          KnowLumi
        </span>
      </div>
      <Carousel
        autoplayDelay={2000}
        loop
        prevArrow={({ handlePrev }) => (
          <i className="hidden" onClick={handlePrev}></i>
        )}
        nextArrow={({ handleNext }) => (
          <i className="hidden" onClick={handleNext}></i>
        )}
        className="relative z-20 w-full md:w-[38rem] h-full md:mr-3"
        transition={{ ease: "easeIn" }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-[41%] md:bottom-[31%] left-[40%] md:left-[35%] z-50  flex -translate-x-2/4 gap-1">
            {new Array(length).fill("").map((_, i) => {
              return (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-6 bg-white" : "w-3 bg-white/50"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                  }}
                />
              );
            })}
          </div>
        )}
      >
        {heroImages.map((item, index) => (
          <div
            key={index}
            className="bg-cover relative flex flex-col gap-4 mx-6 md:mx-0 justify-end items-center bg-center object-cover rounded-3xl h-96 md:h-[45.5rem] my-12 w-80 md:w-[38rem] pb-6"
            style={{ backgroundImage: `url('${item.main}')` }}
          >
            <div className="flex flex-col items-start gap-4">
              <div className=" backdrop-blur-lg w-40 md:w-60 rounded-xl flex p-3 items-center">
                <img
                  src={item.sub}
                  className="w-12 h-12 md:w-24 md:h-24 rounded-xl"
                  alt=""
                />
                <div className="flex flex-col justify-center ml-3">
                  <span className="text-white text-sm font-medium tracking-wider">
                    {item.title}
                  </span>
                </div>
              </div>
              {/* place rectangle here */}
              <div className="rectangle w-[18.4rem] md:w-[31rem] h-[6.25rem] md:h-36 z-40 p-2 bg-cover object-cover flex flex-col justify-evenly items-start">
                <div className="w-full z-10 flex items-center gap-3">
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
                <div className="flex">
                  <div className="md:w-56 h-full md:h-12">
                    <Button
                      variant="outlined"
                      className=" capitalize font-archivo text-black p-1 border-gray-300  flex w-fit justify-end gap-3 items-center rounded-full"
                    >
                      <span className="font-medium text-[8px] md:text-xs">
                        Explore our programs
                      </span>
                      <IconButton className="bg-gray-200 border p-0 w-4 h-4 md:w-7 md:h-7 border-white rounded-full">
                        <IoArrowForwardSharp className="text-black -rotate-45 w-1.5 h-1.5 md:w-3.5 md:h-3.5" />
                      </IconButton>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
