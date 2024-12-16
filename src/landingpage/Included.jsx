import { forwardRef } from "react";
import { included } from "./whats_included";
import { MdInfo, MdArrowForward, MdOutlinePhoneCallback } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import "./included.css";
import { Link } from "react-router-dom";
const Included = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center w-full h-[100vh] my-2">
      <div className="rect bg-contain md:bg-cover w-80 md:w-[71rem]  h-[8.5rem] md:h-[14.7rem] bg-no-repeat translate-y-24 md:translate-y-48" />
      <div className="flex flex-col items-center gap-8 w-80 md:w-[71rem] z-10 bg-white py-5 px-0 md:px-16 rounded-2xl">
        <h2 className="font-bold text-3xl text-[#4258BE] tracking-wide">
          What&apos;s Included?
        </h2>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-[63.5rem] md:justify-between items-center">
            {included.map((item, i) => (
              <div
                key={`included-${i + 1}`}
                className="rounded-xl p-4 flex flex-col gap-6"
                style={{ backgroundColor: item.bg }}
              >
                <div className="flex gap-4 items-center">
                  <i
                    className="rounded-full p-2.5 flex justify-center items-center"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.logo}
                  </i>
                  <span className="font-normal text-sm tracking-wide text-[#010101CC] w-[8.75rem] text-left">
                    {item.title}
                  </span>
                </div>
                <span className="w-full h-[1px] bg-[#0101011A]"></span>
                <ul className="flex flex-col gap-3.5">
                  {item.points.map((point, index) => (
                    <li
                      key={`included-point-${index}`}
                      className="flex gap-1 items-center"
                    >
                      <i className="py-0.5 px-2.5">{point.icon}</i>
                      <span className="font-light text-xs tracking-wider">
                        {point.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <span className="h-[1px] w-64 md:w-full bg-[#4258BE66] "></span>
          <div className="flex flex-col gap-9">
            <div className="flex md:flex-row flex-col items-center justify-between md:justify-center w-full h-80 md:h-[5.5rem]">
              <div className="rect1 bg-cover md:bg-contain md:w-[39.5rem] w-full h-[5.5rem] bg-no-repeat flex">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  className="hidden md:block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.625853 25.093C0.625853 24.8278 0.73121 24.5735 0.918746 24.3859L24.3169 0.987829C24.5044 0.800292 24.7588 0.694934 25.024 0.694932L53.4472 0.694937C54.3381 0.694936 54.7843 1.77208 54.1543 2.40204L2.33296 54.2234C1.70299 54.8534 0.625854 54.4072 0.625854 53.5163L0.625853 25.093Z"
                    fill="#88DB1B"
                  />
                </svg>
                <div className="flex flex-col md:flex-row gap-6 md:gap-9 py-3 w-full items-center">
                  <div className="flex justify-start rect1_a bg-cover bg-no-repeat w-[16.25rem] h-[4.75rem] md:h-fit md:w-fit">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:hidden block"
                    >
                      <path
                        d="M0.482049 15.7178C0.482049 15.4526 0.587406 15.1982 0.774942 15.0107L14.743 1.04262C14.9306 0.855088 15.1849 0.749732 15.4501 0.749734L31.5858 0.749734C32.4767 0.749735 32.9228 1.82688 32.2929 2.45684L2.18916 32.5606C1.55919 33.1905 0.482049 32.7444 0.482049 31.8535L0.482049 15.7178Z"
                        fill="#88DB1B"
                      />
                    </svg>

                    <div className=" flex flex-col justify-center py-3 md:py-0 gap-4 md:gap-3">
                      <span className="text-[#4258BE] font-semibold text-2xl md:text-[28px] p-0">
                        &#8377; 5000/-
                      </span>
                      <span className="font-light text-xs tracking-wider">
                        Non-refundable Upfront Fee
                      </span>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col items-center gap-6">
                    <span className="text-[#4258BE] font-semibold text-2xl md:text-3xl p-0">
                      +
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className="text-[#4258BE] font-semibold text-2xl md:text-3xl p-0">
                        12% of Annual CTC
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="font-light text-xs tracking-wider">
                          Pay after you get a job
                        </span>
                        <MdInfo className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rect2 bg-contain h-[4.75rem] md:h-[5rem] w-[15.75rem] md:w-[26.125rem] bg-no-repeat pl-5 md:pl-0 flex justify-center items-center gap-2">
                <span className="font-bold text-sm md:text-lg tracking-wider w-[8.75rem] md:w-fit text-white">
                  ENROLL NOW WITH KNOWLUMI
                </span>
                <MdArrowForward className="-rotate-45 text-white w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ml-8 md:ml-0 gap-6">
            <Link to='/fundamentals'>
              <Button className="rounded-full bg-[#4258BE] flex items-center gap-3 capitalize font-archivo font-medium text-xs py-[3px] pr-[3px] pl-6">
                Enroll Now
                <i className="flex icon w-8 h-8 text-white border border-[#0101010D] bg-[#FFFFFF1A] justify-center items-center rounded-full">
                  <MdArrowForward />
                </i>
              </Button>
            </Link>
            <Button className="rounded-full flex border border-[#4258BE] bg-white items-center gap-3 capitalize font-archivo font-medium text-xs text-[#4258BE] py-[3px] pr-[3px] pl-6">
              Request a Callback
              <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-[#4258BE] justify-center items-center rounded-full">
                <MdOutlinePhoneCallback />
              </i>
            </Button>
          </div>
        </div>
      </div>
      <div className="rect bg-contain md:bg-cover rotate-180 w-80 md:w-[71rem] mb-4 h-[8.5rem] md:h-[14.7rem] bg-no-repeat -translate-y-20  md:-translate-y-44" />
    </div>
  );
});

Included.displayName = "Included";

export default Included;
