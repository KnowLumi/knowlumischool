import { BsFillChatLeftFill } from "react-icons/bs";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterXFill,
  RiWhatsappFill,
  RiDiscordFill,
  RiYoutubeFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { MdHdrStrong } from "react-icons/md";
import footer from "../assets/footer.png";
import logo1 from "/Images/knowlumi-brand.svg";
import { IconButton } from "@material-tailwind/react";

import "./landing.css";
import { Button } from "@material-tailwind/react";
const Footer = () => {
  return (
    <div id="contact" className="w-full flex flex-col font-archivo">
      <div className="w-full flex justify-end bg-transparent">
        <img
          src={footer}
          alt=""
          className="w-fit translate-y-0.5 h-10 md:h-20"
        />
      </div>
      <footer className="bg-[#DFDFD7] z-10 flex flex-col">
        <div className="flex flex-col md:flex-row border-b-2 border-b-gray-500 justify-between py-6 md:py-14 mx-8 md:mx-16">
          <div className="flex flex-col w-80 gap-8">
            <div className="flex items-center gap-2 p-1">
              <img src={logo1} className="" alt="" />
            </div>
            <p className="text-xs">
              With KnowLumi School, we go beyond learning, empowering you to create
              opportunities and achieve your goals.
            </p>

            <div className="flex items-center gap-8 text-black">
              <a
                href="https://www.instagram.com/knowlumiofficial?igsh=M3d2ZWR6YndhcXJk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VaRvShwGU3BScdXIfB15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappFill className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/knowlumi1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinFill className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@knowlumi?si=fiyxyEW6yADijX-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiYoutubeFill className="w-4 h-4" />
              </a>
            </div>
            {/* <button className="bg-white w-fit flex rounded-full items-center py-1 pr-1 pl-5 gap-1">
              <span className="font-medium text-xs">Drop us a message</span>
              <IconButton className="rounded-full bg-gray-300 w-7 h-7">
                <BsFillChatLeftFill className="text-black w-2.5 h-2.5" />
              </IconButton>
            </button> */}
          </div>
          <ul className="flex flex-col pt-6 md:py-14 items-start md:items-end gap-2">
            {footerLinks.map((link, index) => (
              <li
                key={`footer_link_${index}`}
                className="font-normal text-black opacity-60 footer-link"
              >
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between mx-8 md:mx-16 py-8">
          <span className="font-semibold opacity-40 text-xs tracking-widest">
            © Copyright 2024 KnowLumi School - All Rights Reserved
          </span>
          <Button className="bg-white font-bold text-xs lg:text-sm py-2 px-3 md:px-6 rounded-full gap-2 lg:gap-6 flex items-center">
            <MdHdrStrong className="text-[#88DB1B]" />
            <span className="text-black opacity-60 ">PRIVACY POLICY</span>
            <div className="w-2.5 h-2.5 bg-[#88DB1B] rounded-full"></div>
            <span className="text-black opacity-60">TERMS</span>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
const footerLinks = [
  { label: "Home", path: "" },
  { label: "Programs", path: "#explore" },
  { label: "Privacy Policy", path: "" },
  { label: "Contact Us", path: "#contact" }
];
