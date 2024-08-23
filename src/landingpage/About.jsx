import { Button } from "@material-tailwind/react";
import { MdHdrStrong, MdShoppingBag, MdLocalLibrary } from "react-icons/md";
import aboutbar from "../assets/about_bar1.png";
import "./landing.css";
import "./animations.css";
import curly from "../assets/curly.png";
import about from "../assets/about.png";
import des from "../assets/about_des.png";
import logo from "../../knowlumi.png";
//bg-[#E6F3D6]
const About = () => {
  return (
    <div className="flex flex-col lg:-mt-56 xl:-mt-60">
      {/* <div className="w-full flex justify-end bg-white">
        <img src={aboutbar} className="w-fit h-8 md:h-16 rotate-180" alt="" />
      </div> */}
      <div className="flex flex-col w-full bg-white items-start">
        <div className="z-10 w-full flex flex-col gap-6 justify-between items-start md:items-center px-10 mx-0 my-9 md:my-20 h-fit">
          <div className="flex flex-col items-center justify-between gap-6">
            <Button
              className="flex justify-around items-center gap-2 font-archivo text-[#01010199] bg-[#F7F7F7] border border-[#01010108] rounded-full tracking-wider"
            >
              <MdHdrStrong className="w-4 h-4 p-0 text-[#88DB1B]" />
              WHAT MAKES US DIFFERENT
            </Button>
            <div className="flex flex-col items-start md:items-end">
              <span className="font-light text-6xl text-center">
                About Knowlumi
              </span>
            </div>
          </div>
          <p className="font-archivo mt-8 md:mt-4 font-light text-sm text-black md:w-[52.5rem] text-center">
          Ever wondered why IITians excel in their careers more than other engineering students? It's because they identify their passions early and pursue them with quality resources, top mentors, and advanced programs. If you aspire to reach similar heights but are struggling to find your true passion, set clear goals, or connect with expert mentors, KnowLumi is here to guide you.
          </p>
          <div className="flex items-center md:justify-center gap-3.5 mt-8 w-full">
            <img src={logo} alt="" className="w-7 h-7" />
            <span className="font-extrabold text-lg">Introducing KnowLumi</span>
          </div>
          <div
            style={{ backgroundImage: `url('${curly}')` }}
            className="flex items-center justify-around md:w-full md:h-80 bg-cover bg-no-repeat"
          >
            <div className="hidden md:flex items-center bg-[#2F342A] about-tilt mb-20 rounded-lg gap-3 px-3 h-12">
              <MdShoppingBag className="text-[#88DB1B]" />
              <span className="text-white font-semibold text-xs tracking-wider">
                AI Powered Platform
              </span>
              <img src={des} className="h-full pt-2" alt="" />
            </div>
            <img src={about} alt="" className="h-full" />
            <div className="hidden md:flex items-center about-tilt-rev bg-[#2F342A] mt-20 rounded-lg gap-3 px-3 h-12">
              <MdLocalLibrary className="text-[#88DB1B]" />
              <span className="text-white font-semibold text-xs tracking-wider">
                Personal Mentorship
              </span>
              <img src={des} className="h-full pt-2" alt="" />
            </div>
          </div>
          <p className="font-archivo mt-8  font-light text-sm text-center text-black md:w-[842px]">
          KnowLumi is here to help. We use AI to uncover your passions, offer personalized goal-setting support, and connect you with expert mentors and programs. With a focus on hands-on learning and practical experience, KnowLumi bridges the gap between academic knowledge and career success.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
