import { Button, IconButton } from "@material-tailwind/react";
import enroll from "../assets/enroll.png";
import enroll1 from "../assets/enroll1.png";
import enroll2 from "../assets/enroll2.png";
import line from "../assets/enroll_line.png";
import logo from "../assets/enroll_logo.png";
import { MdHdrStrong } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
const Enroll = () => {
  return (
    <div className="flex flex-col items-center ">
      <div
        style={{ backgroundImage: `url('${line}')` }}
        className="w-[71rem] h-20 bg-blue-500 bg-contain bg-no-repeat flex flex-col justify-between"
      ></div>
      <div className="w-full h-full flex justify-center font-archivo">
        <div
          style={{ backgroundImage: `url('${enroll}')` }}
          className="w-[71rem] mx-12 bg-contain h-[40rem] bg-no-repeat flex flex-col justify-between p-8"
        >
          <div className="flex flex-col mt-12 gap-5">
            <Button className="bg-white rounded-full font-archivo gap-5 flex items-center w-fit py-2 px-6 ">
              <MdHdrStrong className="text-[#88DB1B]" />
              <span className="text-black opacity-60 font-bold text-xs">
                ENROLL NOW
              </span>
            </Button>
            <span className="md:w-[38.1rem] font-normal text-[4.5rem] leading-[4.9rem] text-white text-wrap">
              Ready to Ignite Your Future?
            </span>
          </div>
          <div
            style={{ backgroundImage: `url('${enroll1}')` }}
            className="bg-contain bg-no-repeat h-40 flex justify-between items-center"
          >
            <div className="flex flex-col justify-between gap-4 m-4">
              <div className="flex gap-4">
                <img src={logo} className="w-14 h-14" alt="" />
                <div className="flex flex-col w-96 text-wrap">
                  <span className="font-semibold text-xs md:text-sm uppercase">
                    KNOWLUMI
                  </span>
                  <p className="font-light text-xs md:text-sm">
                    With KnowLumi, we go beyond learning, empowering you to
                    create opportunities and achieve your goals.
                  </p>
                </div>
              </div>
              <Button
                variant="outlined"
                className=" capitalize font-archivo text-black p-1 border-gray-300  flex w-fit justify-end gap-3 items-center rounded-full"
              >
                <span className="font-medium text-[8px] md:text-xs">
                  Explore our programs
                </span>
                <IconButton className="bg-gray-200 border p-0 border-white rounded-full">
                  <IoArrowForwardSharp className="text-black -rotate-45 w-1.5 h-1.5 md:w-3.5 md:h-3.5" />
                </IconButton>
              </Button>
            </div>
            <div
              style={{ backgroundImage: `url('${enroll2}')` }}
              className="bg-contain mt-3 bg-no-repeat w-[29rem] h-16 flex items-center justify-evenly"
            >
              <span className="text-white font-bold tracking-wide text-lg">
                ENROLL NOW WITH KNOWLUMI
              </span>
              <IoArrowForwardSharp className="text-white -rotate-45 h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
