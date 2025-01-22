import { Button } from "@material-tailwind/react";
// import line from "../assets/enroll_line.png";
import logo from "../assets/enroll_logo.png";
import { MdHdrStrong } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
const Enroll = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      {/* <div
        style={{ backgroundImage: `url('${line}')` }}
        className="w-[71rem] h-20 bg-contain bg-no-repeat hidden md:flex flex-col justify-end"
      >
        <i className="w-4 h-4 rounded-full bg-[#88DB1B] translate-x-[70rem] -translate-y-[4rem] enroll-anime"></i>
      </div> */}
      <div className="w-full h-full flex justify-center font-archivo">
        <div className="enroll-banner w-80 md:w-[71rem] mx-0 md:mx-12 bg-contain h-[36rem] md:h-[40rem] bg-no-repeat flex flex-col justify-between p-4 md:p-8">
          <div className="flex flex-col mt-12 gap-5">
            <Button className="bg-white rounded-full font-archivo gap-5 flex items-center w-fit py-2 px-6 ">
              <MdHdrStrong className="text-[#88DB1B]" />
              <span className="text-black opacity-60 font-bold text-xs">
                ENROLL NOW
              </span>
            </Button>
            <span className="md:w-[38.1rem] font-normal w-[18rem] text-6xl md:text-[4.5rem] leading-[4.9rem] text-white text-wrap">
              Ready to Ignite Your Future?
            </span>
          </div>
          <div className="enroll1 bg-cover md:bg-contain bg-no-repeat h-[7.4rem] md:h-40  flex justify-between items-center">
            <div className="flex flex-col justify-between gap-4 mt-2 mx-1.5 md:mx-4">
              <div className="flex gap-4 items-center">
                <img src={logo} className="w-9 h-9 md:w-14 md:h-14" alt="" />
                <div className="flex flex-col w-56 md:w-96 text-wrap">
                  <span className="font-semibold text-xs md:text-sm uppercase">
                    KNOWLUMI
                  </span>
                  <p className="font-light text-[10px] md:text-sm">
                    With KnowLumi, we go beyond learning, empowering you to
                    create opportunities and achieve your goals.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Button
                  variant="outlined"
                  className="my-button capitalize font-archivo text-black py-[3px] pr-[3px] pl-[18px] border-gray-300 flex w-fit justify-end gap-3 items-center rounded-full"
                >
                  <span className="font-medium text-[8px] md:text-xs">
                    Request a callback
                  </span>
                  <i className="icon bg-gray-200 flex justify-center items-center border p-0 w-5 h-5 md:w-7 md:h-7 border-white rounded-full">
                    <IoArrowForwardSharp className="text-black  w-1.5 h-1.5 md:w-3.5 md:h-3.5" />
                  </i>
                </Button>
                
                <div className="enroll2 bg-cover md:bg-contain mt-3 bg-no-repeat w-[148px] rounded-lg md:w-[29rem] h-8 md:h-16 flex md:hidden justify-evenly pl-2 items-center translate-x-3 -translate-y-5">
                  <div className="text-white flex font-bold tracking-wide text-xs md:text-lg">
                    <span className="">ENROLL NOW&nbsp;</span>
                    <span className="hidden md:block"> WITH KNOWLUMI</span>
                  </div>
                  <IoArrowForwardSharp className="text-white -rotate-45 h-6 w-6" />
                </div>
              </div>
            </div>
            <a href="#explore">
            <div className="enroll2 bg-cover md:bg-contain mt-3 translate-x-2 bg-no-repeat w-[148px] rounded-lg md:w-[29rem] h-8 md:h-16 hidden md:flex justify-around items-center">
              <div className="text-white flex font-bold tracking-wide text-xs md:text-lg">
                <span className="">ENROLL NOW&nbsp;</span>
                <span className="hidden md:block"> WITH KNOWLUMI</span>
              </div>
              <IoArrowForwardSharp className="text-white -rotate-45 h-6 w-6" />
            </div>
            </a>
          </div>
        </div>
      </div>
      <div className="action-line w-80 relative md:w-[71rem] h-7 md:h-20 bg-cover md:bg-contain bg-no-repeat flex flex-col justify-end ">
        <i className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#88DB1B] enroll-anime" />
      </div>
    </div>
  );
};

export default Enroll;
