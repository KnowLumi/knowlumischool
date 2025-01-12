import {
  MdDiamond,
  MdArrowForward,
  MdOutlineFileDownload,
} from "react-icons/md";
import { Button } from "@material-tailwind/react";
import IndividualCourseData from "../individualPage/individualCourseData";

const SkillsCovered = (props) => {
  const { tracks, id } = props;
  const skills = tracks[id].skills

  return (
    <div className="flex flex-col gap-12 py-6 md:py-9 px-3 md:px-12 md:mx-20 mx-6 my-8 bg-white rounded-3xl">
      <div className="flex gap-4 items-center">
        <i className="flex justify-center items-center w-11 h-11 bg-[#DFDFD799] rounded-full p-2.5">
          <MdDiamond className="w-5 h-5" />
        </i>
        <h3 className="font-normal text-2xl md:text-4xl text-[#010101E5]">
          Skills covered
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 justify-between items-center">
        {skills.map((skill, index) => (
          <div
            key={`skill-${index}`}
            className="flex items-center rounded-xl bg-[#F7F7F7] gap-3 md:gap-8 p-3 md:p-4 w-72 md:w-[13.5rem]"
          >
            <img src={skill.image} alt="" className="flex justify-center object-contain items-center rounded-full w-11 h-11 md:w-14 md:h-14 p-2 bg-[#DFDFD799]" />
            <span className="font-light tracking-wider text-[16px]">
              {skill.skill}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-fit md:flex-row gap-6 md:gap-11 items-start md:items-center">
        <Button className="rounded-full flex items-center gap-3 capitalize font-archivo text-sm tracking-widest font-medium text-[16px] bg-black text-white py-2 pr-2 pl-6">
          ENROLL NOW
          <i className="flex w-8 h-8 text-white -rotate-45 border border-[#FFFFFF33] bg-[#FFFFFF4D] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
        <Button className="rounded-full flex items-center gap-3 font-archivo bg-[#88DB1B] text-white py-2 pr-2 pl-6">
          <span className="text-sm tracking-widest font-medium capitalize">
            Need more info? Download the Brochure
          </span>
          <i className="flex w-8 h-8 text-white border border-[#FFFFFF33] bg-[#FFFFFF4D] justify-center items-center rounded-full">
            <MdOutlineFileDownload />
          </i>
        </Button>
      </div>
    </div>
  );
};

export default SkillsCovered;