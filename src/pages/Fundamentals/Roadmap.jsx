import React from "react";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { roadmap } from "../helpers/fundamentalhelpers";    
import "./fundamentals.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar,
  Button,
} from "@material-tailwind/react";
const Roadmap = () => {
  const [open, setOpen] = React.useState(-1);
  const handleOpen = (value) => setOpen(open === value ? -1 : value);
  return (
    <div className="flex flex-col gap-12 py-6 md:py-9 px-4 md:px-12 mx-6 md:mx-20 bg-white rounded-3xl">
      <div className="flex gap-4 items-center">
        <i className="flex justify-center items-center w-11 h-11 bg-[#F3FEE6] rounded-full p-2.5">
          <IoNavigateCircleOutline className="-rotate-45 w-5 h-5" />
        </i>
        <h3 className="font-normal text-2xl md:text-4xl text-[#010101E5]">
          Roadmap
        </h3>
      </div>
      <span className="font-light text-sm tracking-wider">
        Here&apos;s your Actionable Roadmap to learn the fundamentals of Coding
      </span>
      <div className="flex flex-wrap gap-7 justify-between">
        {roadmap.map((item, index) => (
          <div key={`week-${index + 1}`} className="flex flex-col items-center">
            <div className="roadmap-items h-[9.25rem] md:h-[8.75rem] w-[17.375rem] md:w-[30.375rem] bg-contain z-10 bg-no-repeat">
              <div className="mt-5 mx-5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-sm tracking-wider">
                    WEEK {item.week}
                  </span>
                  <MdKeyboardArrowDown
                    className="w-5 h-5"
                    onClick={() => handleOpen(index)}
                  />
                </div>
                <span className="font-light text-sm tracking-wider">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
            </div>
            <Accordion
              open={open === index}
              className="md:w-[26.75rem] w-60 rounded-lg bg-[#88DB1B] -translate-y-11"
            >
              <AccordionHeader className="border-0 h-8 rounded-lg">
                head
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-fit md:flex-row gap-11 items-center">
        <Link to="/fundamentals">
          <Button className="rounded-full flex items-center gap-3 capitalize font-archivo text-sm tracking-widest font-medium text-[16px] bg-black text-white py-2 pr-2 pl-6">
            ENROLL NOW
            <i className="flex w-8 h-8 text-white -rotate-45 border border-[#FFFFFF33] bg-[#FFFFFF4D] justify-center items-center rounded-full">
              <MdArrowForward />
            </i>
          </Button>
        </Link>
        <div className="flex items-center gap-5">
          <div className="flex items-center -space-x-2">
            {new Array(3).fill("").map((_, i) => (
              <Avatar
                variant="circular"
                key={i}
                size="xs"
                alt="user 1"
                className="border border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            ))}
          </div>
          <span className="font-medium text-[10px] md:text-xs underline">
            420+ learners
          </span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
