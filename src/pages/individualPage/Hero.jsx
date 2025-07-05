import { Button } from "@material-tailwind/react";
import {
  MdHdrStrong,
  MdArrowForward,
  MdSlowMotionVideo,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import "../Fundamentals/fundamentals.css";
import learners from "../Fundamentals/Images/learners.png";
import bars from "../Fundamentals/Images/threebars.png";
const Hero = (props) => {
  const { tracks, id, course } = props;
  const location = useLocation();
  const isFundamentalsPath = location.pathname === "/fundamentals";
  return (
    <div className="md:mx-20 px-6 mt-24 gap-8 flex md:flex-row flex-col justify-around">
      <div className="flex flex-col gap-9">
        <div className="flex items-center w-fit bg-white rounded-full py-2 px-6 gap-4">
          <MdHdrStrong className="text-[#88DB1B]" />
          <span className="font-bold text-xs text-[#01010199]">
            COURSE
          </span>
        </div>
        <span
          className="font-medium text-[42px] text-left md:text-5xl tracking-wide max-w-[30.25rem]"
        >
          {course.title}
        </span>
        {!isFundamentalsPath && (
          <span className="font-extrabold uppercase text-[#88DB1B] text-lg tracking-wider text-left" >
            {course.bold}
          </span>
        )}
        <div className="flex flex-col">
          <p className="md:w-[27.5rem] font-light text-lg text-left">{course.description}</p>
          {/* {isFundamentalsPath && (
            <>
              <div className="flex gap-3.5 items-center mt-5">
                <MdOutlineLocalLibrary className="w-5 h-5 text-[#88DB1B]" />
                <span className="font-light text-sm">Personal Mentorship</span>
              </div>
              <div className="flex gap-3.5 items-center mt-5">
                <MdFreeCancellation className="w-5 h-5 text-[#88DB1B]" />
                <span className="font-light text-sm">
                  Weekly Review Meetings
                </span>
              </div>
            </>
          )} */}
        </div>
        {isFundamentalsPath && (
          <>
            <div className="flex rounded-2xl border border-[#88DB1B] py-4 px-7 w-80 md:w-[30.75rem] justify-between">
              {tracks[id].skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex items-center justify-between"
                >
                  <div className="flex flex-col items-center rounded-xl bg-[#F7F7F7] gap-2  p-1 md:p-4 ">
                    <img loading="lazy" src={skill.image} alt="" className="flex justify-center items-center w-5 h-5 md:w-8 md:h-8"/>
                    <span className="font-light tracking-wider text-[10px] md:text-xs w-14 text-center">
                      {skill.skill}
                    </span>
                  </div>
                  <span
                    className={`${
                      index === tracks[id].skills.length - 1
                        ? "hidden"
                        : "block"
                    } w-[1px] h-10 bg-[#88DB1B]`}
                  ></span>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex flex-wrap md:justify-left gap-6">
          <a href="#courses">
          <Button className="rounded-full flex items-center gap-9 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-12">
            Enroll Now
            <i className="flex icon w-8 h-8 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
              <MdArrowForward />
            </i>
          </Button>
          </a>
        </div>
      </div>
      <div className="hero-banner w-[19.75rem] h-[18.22rem] md:w-[33.5rem] md:h-[30.75rem] bg-contain bg-no-repeat flex flex-col justify-between z-10">
        <div className="flex justify-between md:m-3">
          <div className="md:w-14 w-8 h-14 md:h-24 mt-[15px] md:mt-3 ml-[22px] md:ml-6 rounded-ss-2xl rounded-ee-2xl md:rounded-ee-3xl bg-[#88DB1B66]" />
          <div className="flex justify-around items-center text-[10px] md:text-sm m-2 py-1 px-1.5 gap-1 md:gap-2 w-fit h-fit bg-[#FFFFFF33] font-archivo text-black rounded-full tracking-wider">
            <MdHdrStrong className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 p-0 text-[#FFFFFFCC]" />
            <span className="text-[#FFFFFFCC] w-fit">NEW</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end mx-3">
          <div className="flex items-center gap-3 md:gap-6 p-2 gradbg w-fit mb-6 rounded-full">
            <img loading="lazy" src={learners} className="md:h-8 h-5" alt="" />
            <span className="text-white font-semibold text-[10px] md:text-xs tracking-wider">
              420+ Learners
            </span>
            <Button className="rounded-full flex w-fit items-center gap-3 bg-white border border-[#0101011A] capitalize font-archivo font-medium text-[10px] md:text-[16px] text-black py-1 pr-1 pl-4">
              View Demo
              <i className="flex md:w-8 md:h-8 w-6 h-6 text-black bg-[#0101011A] justify-center items-center rounded-full">
                <MdSlowMotionVideo />
              </i>
            </Button>
          </div>
          <img loading="lazy" src={bars} className="md:h-9 h-6 mr-16 md:mr-32" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
