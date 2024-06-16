import "./landing.css";
import { MdArrowForward } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { Avatar } from "@material-tailwind/react";
import actionbottom from "../assets/action_bottom.png";
const Action = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col w-full mb-12 items-center font-archivo">
      <img src={actionbottom} className="w-80 block md:hidden -translate-y-5" alt="" />
      <div className="z-10 w-80 md:w-[71rem] md:h-[22rem] action-banner flex flex-col bg-cover mt-12 md:mt-0 md:bg-contain bg-no-repeat">
        <div className="w-full hidden md:flex justify-end gap-8 items-center pr-8 py-1.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M0 0L5.63847 8L0 16H2.76285L8.40133 8L2.76285 0H0ZM6.70978 0L12.3483 8L6.70978 16H9.47264L15.1111 8L9.47264 0H6.70978Z"
              fill="#F7F7F7"
            />
          </svg>
          <i className="bg-[#F7F7F7] h-8 rounded-full w-12 flex justify-center items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse"
            >
              <path
                d="M0 0L5.63847 8L0 16H2.76285L8.40133 8L2.76285 0H0ZM6.70978 0L12.3483 8L6.70978 16H9.47264L15.1111 8L9.47264 0H6.70978Z"
                fill="#010101"
              />
            </svg>
          </i>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L5.63847 8L0 16H2.76285L8.40133 8L2.76285 0H0ZM6.70978 0L12.3483 8L6.70978 16H9.47264L15.1111 8L9.47264 0H6.70978Z"
              fill="#F7F7F7"
            />
          </svg>
        </div>
        <div className="flex flex-col md:flex-row w-full text-[#F7F7F7]">
          <div className="people bg-contain bg-no-repeat w-80 md:w-[23.5rem] h-[17.35rem]  md:h-[19.1rem] flex items-center justify-center">
          </div>
          <div className="flex flex-col text-wrap px-8 w-full bg-black md:bg-transparent md:w-[44.5rem]">
            <div className="flex flex-col gap-4 pt-6 md:pt-3 pb-3 border-b border-b-[#FFFFFF80] md:text-[#F7F7F7]">
              <h1 className="font-bold text-[16px] md:text-2xl tracking-wider">
                Join Our Thriving Community of Ambitious Learners!
              </h1>
              <p className=" font-light text-xs md:text-[16px] leading-6">
                Discover a supportive network of learners, mentors, and
                professionals at KnowLumi. Connect, collaborate, and grow with
                like-minded individuals passionate about education and
                innovation. Together, let&apos;s build a brighter future!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-5">
              <button className="flex items-center w-fit bg-white rounded-full py-1 pr-1 pl-6 gap-2 border border-[#01010126]">
                <span className="text-sm font-medium text-black">
                  Join the community
                </span>
                <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-[#01010133] justify-center items-center rounded-full">
                  <MdArrowForward />
                </i>
              </button>
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
                <BsDiscord className="text-[#F7F7F7] w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
