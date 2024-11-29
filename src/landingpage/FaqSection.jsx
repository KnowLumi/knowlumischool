import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faq } from "./landing_helpers";
import { IoChevronForwardOutline } from "react-icons/io5";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="black"
      className={`text-gray-50 ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const FaqSection = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-full py-2 px-2 lg:px-8 mt-8 lg:my-16 flex flex-col items-center bg-[#F7F7F7] font-archivo ">
      <span className="font-archivo font-bold text-xl text-black opacity-60 mb-3">
        Any Queries?
      </span>
      <span className="font-archivo font-semibold text-3xl tracking-widest w-full text-center">
        Frequently Asked Questions
      </span>
      <div className="my-12">
        {faq.map((item, index) => (
          <Accordion
            key={index + 1}
            open={open === index + 1}
            className="bg-white my-6 px-6 rounded-2xl border-b-white w-full md:w-[45.125rem]"
            icon={<Icon id={index + 1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="font-archivo text-black border-0 text-sm font-semibold tracking-wide"
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className="font-archivo">{item.desc}</AccordionBody>
          </Accordion>
        ))}
      </div>
      <button className="flex text-lg font-normal gap-1 items-center my-8">
        <span className="text-gray-500">Not yet resolved?</span>
        <span>Find help!</span>
        <IoChevronForwardOutline className="ml-3"/>
      </button>
    </div>
  );
};

export default FaqSection;
