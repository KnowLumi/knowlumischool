import { useState, useEffect } from "react";
import {
  Progress,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MdSearch, MdExpandMore } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
function Icon({ id, open }) {
  return (
    <MdExpandMore
      className={`text-black ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    />
  );
}
const Fundamentals = () => {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(2);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 25) {
          clearInterval(interval);
          return 25;
        }
        return prevProgress + 1;
      });
    }, 15); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="md:flex hidden flex-col gap-9 rounded-2xl p-6 bg-white overflow-y-scroll weeks w-[23rem] h-[30.5rem]">
      <h1 className="font-normal tracking-wide text-4xl">Fundamentals</h1>
      <p className="font-light text-xs tracking-wider text-[#010101CC]">
        Learn HTML, CSS, GitHub, and Python essentials, setting the stage for a
        rewarding career journey.{" "}
      </p>
      <div className="flex flex-col gap-3">
        <span className="text-[#696D6E] text-xs font-normal">10% Complete</span>
        <Progress value={progress} size="sm" color="indigo" />
      </div>
      <form className="border border-[#01010166] text-[#1F1F1F99] rounded-md px-3 h-7 py-1 flex items-center">
        <button>
          <MdSearch className="w-4 h-4 p-0" />
        </button>
        <input
          type="text"
          className="placeholder:text-xs placeholder:text-[#1F1F1F99] focus:outline-none px-1.5 text-xs"
          placeholder="Search in course"
        />
      </form>
      <Accordion
        open={open === 1}
        className="bg-white px-6 rounded-2xl border-b-white"
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="font-archivo text-black border-0  text-sm font-semibold tracking-wide"
        >
          Program material
        </AccordionHeader>
        <AccordionBody>
          <div className="font-archivo px-7 flex flex-col gap-3">
            {new Array(6).fill("").map((_, i) => (
              <div
                key={`week-${i + 1}`}
                className="flex items-center gap-3 py-2 px-4 rounded-lg"
              >
                <FaCheckCircle className="w-4 h-4" />
                <span className="font-light text-sm tracking-wider">
                  Week {i + 1}
                </span>
              </div>
            ))}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Fundamentals;
