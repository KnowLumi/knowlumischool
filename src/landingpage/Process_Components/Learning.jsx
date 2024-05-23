import {
  MdOutlineLocalLibrary,
  MdFreeCancellation,
  MdAlarm,
  MdArrowForward,
  MdHdrStrong,
  MdVideoLibrary,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { TbFileFilled } from "react-icons/tb";
import { Button, Avatar } from "@material-tailwind/react";
import mongo from "./logos/mongo.png";
import node from "./logos/node.png";
import reactjs from "./logos/react.png";
const Learning = () => {
  return (
    <div className="flex flex-col mb-20">
      <h1 className="font-normal text-5xl">Learning</h1>
      <p className="w-[13.25rem] md:w-[27.5rem] text-xs font-light tracking-wider mt-8">
        At KnowLumi, students engage in personalized learning, foster community
        connections, and leverage their skills to secure internships, jobs, or
        start-ups.
      </p>
      <div className="flex gap-3.5 items-center mt-5">
        <MdOutlineLocalLibrary className="w-5 h-5 text-[#88DB1B]" />
        <span className="font-light text-sm">Personal Mentorship</span>
      </div>
      <div className="flex gap-3.5 items-center mt-5">
        <MdFreeCancellation className="w-5 h-5 text-[#88DB1B]" />
        <span className="font-light text-sm">Weekly Review Meetings</span>
      </div>
      <div className="flex flex-col gap-5 mt-12">
        <h3 className="text-[#4258BE] font-semibold text-xl">Fundamentals</h3>
        <div className="flex gap-3.5 items-center">
          <MdAlarm className="w-5 h-5 text-[#88DB1B]" />
          <span className="font-light text-sm">3 month duration</span>
        </div>
        <span className="font-light text-xs tracking-wider text-black bg-yellow-400pr-4 w-fit">
          Learn the fundamentals of the tech future
        </span>
        <div className="bg-white rounded-2xl"></div>
        <div className="flex gap-3.5 items-center mt-5 ">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#88DB1B]"
          >
            <path
              d="M5.93516 6.3V4.5H14.0352V6.3H5.93516ZM5.93516 9V7.2H14.0352V9H5.93516ZM8.63516 18H3.23516C2.48516 18 1.84766 17.7375 1.32266 17.2125C0.797656 16.6875 0.535156 16.05 0.535156 15.3V12.6H3.23516V0H16.7352V8.1225C16.4352 8.0925 16.1314 8.10375 15.8239 8.15625C15.5164 8.20875 15.2202 8.3025 14.9352 8.4375V1.8H5.03516V12.6H10.4352L8.63516 14.4H2.33516V15.3C2.33516 15.555 2.42141 15.7687 2.59391 15.9412C2.76641 16.1137 2.98016 16.2 3.23516 16.2H8.63516V18ZM10.4352 18V15.2325L15.4077 10.2825C15.5427 10.1475 15.6927 10.05 15.8577 9.99C16.0227 9.93 16.1877 9.9 16.3527 9.9C16.5327 9.9 16.7052 9.93375 16.8702 10.0013C17.0352 10.0688 17.1852 10.17 17.3202 10.305L18.1527 11.1375C18.2727 11.2725 18.3664 11.4225 18.4339 11.5875C18.5014 11.7525 18.5352 11.9175 18.5352 12.0825C18.5352 12.2475 18.5052 12.4163 18.4452 12.5887C18.3852 12.7612 18.2877 12.915 18.1527 13.05L13.2027 18H10.4352ZM11.7852 16.65H12.6402L15.3627 13.905L14.9577 13.4775L14.5302 13.0725L11.7852 15.795V16.65ZM14.9577 13.4775L14.5302 13.0725L15.3627 13.905L14.9577 13.4775Z"
              fill="#88DB1B"
            />
          </svg>
          <span className="font-light text-sm w-[11.25rem] md:w-full">
            Assessment - to choose your career track
          </span>
        </div>
        <div className="flex flex-col w-fit md:flex-row gap-8 items-center">
          <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] bg-[#4258BE] text-white py-1 pr-1 pl-6">
            Join Our Community
            <i className="flex w-8 h-8 text-[#4258BE] -rotate-45 border border-[#0101010D] bg-white justify-center items-center rounded-full">
              <MdArrowForward />
            </i>
          </Button>
          <div className="flex items-center gap-5">
            <div className="flex items-center -space-x-2">
              {new Array(3).fill("").map((_, i) => (
                <Avatar
                  variant="circular"
                  key={i}
                  size="xs"
                  alt="user 1"
                  className="border-2 border-white hover:z-10 focus:z-10"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              ))}
            </div>
            <span className="font-medium text-[10px] md:text-xs underline">
              400+ active learners
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-12">
        <h3 className="text-[#4258BE] font-semibold text-xl">
          Mastering Tracks
        </h3>
        <span className="font-light text-sm w-60">
          Choose your career track, or let us choose it for you!
        </span>
        <div className="flex flex-wrap gap-5">
          <div className="bg-white rounded-xl w-52 py-4 px-3.5 flex flex-col gap-4">
            <div className="flex items-center w-fit bg-[#88DB1B] rounded-full py-1 px-2 gap-1">
              <MdHdrStrong className="text-white w-2 h-2" />
              <span className="font-bold text-[8px] text-white">TRACK 1</span>
            </div>
            <h2 className="font-normal text-xs">
              Full-Stack Development with MERN Stack
            </h2>
            <div className="flex gap-5">
              <img src={mongo} alt="" className="w-4 h-4" />
              <img src={node} alt="" className="w-4 h-4" />
              <img src={reactjs} alt="" className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <MdVideoLibrary className="w-3.5 h-3.5 text-[#FF9F1C]" />
                <span className="font-normal text-[10px] text-[#01010199]">
                  41 Recorded Videos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TbFileFilled className="w-3.5 h-3.5 text-[#FF9F1C]" />
                <span className="font-normal text-[10px] text-[#01010199]">
                  4 projects
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#88DB1B] font-normal text-xs">
                View More
              </span>
              <MdKeyboardDoubleArrowRight className="w-3.5 h-3.5 text-[#FF9F1C]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
