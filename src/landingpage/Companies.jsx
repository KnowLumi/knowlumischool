import { useState } from "react";
import { companies } from "./landing_helpers";
import { MdOutlineChevronRight } from "react-icons/md";
import Marquee from "react-fast-marquee";
const Companies = () => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  return (
    <div className="flex flex-col items-center font-archivo gap-16 my-24">
      <div className="flex flex-col items-center gap-4 px-4">
        <span className="text-[#88DB1B] font-bold text-[20px] leading-5 tracking-wide">
          Exceptional Mentors
        </span>
        <span className="font-medium text-2xl md:text-4xl tracking-wider text-center">
          We have our mentors from top tech companies
        </span>
      </div>
      <div className="w-full px-4 md:px-24">
        <Marquee
          speed={50}
          pauseOnClick
          pauseOnHover
          className="w-full flex items-center"
          direction="right"
        >
          {companies.map((item, index) => (
            <img
              key={`marquee_item_${index}`}
              src={item}
              alt=""
              className={`w-20 h-full mx-14 ${hoveredImageIndex === index ? "grayscale-0" : "grayscale"}`}
              onMouseEnter={() => setHoveredImageIndex(index)}
              onMouseLeave={() => setHoveredImageIndex(null)}
            />
          ))}
        </Marquee>
      </div>
      <button className="flex gap-2 items-center">
        <span className="text-black opacity-60 font-normal text-sm">
          View More
        </span>
        <MdOutlineChevronRight className="" />
      </button>
    </div>
  );
};

export default Companies;
