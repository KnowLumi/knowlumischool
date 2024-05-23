import { Button } from "@material-tailwind/react";
import {
  MdHdrStrong,
  MdArrowForward,
  MdOutlinePhoneCallback,
} from "react-icons/md";
import line1 from "./Process_svg/line1.svg";
import Learning from "./Process_Components/Learning";
import PlacementAssistance from "./Process_Components/PlacementAssistance";
import CommunityEngagement from "./Process_Components/CommunityEngagement";
import Earning from "./Process_Components/Earning";
import "./landing.css";
import cash from "./Process_svg/cash.png";
const Process = () => {
  const Processes = [
    <Learning key={"process-1"} />,
    <CommunityEngagement key={"process-2"} />,
    <PlacementAssistance key={"process-3"} />,
    <Earning key={"process-4"} />,
  ];
  return (
    <div className="flex flex-wrap w-full px-8 md:px-16 relative">
      <div className="flex flex-col gap-10 md:absolute z-10 left-16 top-0">
        <div className="flex items-center w-fit bg-white rounded-full py-2 px-6 gap-4">
          <MdHdrStrong className="text-[#4258BE]" />
          <span className="font-bold text-xs text-[#01010199]">
            THE PROCESS
          </span>
        </div>
        <span className="w-72 md:w-80 font-light text-5xl">
          How Knowlumi Works
        </span>
        <div className="flex flex-col  text-sm">
          <p className="md:w-[22.75rem] font-light">
            Join the program and turn dreams into reality with expert mentors
            and top resources!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6">
            Enroll Now
            <i className="flex icon w-8 h-8 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
              <MdArrowForward />
            </i>
          </Button>
          <Button
            className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] text-black py-2 pr-2 pl-6"
            variant="outlined"
          >
            Contact Us
            <i className="flex w-8 h-8 text-black border border-[#0101010D] bg-[#01010133] justify-center items-center rounded-full">
              <MdOutlinePhoneCallback />
            </i>
          </Button>
        </div>
      </div>
      <div className="w-full  flex flex-col process  h-full md:h-[32rem] md:overflow-y-scroll">
        <div className="w-full flex flex-col items-end">
          <div className="flex flex-col w-full md:w-[39rem] h-full gap-6 py-12">
            <img src={line1} className="w-full" alt="" />
            <div className="flex w-full">
              <div className="flex flex-col gap-6 w-full">
                {Processes.map((process, i) => (
                  <div
                    key={`p_no_${i}`}
                    className="flex md:gap-3 border-l-[3px] border-dashed border-l-[#4258BE]"
                  >
                    <div className="flex flex-col h-fit">
                      <i className="rounded-full -translate-x-6 md:-translate-x-7 h-10 w-10 md:w-14 md:h-14 bg-[#4258BE] flex justify-center items-center text-white font-extrabold">
                        {i + 1}
                      </i>
                    </div>
                    {process}
                  </div>
                ))}
                <div className="w-full">
                  <div className="h-4 w-4 rounded-full bg-[#4258BE] -translate-x-1.5 -translate-y-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:action-line  w-80 relative md:w-[71rem] h-7 md:h-20 bg-cover md:bg-contain bg-no-repeat flex flex-col justify-end">
            <div className="md:absolute left-0 top-6 -translate-x-24 md:bg-[#F7F7F7] flex gap-3.5 items-center z-10">
              <div className="flex gap-7 py-4 px-6 -rotate-90 md:rotate-0 bg-[#4258BE] rounded-lg">
                <img src={cash} className="w-14 h-14" alt="" />
                <div className="flex flex-col w-[11.25rem] text-white">
                  <h4 className="text-base font-bold leading-6 text-left">
                    FREELANCE & EARN
                  </h4>
                  <span className="text-sm font-light leading-5 text-left">
                    Get Freelance opportunities on the go
                  </span>
                </div>
              </div>
              <svg
                width="150"
                height="18"
                viewBox="0 0 150 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="process-line hidden md:block"
              >
                <path
                  d="M2 7.5C1.17157 7.5 0.5 8.17157 0.5 9C0.5 9.82843 1.17157 10.5 2 10.5L2 7.5ZM135 10.5L150 17.6603L150 0.339758L135 7.50001L135 10.5ZM7.28571 10.5C8.11414 10.5 8.78571 9.82843 8.78571 9C8.78571 8.17157 8.11414 7.5 7.28571 7.5L7.28571 10.5ZM17.8571 7.5C17.0287 7.5 16.3571 8.17157 16.3571 9C16.3571 9.82843 17.0287 10.5 17.8571 10.5L17.8571 7.5ZM28.4286 10.5C29.257 10.5 29.9286 9.82843 29.9286 9C29.9286 8.17158 29.257 7.5 28.4286 7.5L28.4286 10.5ZM39 7.5C38.1716 7.5 37.5 8.17158 37.5 9C37.5 9.82843 38.1716 10.5 39 10.5L39 7.5ZM49.5714 10.5C50.3999 10.5 51.0714 9.82843 51.0714 9C51.0714 8.17158 50.3999 7.5 49.5714 7.5L49.5714 10.5ZM60.1429 7.50001C59.3144 7.50001 58.6429 8.17158 58.6429 9C58.6429 9.82843 59.3144 10.5 60.1429 10.5L60.1429 7.50001ZM70.7143 10.5C71.5427 10.5 72.2143 9.82843 72.2143 9.00001C72.2143 8.17158 71.5427 7.50001 70.7143 7.50001L70.7143 10.5ZM81.2857 7.50001C80.4573 7.50001 79.7857 8.17158 79.7857 9.00001C79.7857 9.82843 80.4573 10.5 81.2857 10.5L81.2857 7.50001ZM91.8571 10.5C92.6856 10.5 93.3571 9.82844 93.3571 9.00001C93.3571 8.17158 92.6856 7.50001 91.8571 7.50001L91.8571 10.5ZM102.429 7.50001C101.6 7.50001 100.929 8.17158 100.929 9.00001C100.929 9.82844 101.6 10.5 102.429 10.5L102.429 7.50001ZM113 10.5C113.828 10.5 114.5 9.82844 114.5 9.00001C114.5 8.17158 113.828 7.50001 113 7.50001L113 10.5ZM123.571 7.50001C122.743 7.50001 122.071 8.17158 122.071 9.00001C122.071 9.82844 122.743 10.5 123.571 10.5L123.571 7.50001ZM134.143 10.5C134.971 10.5 135.643 9.82844 135.643 9.00001C135.643 8.17158 134.971 7.50001 134.143 7.50001L134.143 10.5ZM144.714 7.50001C143.886 7.50001 143.214 8.17159 143.214 9.00001C143.214 9.82844 143.886 10.5 144.714 10.5L144.714 7.50001ZM2 10.5L7.28571 10.5L7.28571 7.5L2 7.5L2 10.5ZM17.8571 10.5L28.4286 10.5L28.4286 7.5L17.8571 7.5L17.8571 10.5ZM39 10.5L49.5714 10.5L49.5714 7.5L39 7.5L39 10.5ZM60.1429 10.5L70.7143 10.5L70.7143 7.50001L60.1429 7.50001L60.1429 10.5ZM81.2857 10.5L91.8571 10.5L91.8571 7.50001L81.2857 7.50001L81.2857 10.5ZM102.429 10.5L113 10.5L113 7.50001L102.429 7.50001L102.429 10.5ZM123.571 10.5L134.143 10.5L134.143 7.50001L123.571 7.50001L123.571 10.5Z"
                  fill="#4258BE"
                />
              </svg>
            </div>
            <i className="w-3 md:w-4 h-3 md:h-4 rounded-full hidden md:block bg-[#88DB1B] enroll-anime" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
