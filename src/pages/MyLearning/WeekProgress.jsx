import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import {
  MdExpandMore,
  MdKeyboardDoubleArrowRight,
  MdFlag,
  MdTask,
} from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { IoNavigateCircleOutline } from "react-icons/io5";
import "./learning.css";
function Icon({ id, open }) {
  return (
    <MdExpandMore
      className={`text-black ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    />
  );
}
const WeekProgress = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="block md:hidden font-normal tracking-wide text-3xl">
        Fundamentals
      </h1>
      <div className="flex flex-wrap gap-3 rounded-2xl py-4 px-6 items-center justify-between bg-white md:w-[46.25rem]">
        <div className="flex flex-col gap-3">
          <span className="font-light text-xs tracking-wider text-[#01010199]">
            Continue to your next item!
          </span>
          <div className="flex flex-wrap gap-3 items-center">
            <h4 className="font-normal text-xs w-[11.75rem] md:text-sm tracking-wider text-[#4258BE]">
              Day 3: Styling HTML Elements with Inline CSS
            </h4>
            <MdKeyboardDoubleArrowRight className="w-5 h-5" />
          </div>
        </div>
        <Button className="rounded-lg bg-[#88DB1B] py-2 px-5 w-fit text-white font-archivo capitalize font-medium text-[10px] md:text-[16px] tracking-wide">
          Resume
        </Button>
      </div>
      <div className="flex flex-col gap-2 rounded-lg p-6 h-[30rem] md:h-[24rem] overflow-y-scroll weeks bg-white">
        {new Array(7).fill("").map((_, i) => (
          <Accordion
            open={open === i + 2}
            key={i}
            className="bg-white px-6 rounded-2xl border-b-white"
            icon={<Icon id={i + 2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(i + 2)}
              className="font-archivo text-black border-0  text-sm font-semibold tracking-wide"
            >
              Week {i + 1}:
            </AccordionHeader>
            <AccordionBody>
              <div className="font-archivo px-7 flex flex-col gap-3">
                {new Array(7).fill("").map((_, i) => (
                  <div
                    key={`week-${i + 1}`}
                    className="flex items-center gap-3 py-2 px-4 rounded-lg"
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    <span className="font-light text-sm tracking-wider">
                      Day {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </AccordionBody>
          </Accordion>
        ))}
        <div className="flex flex-col items-start gap-3 px-6 border-t-2 text-black border-t-[#0000001A] py-4">
          <div className="flex items-center gap-2">
            <LuCalendarClock className="w-5 h-5" />
            <h6 className="text-sm tracking-wider font-bold">Schedule</h6>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 px-3 pb-2">
              <IoNavigateCircleOutline className="w-4 h-4 text-[#01010199] -rotate-45" />
              <span className="font-light tracking-wider text-xs">
                Start Date: May 24, 2024 IST
              </span>
            </div>
            <span className="h-4 w-0 border border-dashed border-[#01010166] ml-5 "></span>
            <div className="flex items-center gap-2 px-3 pb-2 pt-2">
              <MdFlag className="w-4 h-4" />
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-light tracking-wider text-xs">
                  Estimated End Date:
                </span>
                <span className="font-bold tracking-wider text-xs">
                  August 13, 2024 IST
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <MdTask className="w-4 h-4 text-[#88DB1B]" />
              <span className="font-bold tracking-wider text-xs">
                You are up to date!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekProgress;
