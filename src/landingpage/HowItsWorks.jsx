import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import aboutbar from "../assets/about_bar1.png";
import { TracingBeamDemo } from "./TracingBeamDemo";

import phaseOne from "../assets/phase1.png";
import phaseTwo from "../assets/phase2.png";
import phaseThree from "../assets/phase3.png";
import phaseFour from "../assets/phase4.png";

import iconOne from "../assets/icon1.png";
import iconTwo from "../assets/icon2.png";
import iconThree from "../assets/icon3.png";
import iconFour from "../assets/icon4.png";

const PhaseCardData = [
  {
    primaryImage: phaseOne,
    features: [
      {
        icon: iconOne,
        title: "Number Sense and Operations",
        caption:
          "Fluently compose and decompose numbers within 10 Understand addition and subtraction within 10",
      },
      {
        icon: iconTwo,
        title: "Geometry",
        caption:
          "Recognize 2D and 3D shapes Identify defining attributes of shapes (edges, vertices, cross sections, nets, etc.)",
      },
      {
        icon: iconThree,
        title: "Logic and Patterns",
        caption:
          "Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles",
      },
      {
        icon: iconFour,
        title: "Problem Solving",
        caption:
          "Learn tangram puzzles and practice creating shapes using tangram pieces Measure by iterating length units ",
      },
    ],
  },
  // second
  {
    primaryImage: phaseThree,
    features: [
      {
        icon: iconOne,
        title: "Number Sense and Operations",
        caption:
          "Fluently compose and decompose numbers within 10 Understand addition and subtraction within 10",
      },
      {
        icon: iconTwo,
        title: "Geometry",
        caption:
          "Recognize 2D and 3D shapes Identify defining attributes of shapes (edges, vertices, cross sections, nets, etc.)",
      },
      {
        icon: iconThree,
        title: "Logic and Patterns",
        caption:
          "Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles",
      },
      {
        icon: iconFour,
        title: "Problem Solving",
        caption:
          "Learn tangram puzzles and practice creating shapes using tangram pieces Measure by iterating length units ",
      },
    ],
  },
  // third
  {
    primaryImage: phaseTwo,
    features: [
      {
        icon: iconOne,
        title: "Number Sense and Operations",
        caption:
          "Fluently compose and decompose numbers within 10 Understand addition and subtraction within 10",
      },
      {
        icon: iconTwo,
        title: "Geometry",
        caption:
          "Recognize 2D and 3D shapes Identify defining attributes of shapes (edges, vertices, cross sections, nets, etc.)",
      },
      {
        icon: iconThree,
        title: "Logic and Patterns",
        caption:
          "Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles",
      },
      {
        icon: iconFour,
        title: "Problem Solving",
        caption:
          "Learn tangram puzzles and practice creating shapes using tangram pieces Measure by iterating length units ",
      },
    ],
  },
  // fourth
  {
    primaryImage: phaseFour,
    features: [
      {
        icon: iconOne,
        title: "Number Sense and Operations",
        caption:
          "Fluently compose and decompose numbers within 10 Understand addition and subtraction within 10",
      },
      {
        icon: iconTwo,
        title: "Geometry",
        caption:
          "Recognize 2D and 3D shapes Identify defining attributes of shapes (edges, vertices, cross sections, nets, etc.)",
      },
      {
        icon: iconThree,
        title: "Logic and Patterns",
        caption:
          "Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles",
      },
      {
        icon: iconFour,
        title: "Problem Solving",
        caption:
          "Learn tangram puzzles and practice creating shapes using tangram pieces Measure by iterating length units ",
      },
    ],
  },
];

export default function HowItsWorks() {
  const [currentPhase, setCurrentPhase] = useState(0);
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

      <div className="bg-black font-archivo flex flex-col z-10 items-center min-h-screen">
        <div className="flex flex-col items-center gap-3 md:gap-6 my-12 mx-16 text-center">
          <div className="text-center flex flex-col justify-center mx-auto items-center gap-4 top-0 sticky z-50 bg-black mb-14 rounded-2xl p-6">
            <span className="text-white font-medium tracking-wide text-2xl md:text-5xl">
              How Knowlumi Revolutionizes Engineering Education !
            </span>
            <span className="font-medium text-center text-white">
              Build Your Dream Career with Our AI-Powered Parallel Education
              System
            </span>
            <div className="flex mt-4 space-x-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <button
                  key={index}
                  className={`p-3 text-center first:rounded-l-3xl last:rounded-r-3xl border-red-500 border transition-colors duration-300 ${
                    currentPhase === index
                      ? "bg-[#FF6D25] text-white"
                      : "bg-white text-[#FF6D25]"
                  }`}
                >
                  <span className="text-lg font-bold">Phase {index + 1}</span>{" "}
                  <br />
                  <span className="text-sm">Explore your path ways</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-32">
            {PhaseCardData.map((data, index) => (
              <PhaseCard
                features={data.features}
                primaryImage={data.primaryImage}
                key={index}
                index={index}
                setCurrentPhase={setCurrentPhase}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <svg
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
      </svg> */}
    </div>
  );
}

const PhaseCard = ({ primaryImage, features, index, setCurrentPhase }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentPhase(index);
    }
  }, [inView, index, setCurrentPhase]);

  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(125.65deg, #FAFAFA 0.81%, #FFDFDF 100%)",
        borderRadius: "176.08px 26.41px 26.41px 26.41px",
      }}
      className="min-h-96 w-full max-w-4xl p-8 grid lg:flex items-center gap-8"
    >
      <div className="lg:w-1/2">
        <img
          src={primaryImage}
          alt="Phase illustration"
          className="w-full h-72 object-contain"
        />
      </div>
      <div className="flex flex-col gap-y-6 items-start lg:w-1/2">
        {features.map((data, featureIndex) => (
          <div key={featureIndex} className="flex gap-4 items-start">
            <img
              src={data.icon}
              alt={`Icon for ${data.title}`}
              className="w-12 h-12"
            />
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-xl">{data.title}</h3>
              <span className="text-left my-2 text-[#252525B2]">
                {data.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
