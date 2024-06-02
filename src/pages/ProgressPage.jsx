import Footer from "../landingpage/Footer";
import Navigation from "../landingpage/Navigation";
import { MdHdrStrong } from "react-icons/md";
import "../landingpage/landing.css";
import { Button, Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { skills } from "./helpers/fundamentalhelpers";
const ProgressPage = () => {
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <Navigation />
      <div className="flex flex-col mx-6 md:mx-20 gap-8 mt-20">
        <h1 className="font-medium text-4xl md:text-6xl">My Progress</h1>
        <p className="md:w-[47.625rem] text-xs md:text-sm tracking-wider">
          Monitor your journey from fundamentals to master tracks and
          placements. Track your progress and milestones as you advance towards
          your career goals with KnowLumi
        </p>
        <div className="flex flex-col">
          <div className="rounded-2xl bg-white mb-12 md:w-80 w-[19.75rem] flex flex-col pb-5 px-5">
            <div className="relative w-[15.5rem] md:w-64 h-[7.75rem] md:h-[6.25rem] bg-[#88DB1B66] mt-8 mb-4 md:mt-9 ml-3 rounded-xl">
              <div className="course1 absolute flex justify-end items-start -translate-x-4 -translate-y-4 bg-contain bg-no-repeat w-72 md:w-72 h-[11.375rem] md:h-[7.25rem]">
                <Button className="flex justify-around items-center m-2 py-1 px-1.5 gap-2 bg-[#FFFFFF33] font-archivo text-black opacity-60 rounded-full tracking-wider">
                  <MdHdrStrong className="w-6 h-3 p-0 text-[#FFFFFFCC]" />
                  <span className="text-[#FFFFFFCC]">NEW</span>
                </Button>
              </div>
            </div>
            <span className="font-normal text-[16px] tracking-wide mt-5">
              Fundamentals
            </span>
            <span className="text-[#01010199] font-light text-xs my-4">
              Learn the fundamentals of the tech future
            </span>
            <div className="flex gap-4 items-center">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex items-center md:justify-between"
                >
                  <div className="flex flex-col items-center gap-2">
                    <i className="flex justify-center items-center w-5 h-5 md:w-8 md:h-8 bg-[#DFDFD799]"></i>
                    <span className="font-light tracking-wider text-[10px] md:text-xs w-14 text-center">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 my-5">
            <span className="text-[#696D6E] text-xs font-normal">10% Complete</span>
              <Progress value={25} size="sm" color="indigo"/>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3 w-full">
              <Link to="/course:id" className="w-full">
                <Button className="bg-[#88DB1B] w-full rounded-lg text-white capitalize font-archivo font-semibold text-sm py-2.5 px-7">
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPage;
