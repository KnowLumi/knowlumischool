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
import { Link } from "react-router-dom";
import { tracks } from "../../pages/helpers/fundamentalhelpers";
import IndividualCourseData from "../../pages/individualPage/individualCourseData";
import IndividualTracks from "../../pages/individualPage/individual-tracks";
import IndividualTracksTwo from "../../pages/individualPage/TracksForScndPage";


const Learning = ({ enableScroll }) => {

  const displayCourse = IndividualCourseData.slice(0, 3);
  


  const newDataStack = IndividualCourseData.slice(-4);
  return (
    <div className="flex flex-col w-full mt-10 md:mt-0">
      <div className="flex items-center gap-7 -translate-x-12 md:-translate-x-20">
        <div
          onClick={enableScroll}
          className="rounded-full h-10 w-10 md:w-[52px] md:h-[52px] bg-[#4258BE] flex justify-center items-center text-white font-extrabold"
        >
          1
        </div>
        <h1 className="font-normal text-4xl md:text-[42px] text-left">Learning</h1>
      </div>
      {/* w-[13.25rem] relative right-3 md:w-[29rem] text-xs font-light tracking-wider mt-8 */}
      <p className="w-[13.25rem] relative text-left md:w-[29rem] text-xs font-light tracking-wider mt-8">
      {/* w-52 md:w-[32rem] text-xs font-light tracking-wider mt-6 text-left */}
        At KnowLumi, students engage in personalized learning, foster community
        connections, and leverage their skills to secure internships, jobs, or
        start-ups .
      </p>
      <div className="flex gap-3.5 items-center mt-4">
        <MdOutlineLocalLibrary className="w-[18px] h-[18px] text-[#88DB1B]" />
        <span className="font-light text-sm">Personal Mentorship</span>
      </div>
      <div className="flex gap-3.5 items-center mt-4">
        <MdFreeCancellation className="w-[18px] h-[18px] text-[#88DB1B]" />
        <span className="font-light text-sm">Weekly Review Meetings</span>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <h3 className="text-[#4258BE] font-semibold text-xl text-left">Fundamentals</h3>
        <span className="font-light text-left text-xs tracking-wider text-black w-fit">
        In this stage, you’ll build a strong foundation by learning the core skills essential for your journey. The fundamentals include:
        </span>
        <div className="flex gap-3.5 items-center">
          <MdAlarm className="w-[18px] h-[18px] text-[#88DB1B]" />
          <span className="font-light text-sm">3 month duration</span>
        </div>
       
        <div className="bg-white rounded-2xl flex flex-wrap w-[200px] md:w-[429px] gap-9 md:gap-0 items-center justify-center md:justify-between py-4 px-7">
          {tracks[0].skills.map((item, i) => (
            <>
              <div
                key={`skill_${i}`}
                className="flex flex-col gap-2 items-center "
              >
                <img src={item.image} className="w-8 h-8" alt="" />
                <span className="text-xs font-light tracking-wider">
                  {item.skill}
                </span>
              </div>
              {i != 3 && (
                <span className="hidden md:block w-[1px] h-10 bg-[#00000033]"></span>
              )}
            </>
          ))}
        </div>
        <div className="flex items-center mt-4 gap-3">
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
          <span className="font-light text-sm ">
            Assessment - to choose your career track
          </span>
        </div>
        <div className="flex flex-col w-fit md:flex-row gap-8 items-center">
          <a href="/fundamentals">
            <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] bg-[#4258BE] text-white py-2 md:py-[3px] pr-2 md:pr-[3px] pl-6">
              Know More
              <i className="flex w-8 h-8 text-[#4258BE] -rotate-45 border border-[#0101010D] bg-white justify-center items-center rounded-full">
                <MdArrowForward />
              </i>
            </Button>
          </a>
          <div className="flex items-center gap-5">
            
           
          </div>
        </div>
      </div>
      {/* ======================================= */}
      <div className="flex flex-col gap-4 mt-10 md:-ml-14 md:pl-14">
        <h3 className="text-[#4258BE] font-semibold text-xl text-left">
          Mastering Tracks
        </h3>
        <span className="font-light text-sm text-left">
        We'll recommend a track based on your assessment, or you can select your own to master the skills that align with your goals.
        </span>
        {/* ///////////////////// */}
        <div className="flex flex-wrap gap-[18px] rounded-xl">
          {displayCourse.map((item, index) => (
            <div
              key={`Learning_fundamentals_track_${index + 1}`}
              className="bg-gray-100 rounded-xl w-[210px] h-[205px] py-4 px-3.5 flex flex-col gap-4"
            >
              <div className="flex items-center w-fit bg-[#88DB1B] rounded-full py-1 px-2 gap-1">
                <MdHdrStrong className="text-white w-2 h-2" />
                <span className="font-bold text-[8px] text-white">TRACKS {index+1}</span>
              </div>
              <h2 className="font-normal text-left text-xs">
                {item.title}
              </h2>

              <div className="flex gap-3 items-center mb-1 ">
              {item.skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex items-center md:justify-between"
                >
                  <div className="flex flex-col items-center gap-2">
                    <i className="flex justify-center items-center w-3 h-3 md:w-4 md:h-4    ">
                      <img loading="lazy" src={skill.image} alt="" className="" />
                    </i>
                    {/* <span className="font-light tracking-wider text-[10px] md:text-xs w-14 text-center">
                      {skill.skill}
                    </span> */}
                  </div>
                </div>
              ))}
            </div>


              {/* === */}
              {/* <div className="flex gap-5">
                <img src={mongo} alt="" className="w-4 h-4" />
                <img src={node} alt="" className="w-4 h-4" />
                <img src={reactjs} alt="" className="w-4 h-4" />
              </div> */}
              {/* === */}


              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <MdVideoLibrary className="w-3.5 h-3.5 text-[#FF9F1C]" />
                  <span className="font-normal text-[10px] text-[#01010199]">
                    Live Mentorship
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TbFileFilled className="w-3.5 h-3.5 text-[#FF9F1C]" />
                  <span className="font-normal text-[10px] text-[#01010199]">
                    Hands On Projects
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <a href={`/course/title/${item.id}`} className="text-[#88DB1B] font-normal text-xs">
                  Know More
                </a>
                <MdKeyboardDoubleArrowRight className="w-3.5 h-3.5 text-[#FF9F1C]" />
              </div>
            </div>
          ))}
        </div>

        {/* ///////////////// */}


{/* ================= */}
{/* <IndividualTracksTwo itemShow={3}/> */}
{/* ================= */}


      </div>
    </div>
  );
};

export default Learning;