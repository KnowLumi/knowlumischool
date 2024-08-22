import { Button } from "@material-tailwind/react";
import { FaUserCog, FaBook, FaLifeRing } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import {
  MdTrendingDown,
  MdTrendingUp,
  MdArrowForward,
  MdOutlinePhoneCallback,
} from "react-icons/md";
import { program } from "./landing_helpers";
import lines from "../assets/program_lines.png";
import "./animations.css";
import aboutbar from "../assets/about_bar1.png";
import { SiFuturelearn } from "react-icons/si";

const PointIcon = (index) => {
  switch (index) {
    case 0:
      return <FaUserCog className="w-4 h-4" />;
    case 1:
      return <BsBuildingsFill className="w-4 h-4" />;
    case 2:
      return <FaBook className="w-4 h-4" />;
    case 3:
      return <FaLifeRing className="w-4 h-4" />;
    case 4:
      return <SiFuturelearn className="w-4 h-4" />

    default:
      break;
  }
};

const Program = ({ scrollToIncluded }) => {
  return (
    <div className="flex flex-col bg-white items-center">
      <div className="flex flex-wrap gap-7 justify-center">
        {program.map((item, index) => (
          <div
            key={`program_${index}`}
            style={{ backgroundColor: item.bg }}
            className="flex flex-col w-80 md:w-[33.5rem] p-6 rounded-xl gap-6"
          >
            <div className="flex bg-white rounded-lg w-full items-center gap-5">
              <i className="flex items-center justify-center bg-black w-16 h-10 p-2.5 rounded-lg">
                <img src={item.icon} className="w-5 h-5" alt="" />
              </i>
              <span className="font-bold text-sm">{item.title}</span>
            </div>
            <p className="md:w-[24rem] text-[#01010199] font-light text-xs tracking-[4%]">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.points.map((p, i) => (
                <div
                  key={`point-${i + 1}`}
                  className="flex items-center gap-2.5 rounded-lg bg-white py-3 px-2"
                >
                  {PointIcon(i)}
                  <span className="font-light text-xs">{p}</span>
                </div>
              ))}
            </div>
            <div className="bg-white py-4 px-6 rounded-lg flex flex-col">
              <div className="flex justify-between">
                <span className="font-bold text-sm text-[#414D55]">
                  Carrer Growth
                </span>
                {index == 0 ? (
                  <MdTrendingDown className="w-5 h-5" />
                ) : (
                  <MdTrendingUp className="w-5 h-5" />
                )}
              </div>
              <div
                style={{ backgroundImage: `url('${lines}')` }}
                className="md:w-[440px] md:h-[234.58px] bg-contain md:bg-cover bg-no-repeat flex items-center"
              >
                <img src={item.image} alt="" className="object-contain" />
              </div>
            </div>
            <span
              style={{ backgroundColor: item.color }}
              className="rounded-md w-fit px-2.5 py-2 tracking-wider text-white font-bold text-[8px]"
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 my-9 justify-center">
        <Button onClick={scrollToIncluded} className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6">
          Enroll in the Program
          <i className="flex icon w-8 h-8 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
        <Button
          onClick={scrollToIncluded}
          className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] text-black py-2 pr-2 pl-6"
          variant="outlined"
        >
          Request a Callback
          <i className="flex w-8 h-8 text-black border border-[#0101010D] bg-[#01010133] justify-center items-center rounded-full">
            <MdOutlinePhoneCallback />
          </i>
        </Button>
      </div>
      <div className="w-full flex bg-white justify-end mt-16">
        <img src={aboutbar} className="w-fit h-8 md:h-16" alt="" />
      </div>
      
    </div>
  );
};

export default Program;
