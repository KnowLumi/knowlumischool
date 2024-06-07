import { useState } from "react";
import {
  Breadcrumbs,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  MdExpandMore,
  MdKeyboardDoubleArrowRight,
  MdPlayArrow,
} from "react-icons/md";
import { assessment } from "../helpers/learninghelpers";
const DayLearning = () => {
  const [open, setOpen] = useState(2);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3 rounded-2xl py-4 px-6 items-center justify-between bg-white md:w-[46.25rem]">
        <Breadcrumbs
          className="bg-transparent"
          separator={<MdExpandMore className="w-4 h-4 -rotate-90 text-black" />}
        >
          <a href="#" className="opacity-60 font-archivo">
            Fundamentals
          </a>
          <a href="#" className="opacity-60 font-archivo">
            Week 2
          </a>
          <a href="#" className="font-archivo">
            Day 3
          </a>
        </Breadcrumbs>
        <div className="flex items-center gap-8 text-[#4258BE] font-normal text-sm tracking-wider">
          <div className="flex items-center gap-2.5">
            <MdKeyboardDoubleArrowRight className="w-4 h-4 rotate-180" />
            <span>Previous</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span>Next</span>
            <MdKeyboardDoubleArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg p-6 h-[30rem] md:h-[24rem] overflow-y-scroll weeks bg-white">
        <video
          className="md:h-[22.5rem] max-w-[43.5rem] rounded-xl"
          width="100%"
          height="100%"
          controls
        >
          <source
            src="(1756) Java calculator app 🖩 - YouTube - Brave 2023-01-06 19-52-55.mp4"
            type="video/mp4"
          />
        </video>
        <Accordion
          open={open === 1}
          className="bg-white px-6 rounded-2xl border-b-white max-w-[43.5rem]"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="font-archivo text-black border-b-2 border-[#0000001A]"
          >
            <div className="flex items-center gap-4 text-sm font-bold tracking-wide">
              <MdExpandMore
                className={`text-black ${
                  open === 1 ? "-rotate-90" : ""
                } h-6 w-6 transition-transform`}
              />
              Day 3: CSS Selectors and Basic Styling
            </div>
          </AccordionHeader>
          <AccordionBody>
            <p className="font-archivo md:px-7 flex flex-col gap-3 text-[#01010199]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>
          </AccordionBody>
        </Accordion>
        <div className="flex items-center justify-between text-white my-6">
          <button className="font-medium tracking-wide text-[16px] rounded-lg  bg-[#4258BE] py-2 px-5">
            Assessment
          </button>
          <button className="rounded-xl  bg-[#4258BE] px-5 py-2">
            <MdPlayArrow className="w-4 h-4" />
          </button>
        </div>
        <form className="flex flex-col gap-5">
          {assessment.map((item, i) => (
            <div
              key={`assessment_q_${i + 1}`}
              className="flex flex-col gap-4 pt-6"
            >
              <div className="flex items-start text-xs gap-1.5">
                <span className="font-semibold tracking-wider">{i + 1}.</span>
                <p className="font-light tracking-wider">{item.question}</p>
              </div>
              <div className="flex flex-col px-7 gap-1">
                {item.options.map((option, j) => (
                  <div
                    key={`q${i + 1}_option_${j + 1}`}
                    className="flex items-center py-2 px-4"
                  >
                    <input
                      type="radio"
                      id={`question${i}_option${j}`}
                      name={`question${i}`}
                      value={j}
                      className="mr-2 checked:bg-[#4258BE] w-4 h-4"
                    />
                    <label
                      className="font-light text-xs tracking-wider"
                      htmlFor={`question${i}_option${j}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </form>
        <div className="flex items-center justify-between text-white mt-6">
          <button className="font-medium tracking-wide text-[16px] rounded-lg  bg-[#4258BE] py-2 px-5">
            Submit
          </button>
          <button className="rounded-xl  bg-[#4258BE] px-5 py-2">
            <MdPlayArrow className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayLearning;
