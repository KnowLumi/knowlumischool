import { Button } from "@material-tailwind/react";
import {
  MdHdrStrong,
  MdArrowForward,
  MdOutlinePhoneCallback,
} from "react-icons/md";
import line1 from "./Process_svg/line1.svg";
import line2 from "./Process_svg/line2.svg";
const Process = () => {
  return (
    <div className="flex w-full px-16 relative">
      <div className="flex flex-col gap-10 absolute left-16 top-0">
        <div className="flex items-center w-fit bg-white rounded-full py-2 px-6 gap-4">
          <MdHdrStrong className="text-[#4258BE]" />
          <span className="font-bold text-xs text-[#01010199]">
            THE PROCESS
          </span>
        </div>
        <span className="w-80 font-light text-5xl">How Knowlumi Works</span>
        <div className="flex flex-col  text-sm">
          <span className="w-[22.75rem] font-light">
            Connect with seasoned mentors, access top-notch resources, and join
            a community where individual success fuels collective growth.
            Transform Dreams into Reality!
          </span>
          <span className="font-bold">Transform Dreams into Reality!</span>
        </div>
        <div className="flex gap-6">
          <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6">
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
      </div>
      <div className="w-full flex flex-col items-end h-[32rem] overflow-y-scroll">
        <div className="flex flex-col w-[39rem] h-full gap-6 py-12">
          <img src={line1} className="px-7" alt="" />
          <div className="flex w-full">
            <div className="flex flex-col gap-6">
              {new Array(4).fill("").map((_, i) => (
                <div key={`p_no_${i}`}>
                  <i className="rounded-full w-14 h-14 bg-[#4258BE] flex justify-center items-center text-white font-extrabold">
                    {i + 1}
                  </i>
                  <img
                    src={line2}
                    className="px-7 mt-6"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
