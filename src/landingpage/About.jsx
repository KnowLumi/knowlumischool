import { Button } from "@material-tailwind/react";
import { MdHdrStrong } from "react-icons/md";
import aboutbar from "../assets/about_bar1.png";
import "./landing.css";
//bg-[#E6F3D6]
const About = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-end">
        <img src={aboutbar} className="w-fit h-8 md:h-16" alt="" />
      </div>
      <div className="flex flex-col w-full bg-[#E6F3D6] items-start">
        <div className="z-10 flex flex-col md:flex-row justify-between items-start md:items-center m-9 md:m-20 h-fit">
          <div className="flex flex-col items-start md:items-end justify-between gap-6">
            <Button
              className="flex justify-around items-center gap-2 font-archivo text-black opacity-60 rounded-full tracking-wider"
              color="white"
            >
              <MdHdrStrong className="w-6 h-3 p-0 text-[#88DB1B]" />
              why KNOWLUMI
            </Button>
            <div className="flex flex-col items-start md:items-end">
              <span className="font-light text-4xl">About</span>
              <span className="font-light text-6xl">Knowlumi</span>
            </div>
          </div>
          <p className="font-archivo mt-8 md:mt-0 font-light text-sm text-black md:w-96">
            Discover transformative educational opportunities with
            KnowLumi&apos;s dynamic courses and programs: Turning Aspirations
            into Achievements! Have you ever felt limited by the resources
            available for your educational journey? KnowLumi breaks down these
            barriers, offering a diverse range of courses and programs that
            transcend traditional boundaries. Join a community of learners,
            access expert mentorship, and embark on a path where your personal
            growth contributes to a thriving collective.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-start">
        <img src={aboutbar} className="w-fit h-8 md:h-16 rotate-180" alt="" />
      </div>
    </div>
  );
};

export default About;
