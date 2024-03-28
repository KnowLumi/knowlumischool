import hero1 from "../assets/hero1.jpg";
import img1 from "../assets/hero_img_1.jpg";
import heroline from "./hero_line.png";
import "./landing.css";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IconButton, Button, Avatar, Rating } from "@material-tailwind/react";
const HeroSection = () => {
  return (
    <div className="w-full  relative flex font-archivo justify-between bg-[#F7F7F7]">
      <img src={heroline} alt="" className="absolute z-20 bottom-16" />
      <div className="flex flex-col ml-16 mt-12">
        <div className="flex flex-col items-end">
          <span className="font-medium text-6xl">Transform dreams</span>
          <div className="flex justify-between w-full items-center">
            <IoArrowForwardSharp className="h-8 w-8" />
            <span className="font-medium text-6xl"> into reality</span>
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
          Connect with seasoned mentors, access top-notch resources, and <br />{" "}
          join a community where individual success fuels collective growth.
        </span>
        <Button className="font-archivo bg-black p-1.5 mt-12 gap-2 text-[#F7F7F7] font-semibold  text-lg flex items-center w-fit rounded-full">
          get started
          <IconButton className="bg-gray-800 p-1 rounded-full">
            <IoArrowForwardSharp size={20} className="text-white -rotate-45" />
          </IconButton>
        </Button>
        <div className="flex mt-12 items-center gap-4">
          <div className="flex items-center -space-x-4">
            <Avatar
              variant="circular"
              size="sm"
              alt="user 1"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <Avatar
              variant="circular"
              size="sm"
              alt="user 2"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            />
            <Avatar
              variant="circular"
              size="sm"
              alt="user 3"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
            />
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
        <span className="mt-12 text-[7.5rem] font-medium text-[#E7E7E7] opacity-65">
          KnowLumi
        </span>
      </div>

      <div
        className="bg-cover relative mr-16 flex flex-col gap-4 justify-end items-center bg-center rounded-3xl h-[40.125rem] my-12 w-[33.438rem] pb-6"
        style={{ backgroundImage: `url('${hero1}')` }}
      >
        <div className="absolute w-20 h-64  rounded-ss-3xl rounded-ee-3xl top-0 left-0 bg-[#F7F7F7]"></div>
        <div className="w-6 h-6 absolute top-0 left-20 piece-1 rounded-ss-full"></div>
        <div className="w-6 h-6 absolute top-64 left-0 piece-1 rounded-ss-full"></div>
        <div className="flex flex-col items-start gap-4">
          <div className="h-32 w-56 backdrop-blur-lg rounded-xl flex pl-3 items-center">
            <img src={img1} className="w-24 h-24 rounded-xl" alt="" />
            <div className="flex flex-col justify-between">
              <span className="text-white text-sm font-medium tracking-wider">
                Mentorship Magic
              </span>
              <span className="text-white text-sm font-medium tracking-wider">
                Mentorship Magic
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="bg-[#F7F7F7] w-[30.5rem] h-24 rounded-t-3xl rounded-ee-3xl flex justify-center items-center p-6">
              <div className="w-full z-10 flex items-center gap-3">
                <i className="rounded-full bg-[#88DB1B] p-2.5">
                  <MdOutlineLocalLibrary className="text-white w-4 h-4" />
                </i>
                <div className="flex flex-col items-start text-black">
                  <span className="font-semibold text-sm">
                    MENTORSHIP MAGIC{" "}
                  </span>
                  <span className="font-light text-sm">
                    Navigate challenges with experienced mentors cheering you on
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#F7F7F7] w-[13.5rem] z-10 h-12 rounded-es-3xl">
                <div className="bg-white ml-2 flex w-full justify-end gap-3 items-center rounded-full border-2">
                  <span className="font-medium text-xs">
                    Explore our programs
                  </span>
                  <IconButton className="bg-gray-200 border border-white rounded-full">
                    <IoArrowForwardSharp
                      size={20}
                      className="text-black -rotate-45"
                    />
                  </IconButton>
                </div>
              </div>
              <div className="bg-[#F7F7F7] w-[2rem] -translate-x-4 h-12 rounded-b-3xl -skew-x-12 flex justify-end items-end"></div>
              <div className="w-6 h-6  -translate-x-4 rounded-ss-3xl piece-1"></div>
              {/* <div className="w-64 h-20 bg-black"></div> */}
            </div>
          </div>
        </div>

        <div className="w-6 h-6 absolute right-0 bottom-12 rounded-ee-3xl piece-2"></div>
        <div className="w-56 h-12 absolute bottom-0 right-0 rounded-ss-3xl  bg-[#F7F7F7]"></div>
        <div className="w-56 h-12 absolute bottom-0 right-3 rounded-ss-3xl -skew-x-12 bg-[#F7F7F7]"></div>
        <div className="w-6 h-6 absolute bottom-0 right-[14.75rem] rounded-ee-3xl piece-3"></div>
      </div>
    </div>
  );
};

export default HeroSection;
