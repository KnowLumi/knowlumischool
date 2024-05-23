import { WhyKnowlumi } from "./landing_helpers";
import { Button } from "@material-tailwind/react";
import {
  MdHdrStrong,
  MdArrowForward,
  MdOutlinePhoneCallback,
} from "react-icons/md";
const WhyKnowLumi = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-14 mt-24">
      <div className="flex flex-col items-center gap-3">
        <span className=" text-[#88DB1B] font-bold text-center text-xl tracking-wide">
          What makes us stand out!
        </span>
        <h2 className="font-medium text-4xl md:text-5xl text-center tracking-wide w-fit">
          Why join KnowLumi?
        </h2>
      </div>
      <div className="flex gap-3 md:gap-14 w-full items-center justify-center">
        {WhyKnowlumi.map((item, i) => (
          <div
            key={`why_${i}`}
            className="flex flex-col items-center py-6 px-7 bg-white justify-between rounded-xl w-[10.75rem] md:w-[27.5rem] h-[59.5rem] md:h-[34.5rem]"
          >
            <button className="bg-[#88DB1B] text-white rounded-full gap-1 flex items-center w-fit py-1 px-2 ">
              <MdHdrStrong className="w-2 h-2" />
              <span className="font-bold text-[8px] text-[#FFFFFFCC]">
                {item.badge}
              </span>
            </button>
            <h3 className="font-semibold text-sm tracking-wider">
              {item.title}
            </h3>
            {item.points.map((point, index) => (
              <>
                <span
                  key={`point-${index + 1}`}
                  className="text-black font-light text-sm md:w-96"
                >
                  {point}
                </span>
                <span className="h-[1px] w-full md:w-96 bg-[#0101011A]"></span>
              </>
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-6 flex-wrap justify-center ">
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
  );
};

export default WhyKnowLumi;
