import { Button } from "@material-tailwind/react";
import { MdHdrStrong, MdShoppingBag, MdLocalLibrary } from "react-icons/md";
import about from "../assets/about.png";
import des from "../assets/about_des.png";
import curly from "../assets/curly.png";
import logo from "../../knowlumi.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col w-full bg-white items-start">
        <div className="z-10 w-full flex flex-col gap-6 justify-between items-start md:items-center px-4 md:px-10 mx-0 my-6 md:my-20">
          <div className="flex flex-col items-center justify-between gap-4 md:gap-6">
            <Button className="flex justify-around items-center gap-2 font-archivo text-[#01010199] bg-[#F7F7F7] border border-[#01010108] rounded-full tracking-wider text-xs lg:text-base">
              <MdHdrStrong className="w-4 h-4 p-0 text-[#88DB1B]" />
              <span> WHAT MAKES US DIFFERENT</span>
            </Button>
            <div className="flex flex-col items-center">
              <span className="font-light text-3xl md:text-6xl text-center">
                About KnowLumi School
              </span>
            </div>
          </div>
          <p className="font-archivo mt-4 md:mt-8 font-light text-xs md:text-sm text-black md:w-[52.5rem] text-center">
            Ever wondered why some engineering students excel in their careers more than others? The secret isn’t just in what they learn from 9 to 4—it’s what they do after class. They identify their passions early and pursue them with quality resources, top mentors, and advanced programs.
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-3.5 mt-6 md:mt-8 w-full">
            {/* <img src={logo} alt="" className="w-6 h-6 md:w-7 md:h-7" /> */}
            <span className="font-extrabold text-base md:text-lg">Introducing KnowLumi School</span>
          </div>
          <div
            style={{ backgroundImage: `url('${curly}')` }}
            className="flex flex-col md:flex-row items-center justify-around w-full md:h-80 bg-cover bg-no-repeat mt-6 md:mt-10"
          >
            <div className="hidden md:flex items-center bg-[#2F342A] about-tilt mb-20 rounded-lg gap-3 px-3 h-12">
              <MdShoppingBag className="text-[#88DB1B]" />
              <span className="text-white font-semibold text-xs tracking-wider">
                AI Powered Platform
              </span>
              <img src={des} className="h-full pt-2" alt="" />
            </div>
            <img src={about} alt="" className="w-full md:w-auto h-auto md:h-full" />
            <div className="hidden md:flex items-center about-tilt-rev bg-[#2F342A] mt-20 rounded-lg gap-3 px-3 h-12">
              <MdLocalLibrary className="text-[#88DB1B]" />
              <span className="text-white font-semibold text-xs tracking-wider">
                Personal Mentorship
              </span>
              <img src={des} className="h-full pt-2" alt="" />
            </div>
          </div>
          <p className="font-archivo mt-4 md:mt-8 font-light text-xs md:text-sm text-center text-black md:w-[842px]">
            At KnowLumi School, we help you do the same. If you're struggling with the lack of proper mentorship, resources, or even college status, we're here to bridge that gap. Our parallel education system ensures that while your academic journey continues in college, your career path is shaped by us. We provide the mentorship, resources, and guidance you need to build a successful future and create the career you’ve always dreamed of.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
