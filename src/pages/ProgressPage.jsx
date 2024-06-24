import Footer from "../landingpage/Footer";
import Navigation from "../landingpage/Navigation";
import { MdArrowForward, MdLock } from "react-icons/md";
import "../landingpage/landing.css";
import { Button, Progress } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { progress } from "./helpers/progresshelpers";

const ProgressPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <Navigation />
      <div className="flex flex-col mx-6 md:mx-20 gap-8 mt-20 md:mt-28">
        <h1 className="font-medium text-4xl md:text-6xl">My Progress</h1>
        <p className="md:w-[47.625rem] text-xs md:text-sm tracking-wider">
          Monitor your journey from fundamentals to master tracks and
          placements. Track your progress and milestones as you advance towards
          your career goals with KnowLumi
        </p>
        <div className="flex w-full justify-evenly">
          {progress.map((item, i) => (
            <div
              key={`progress_c_${i + 1}`}
              className="rounded-2xl bg-white mb-12 md:w-[22.5rem] w-[19.75rem] flex flex-col pb-5 px-5"
            >
              <div className="relative w-[15.5rem] md:w-60 h-[7.75rem] md:h-32 bg-[#88DB1B66] mt-8 mb-4 md:mt-9 ml-3 rounded-xl">
                <div
                  style={{ backgroundImage: `url('${item.banner}')` }}
                  className="absolute flex justify-end items-start -translate-x-3  -translate-y-4 bg-contain bg-no-repeat w-72 md:w-72 h-[11.25rem] md:h-[9.5rem]"
                ></div>
              </div>
              <span className="font-normal text-[16px] tracking-wide mt-5">
                {item.title}
              </span>
              <span className="text-[#01010199] font-light text-xs my-4">
                {item.desc}
              </span>
              <div className="flex gap-4 items-center">
                {item.skills.map((skill, index) => (
                  <div
                    key={`skill-${index}`}
                    className="flex items-center md:justify-between"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <i className="flex justify-center items-center w-5 h-5 md:w-7 md:h-7">
                        <img src={skill.image} alt="" className="" />
                      </i>
                      <span className="font-light tracking-wider text-[10px] md:text-xs w-14 text-center">
                        {skill.skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 my-5">
                <span className="text-[#696D6E] text-xs font-normal">
                  {item.completed}% Complete
                </span>
                <Progress value={item.completed} size="sm" color="indigo" />
              </div>
              <div className="flex items-center gap-3 mt-3 w-full">
                <Button
                  disabled={item.isLocked}
                  onClick={() => {
                    navigate("/learning");
                  }}
                  className="flex bg-[#88DB1B]  justify-center items-center gap-2 w-full rounded-lg text-white capitalize font-archivo font-semibold text-sm py-2.5 px-7"
                >
                  <span className="w-fit">
                    {item.isLocked
                      ? `Complete ${progress[i - 1].title} to Unlock`
                      : "Continue"}
                  </span>
                  {item.isLocked ? (
                    <MdLock className="w-4 h-4" />
                  ) : (
                    <MdArrowForward className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPage;
