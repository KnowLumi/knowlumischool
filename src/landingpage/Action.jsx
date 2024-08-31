import "./landing.css";
import { MdArrowForward } from "react-icons/md";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Avatar } from "@material-tailwind/react";
import actionbottom from "../assets/action_bottom.png";
import "./animations.css";
import { useNavigate } from "react-router-dom";
const Action = () => {

  const navigate = useNavigate()
  const navigateTOCommunity = () => {
    navigate("/community")
    window.scrollTo(0,0)
  }
  return (
    <div className="flex flex-col-reverse md:flex-col w-full mb-12 items-center font-archivo mt-24">
      <img
        src={actionbottom}
        className="w-80 block md:hidden -translate-y-5"
        alt=""
      />
      <div className="z-10 w-80 md:w-[71rem] md:h-[22rem] action-banner flex flex-col bg-cover mt-12 md:mt-0 md:bg-contain bg-no-repeat">
        <div className="w-full hidden md:flex justify-end gap-8 items-center pr-8 py-1.5">
          <svg
            className="rotate-90"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 13.3333L7 8.39959L0 13.3333L0 10.9158L7 5.98209L14 10.9158V13.3333ZM14 7.46219L7 2.52853L0 7.46219L0 5.04469L7 0.111031L14 5.04469V7.46219Z"
              fill="url(#paint0_linear_268_2834)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_268_2834"
                x1="7"
                y1="10.1736"
                x2="7"
                y2="-2.07645"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.924" stopColor="white" />
                <stop offset="1" stopColor="#737373" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <i className="bg-[#F7F7F7] w-10 h-[30px] rounded-full flex justify-center items-center">
            <AiOutlineDoubleRight className="text-black w-5 h-5 action-arrow-black" />
          </i>
          <svg
            className="rotate-90"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 13.3333L7 8.39959L0 13.3333L0 10.9158L7 5.98209L14 10.9158V13.3333ZM14 7.46219L7 2.52853L0 7.46219L0 5.04469L7 0.111031L14 5.04469V7.46219Z"
              fill="url(#paint0_linear_268_2834)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_268_2834"
                x1="7"
                y1="10.1736"
                x2="7"
                y2="-2.07645"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.924" stopColor="white" />
                <stop offset="1" stopColor="#737373" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {/* <AiOutlineDoubleRight className="w-6 h-6 action-arrow-white" /> */}
        </div>
        <div className="flex flex-col md:flex-row w-full text-[#F7F7F7]">
          <div className="people bg-contain bg-no-repeat w-80 md:w-[22.4rem] h-[17.35rem] md:h-[19.1rem]  md:mt-0.5 flex items-center justify-center">
            {/* <BsDiscord className="text-[#F7F7F7] w-14 h-14 -translate-y-3" /> */}
          </div>
          <div className="flex flex-col text-wrap px-8 w-full bg-black md:bg-transparent md:w-[44.5rem]">
            <div className="flex flex-col gap-4 pt-6 md:pt-3 pb-3 border-b border-b-[#FFFFFF80] md:text-[#F7F7F7]">
              <h1 className="font-bold text-[16px] md:text-2xl tracking-wider">
                Join Our Thriving Community of Ambitious Learners!
              </h1>
              <p className=" font-light text-xs md:text-[16px] leading-6">
                Join KnowLumi to tap into a vibrant network of learners,
                mentors, and industry professionals. Connect, collaborate, and
                thrive with peers who share your passion for corporate roles,
                startups, higher studies, and civil service exams. Let’s shape a
                successful future together!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-5">
              <a href="/community" className="flex items-center w-fit bg-white rounded-full py-1 pr-1 pl-6 gap-2 border border-[#01010126]">
                <span className="text-sm font-medium text-black">
                  Join Our community
                </span>
                <i className="flex w-8 h-8 -rotate-45 text-white border border-[#0101010D] bg-[#88DB1B] justify-center items-center rounded-full">
                  <MdArrowForward />
                </i>
              </a>
              <div className="flex items-center gap-3.5">
                <div className="flex items-center -space-x-2">
                  {new Array(3).fill("").map((_, i) => (
                    <Avatar
                      variant="circular"
                      key={i}
                      size="xs"
                      alt="user 1"
                      className=" border cursor-pointer hover:z-10 focus:z-10"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                  ))}
                </div>
                <span className="text-[#F7F7F7] font-normal text-[16px] tracking-wide">
                  1700+ members
                </span>
                <BsWhatsapp className="text-[#F7F7F7] w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
