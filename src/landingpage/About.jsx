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
    <div className="flex flex-col">
      <div className="w-full flex justify-end">
        <img src={aboutbar} className="w-fit h-8 md:h-16" alt="" />
      </div>
      <div className="flex flex-col w-full bg-white items-start">
        <div className="z-10 w-full flex flex-col gap-6 justify-between items-start md:items-center px-10 mx-0 my-9 md:my-20 h-fit">
          <div className="flex flex-col items-center justify-between gap-6">
            <Button
              className="flex justify-around items-center gap-2 font-archivo text-black opacity-60 rounded-full tracking-wider"
              color="white"
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
          <p className="font-archivo mt-8 md:mt-4  font-light text-sm text-black md:w-[53rem]">
            Let&apos;s talk about the difference between how medical and
            engineering students are taught. In medical courses, students learn
            directly from practicing doctors, gaining real-world insights and
            practical skills from experienced professionals. In contrast,
            engineering courses often rely on teachers without industry
            experience, limiting students&apos; exposure to real-world
            applications.
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
                Placement Assistance
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
          <p className="font-archivo mt-8  font-light text-sm text-black md:w-[53rem]">
            Like a medical course, KnowLumi connects you with industry experts
            who teach you the most relevant and in-demand skills. Learn from the
            best in the field and gain hands-on experience that prepares you for
            a successful career in your chosen industry. Join KnowLumi and
            bridge the gap between education and industry expertise.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
