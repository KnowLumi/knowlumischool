import { Button } from "@material-tailwind/react";
import { BsFillChatLeftFill } from "react-icons/bs";
import footer1 from "../assets/footer1.png";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <div className="flex flex-col font-archivo bg-gray-50">
      <img src={footer1} alt="" className="translate-y-32  w-full h-full" />
      <footer className="bg-black flex flex-col items-center">
        <div className="flex items-center justify-between px-2 md:px-20 w-full h-[31rem]">
          <div className="flex flex-col gap-11">
            <span className="text-white font-semibold text-2xl tracking-wide">
              Got any Doubts?
            </span>
            <Button className="flex px-8 w-72 justify-center items-center text-sm tracking-wide rounded-xl font-archivo font-bold gap-3 text-black capitalize bg-[#88DB1B]">
              <BsFillChatLeftFill className="w-4 h-4 text-black" />
              Drop Us a Message
            </Button>
          </div>
          <div className="flex flex-col items-end gap-9 text-white opacity-70 w-fit md:w-44">
            <span>Terms</span>
            <span>Privacy Policy</span>
            <div className="flex justify-between items-center w-full">
              <RiInstagramFill className="text-[#88DB1B] h-5 w-5 " />
              <RiFacebookBoxFill className="text-[#88DB1B] h-5 w-5" />
              <RiYoutubeFill className="text-[#88DB1B] h-5 w-5" />
              <RiTwitterXFill className="text-[#88DB1B] h-5 w-5" />
            </div>
          </div>
        </div>
        <span className="text-white opacity-50 py-5 font-semibold text-xs tracking-[0.4em]">
          © Copyright 2024 KnowLumi - All Rights Reserved
        </span>
      </footer>
    </div>
  );
};

export default Footer;
