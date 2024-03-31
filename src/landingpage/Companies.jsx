import { useState, useRef } from "react";
import { companies } from "./landing_helpers";
import { MdOutlineChevronRight } from "react-icons/md";
import Marquee from "react-fast-marquee";
const Companies = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRight, setIsRight] = useState(true);
  const marqueeRef = useRef(null);

  return (
    <div className="flex flex-col items-center font-archivo gap-16 my-16">
      <div className="flex flex-col items-center gap-4">
        <span className="text-[#88DB1B] font-bold text-[20px] leading-5 tracking-wide">
          Exceptional Mentors
        </span>
        <span className="font-medium text-4xl tracking-wider">
          We have our mentors from top tech companies
        </span>
      </div>
      <div
        className="w-full px-24"
        onMouseOver={() => {
          setIsHovered(true);
          setIsRight(!isRight);
        }}
        onMouseOut={() => {
          setIsHovered(false);
        }}
      >
        <Marquee
          ref={marqueeRef}
          speed={150}
          pauseOnClick
          pauseOnHover
          autoFill
          className={`w-full flex items-center ${isHovered ? "" : "grayscale"}`}
          direction={`${isRight ? "right" : "left"}`}
        >
          {companies.map((item, index) => (
            <img
              key={`marquee_item_${index}`}
              src={item}
              alt=""
              className="w-20 h-full mx-14"
            />
          ))}
        </Marquee>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-black opacity-60 font-normal text-sm">View More</span>
        <MdOutlineChevronRight className=""/>
      </div>
    </div>
  );
};

export default Companies;
