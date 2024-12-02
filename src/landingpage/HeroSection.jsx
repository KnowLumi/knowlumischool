import { heroImages } from "./landing_helpers";
import "./landing.css";
import {
  MdOutlineLocalLibrary,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { Button, Avatar } from "@material-tailwind/react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import rating from "../assets/rating.png";
const HeroSection = ({ scrollToIncluded }) => {
  return (
    <div className="w-full relative mt-10 md:mt-24 flex md:flex-row flex-col font-archivo justify-between bg-[#F7F7F7]">
      <svg
        width="1279"
        height="123"
        viewBox="0 0 1279 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-[10] bottom-24  w-full hidden md:flex"
      >
        <path
          d="M-69 122.5H617C635.778 122.5 651 107.278 651 88.5V67.75V35C651 16.2223 666.222 1 685 1H1001.5H1352"
          stroke="black"
          strokeOpacity="0.5"
        />
      </svg>
      <i className="slider-anime w-7 h-5 text-white z-10 p-1.5 flex justify-center items-center rounded-full bg-[#88DB1B] absolute bottom-[5.5rem] translate-x-[88px]">
        <MdKeyboardDoubleArrowRight />
      </i>
      <div className="w-full z-40 md:w-fit flex flex-col items-center md:translate-x-5 md:items-start p-4 ml-0 md:ml-16 mt-8">
        <div className="flex flex-col md:gap-9 md:w-[650px] md:h-[201px] md:items-start justify-center herogradient p-6 md:px-14 md:py-8 rounded-[28px]">
          <span className="font-medium text-2xl md:text-[50px]">
            Shape a Career Beyond
          </span>
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-0">
              <span className="bg-black lineanime"></span>
              <IoArrowForward className="h-7 md:h-10 w-7 md:w-10 text-black -translate-x-2" />
            </div>
            <span className="w-full font-medium text-2xl md:text-[50px] flex justify-start">
              Classroom
            </span>
          </div>
        </div>
        <div className="flex flex-col font-semibold text-sm mt-8">
          <span className="uppercase text-gray-600">
            Unlock Your Potential with KnowLumi School  -<br />
            <span className="textanime"> A Parallel Education System </span>
            For engineering students
          </span>
        </div>
        <span className="text-left mt-4 text-sm lg:text-lg">
        The subjects you're studying in college might not be enough to <br className="hidden md:inline" />
        build the career you're dreaming of. To achieve true success, <br className="hidden md:inline" />
        you need to go beyond the syllabus. That's where KnowLumi School comes in. 
           <br className="hidden md:inline" />
           <br className="hidden md:inline" />
          <strong>We help you learn what college doesn’t.</strong>
        </span>
        <Button
          onClick={scrollToIncluded}
          className="my-button font-archivo text-xs bg-black hover:bg-[#F7F7F7] hover:border hover:border-black py-1.5 pr-1.5 pl-6 mt-12 gap-2 text-[#F7F7F7] hover:text-black font-medium md:text-lg flex items-center w-fit rounded-full"
        >
          get started
          <i className="bg-gray-800 p-1 rounded-full">
            <MdArrowForward size={20} className="text-white icon" />
          </i>
        </Button>
        {/* <div className="flex flex-col md:flex-row mt-6 justify-between items-center gap-6 md:gap-12">
  <div className="flex flex-col items-center text-center text-xl md:text-3xl ">
    <h1 className="font-bold">Colleges</h1>
    <h1 className="text-2xl md:text-4xl text-[#88DB1B]">100+</h1>
  </div>
  <div className="flex flex-col items-center text-center text-xl md:text-3xl ">
    <h1 className="font-bold">Members</h1>
    <h1 className="text-2xl md:text-4xl text-[#88DB1B]">10,000+</h1>
  </div>
  <div className="flex flex-col items-center text-center text-xl md:text-3xl ">
    <h1 className="font-bold">Chapters</h1>
    <h1 className="text-2xl md:text-4xl text-[#88DB1B]">50+</h1>
  </div>
</div> */}
        {/* TODO need to remove below div when above code uncomment check the out*/}
        <div className="mt-6" />

        <span className="hidden z-20 md:block mt-5 text-[7.5rem] font-medium text-[#ECECEC]">
          KnowLumi
        </span>
      </div>
      <div className="relative z-20 bg-[#F7F7F7] w-full md:w-[535px] h-full md:mr-14 md:-translate-x-12">
        <Fade arrows={false} infinite autoplay duration={3000} easing="linear">
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
                      <a href="#explore" className="font-medium text-[8px] md:text-xs tracking-wide">
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
  );
};

export default HeroSection;
