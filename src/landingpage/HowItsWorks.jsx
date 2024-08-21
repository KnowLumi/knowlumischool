import React from "react";
import aboutbar from "../assets/about_bar1.png";

export default function HowItsWorks() {
  return (
    <div className="flex flex-col">
    <svg
      width="1280"
      height="197"
      viewBox="0 0 1280 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full hidden md:block translate-y-[8.7rem]"
    >
      <path
        d="M-30 90C-30 76.7452 -19.2548 66 -6 66H640H938.473C946.322 66 953.675 62.1622 958.163 55.723L989.837 10.277C994.325 3.83784 1001.68 0 1009.53 0L1286 0C1299.25 0 1310 10.7452 1310 24V173C1310 186.255 1299.25 197 1286 197H-6.00004C-19.2549 197 -30 186.255 -30 173V90Z"
        fill="#010101"
      />
    </svg>
    <svg
      width="390"
      height="228"
      viewBox="0 0 390 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block md:hidden translate-y-[11.5rem]"
    >
      <path
        d="M-15 47.4823C-15 37.5411 -6.94112 29.4822 3 29.4822H115H184.13C190.015 29.4822 195.528 26.6059 198.894 21.7794L208.712 7.70285C212.078 2.87633 217.591 0 223.476 0H386C395.941 0 404 8.05887 404 18V210C404 219.941 395.941 228 386 228H3.00001C-6.94112 228 -15 219.941 -15 210V47.4823Z"
        fill="#010101"
      />
    </svg>

    <div className="bg-black font-archivo flex flex-col z-10 items-center h-full">
      <div className="flex flex-col items-center gap-3 md:gap-6 my-12 mx-16 text-center">
        {/* <span className="text-[#88DB1B] font-bold text-xl">Wall of Love</span> */}
        <span className="text-white font-medium tracking-wide text-2xl md:text-5xl">
          How its Works
        </span>
      </div>
     
     {/* body */}
    </div>
    <svg
      width="1280"
      height="197"
      viewBox="0 0 1280 197"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full hidden md:block -translate-y-[8.7rem] rotate-180"
    >
      <path
        d="M-30 90C-30 76.7452 -19.2548 66 -6 66H640H938.473C946.322 66 953.675 62.1622 958.163 55.723L989.837 10.277C994.325 3.83784 1001.68 0 1009.53 0L1286 0C1299.25 0 1310 10.7452 1310 24V173C1310 186.255 1299.25 197 1286 197H-6.00004C-19.2549 197 -30 186.255 -30 173V90Z"
        fill="#010101"
      />
    </svg>
    <svg
      width="390"
      height="228"
      viewBox="0 0 390 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block md:hidden -translate-y-[11.5rem] rotate-180"
    >
      <path
        d="M-15 47.4823C-15 37.5411 -6.94112 29.4822 3 29.4822H115H184.13C190.015 29.4822 195.528 26.6059 198.894 21.7794L208.712 7.70285C212.078 2.87633 217.591 0 223.476 0H386C395.941 0 404 8.05887 404 18V210C404 219.941 395.941 228 386 228H3.00001C-6.94112 228 -15 219.941 -15 210V47.4823Z"
        fill="#010101"
      />
    </svg>
  </div>
  );
}
