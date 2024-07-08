import { forwardRef } from "react";
import { Button } from "@material-tailwind/react";
import {
  MdHdrStrong,
  MdArrowForward,
  MdOutlinePhoneCallback,
} from "react-icons/md";

import Learning from "./Process_Components/Learning";
import PlacementAssistance from "./Process_Components/PlacementAssistance";
import CommunityEngagement from "./Process_Components/CommunityEngagement";
import Earning from "./Process_Components/Earning";
import "./landing.css";
import "./Process_Components/process.css"
import cash from "./Process_svg/cash.png";
import { processSvg } from "./landing_helpers";

const Process = forwardRef(({ scrollToIncluded }, ref) => {

  return (
    <div ref={ref} className="flex flex-col md:flex-row md:justify-between w-full px-8 md:px-16 mt-20 relative">
      <div className="flex flex-col gap-10 py-2 md:sticky z-10 left-24 top-20 h-fit">
        <button className="flex items-center w-fit bg-white rounded-full py-2 px-6 gap-4">
          <MdHdrStrong className="text-[#4258BE]" />
          <span className="font-bold text-xs text-[#01010199]">
            THE PROCESS
          </span>
        </button>
        <span className="w-72 md:w-80 font-light text-5xl">
          How Knowlumi Works
        </span>
        <div className="flex flex-col  text-sm">
          <p className="md:w-[22.75rem] font-light">
            Join the program and turn dreams into reality with expert mentors
            and top resources!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 w-fit">
          <Button onClick={scrollToIncluded} className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6">
            Enroll Now
            <i className="flex icon w-8 h-8 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
              <MdArrowForward />
            </i>
          </Button>
          <Button
            className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] text-black py-2 pr-2 pl-6"
            variant="outlined"
          >
            Contact Us
            <i className="flex w-8 h-8 text-black border border-[#0101010D] bg-[#01010133] justify-center items-center rounded-full">
              <MdOutlinePhoneCallback />
            </i>
          </Button>
        </div>
        {<div className="hidden md:flex gap-3.5 items-center z-50 mt-8 transition-transform ease-in">
          <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-7 py-4 px-6 -rotate-90 md:rotate-0 bg-[#4258BE] rounded-lg">
            <img src={cash} className="w-[54px] h-[54px] rotate-90 md:rotate-0 cash" alt="" />
            <div className="flex flex-col md:w-[11.25rem] text-white">
              <h4 className="text-base font-bold leading-6 text-left ">
                FREELANCE & EARN
              </h4>
              <span className="text-sm font-light leading-5 text-left hidden md:block">
                Get Freelance opportunities on the go
              </span>
            </div>
          </div>
          <svg
            width="150"
            height="18"
            viewBox="0 0 150 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="process-line hidden md:block"
          >
            <path
              d={processSvg}
              fill="#4258BE"
            />
          </svg>
        </div>}

      </div>
      <div
        className="w-full z-20 py-2 mt-24 md:mt-0 flex flex-col process items-end h-full md:w-[623px]">
        <div className="flex flex-col items-end h-fit w-full md:w-[623px]">
          <div className="w-full h-[4872px] md:h-[3500px] flex">
            <div className="flex flex-col process-comp bg-contain bg-no-repeat md:h-full w-[305px] md:w-full h-full gap-6 py-12">
              <div className="flex flex-col gap-[68px] w-full pl-9 md:pl-16 mt-6 md:mt-[92px]">
                <div
                  className="flex flex-col"
                >
                  <Learning />
                  <CommunityEngagement />
                  <PlacementAssistance />
                  <Earning />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-10 justify-end">
          <div className="process-line w-80 relative md:w-[727.5px] h-7 md:min-h-[66px] md:h-[66px] bg-contain bg-no-repeat flex flex-col justify-end">
            <i className="w-3 md:w-4 h-3 md:h-4 rounded-full hidden md:block bg-[#88DB1B] process-ball-anime" />
          </div>
        </div>
      </div>
    </div>
  );
});

Process.displayName = "Process"
export default Process;
