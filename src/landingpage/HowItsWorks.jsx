import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import phaseOne from "../assets/phase1.png";
import phaseTwo from "../assets/phase2.png";
import phaseThree from "../assets/phase3.png";
import phaseFour from "../assets/phase4.png";

import iconOne from "../assets/icon1.png";
import iconTwo from "../assets/icon2.png";
import iconThree from "../assets/icon3.png";
import iconFour from "../assets/icon4.png";
import { MdHdrStrong } from "react-icons/md";
import { Button } from "@material-tailwind/react";

const PhaseCardData = [
  {
    primaryImage: phaseOne,
    features: [
      {
        title: "AI-Powered Interest Identification",
        caption:
          "Utilize our AI-powered platform to identify your area of interest and passion.",
      },
      {
        title: "Introduction to Various Fields",
        caption:
          "Explore careers in corporate roles, startups, higher studies, civil services, and more.",
      },
      {
        title: "Interactive Sessions",
        caption:
          "Participate in engaging sessions that provide insights into each field.",
      },
      {
        title: "Guidance and Resources",
        caption:
          "Access resources and expert guidance to understand your options and identify your interests and strengths",
      },
    ],
  },
  // second
  {
    primaryImage: phaseThree,
    features: [
      {
        title: "Clarify Your Objectives",
        caption:
          "Identify and articulate your short-term and long-term career goals.",
      },
      {
        title: "AI-Driven Goal Setting",
        caption:
          "Use our AI platform to set realistic and achievable goals tailored to your interests",
      },
      {
        title: "Expert Mentorship",
        caption:
          "Collaborate with experienced mentors to refine and solidify your goals.",
      },
      {
        title: "Strategic Planning",
        caption:
          "Develop a strategic plan to achieve your goals with clear milestones.",
      },
      {
        title: "Regular Check-Ins:",
        caption:
          "Monitor your progress and make adjustments with ongoing support from mentors.",
      },
    ],
  },
  // third
  {
    primaryImage: phaseTwo,
    features: [
      {
        title: "Tailored Learning Paths",
        caption:
          "Follow a curriculum customized to your chosen field and goals.",
      },
      {
        title: "Expert Instruction",
        caption:
          "Benefit from the knowledge and experience of our seasoned faculty.",
      },
      {
        title: "Hands-On Experience",
        caption: "Engage in practical projects and real-world applications.",
      },
      {
        title: "Career Guidanc",
        caption:
          "Get professional advice and support through our career counseling services.",
      },
    ],
  },
  // fourth
  {
    primaryImage: phaseFour,
    features: [
      {
        title: "Goal Achievement:",
        caption: "Follow a structured path to reach your professional goals.",
      },
      {
        title: "Ongoing Mentorship:",
        caption:
          "Receive continuous support and guidance from experienced mentors.",
      },
      {
        title: "Success Tracking",
        caption:
          " Monitor your progress and celebrate milestones along the way.",
      },
      {
        title: "Skill Refinement",
        caption:
          "Refine your skills with targeted feedback and advanced resources.",
      },
      {
        title: "Career Advancement",
        caption:
          "Access exclusive opportunities for career growth and development.",
      },
    ],
  },
];

const phaseLabel = [
  "Explore Your Pathways",
  "Set Your Goals",
  "Navigate to Your Goals",
  "Achieve Your Goals",
];

export default function HowItsWorks() {
  const sectionRef = useRef(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const phaseRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observers = PhaseCardData.map((_, index) => {
      const ref = phaseRefs.current[index];
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentPhase(index);
            setIsTransitioning(false);
          }, 0); // Adjust this duration to match your transition duration
        }
      }, observerOptions);
      if (ref) observer.observe(ref);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);



  return (
    <div id="howitswork" className="flex flex-col">
      {/* SVG Backgrounds */}
      
      <div className="bg-black font-archivo flex flex-col z-10 items-center min-h-screen">
      <div className="flex items-center justify-center mt-4">
        <Button className="flex justify-around items-center gap-2 font-archivo text-sm md:text-lg text-[#01010199] bg-[#F7F7F7] border border-[#01010108] rounded-full tracking-wider px-4 py-2">
          <MdHdrStrong className="w-4 h-4 p-0 text-[#88DB1B]" />
          How It's Work
        </Button>
      </div>
        <div className="flex flex-col items-center gap-3 md:gap-6 lg:my-12 p-2 lg:mx-16 text-center">
          <div className="text-center flex flex-col justify-center mx-auto items-center gap-4 top-0 lg:sticky z-50 bg-black mb-14 rounded-2xl">
            <span className="text-white font-medium tracking-wide text-2xl md:text-5xl">
              How Knowlumi Revolutionizes Engineering Education!
            </span>
            <span className="font-medium text-center text-white">
              Build Your Dream Career with Our AI-Powered Parallel Education
              System
            </span>
            <div className="hidden lg:flex mt-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    className={`p-3 text-center border-red-500 border border-b-0 transition-colors duration-300 
                      ${
                        index === 0
                          ? "rounded-l-3xl"
                          : index === 3
                          ? "rounded-r-3xl"
                          : ""
                      }
                      ${
                        currentPhase === index
                          ? "bg-[#FF6D25] text-white"
                          : "bg-white text-[#FF6D25]"
                      }`}
                  >
                    <span className="text-sm lg:text-lg font-bold">
                      Phase {index + 1}
                    </span>
                    <br />
                    <span className="text-xs lg:text-sm">
                      {phaseLabel[index]}
                    </span>
                  </button>
                  <IoMdArrowDropdown
                    className={`relative bottom-2 text-2xl ${
                      currentPhase === index ? "text-[#FF6D25]" : "text-black"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden grid gap-3">
            {PhaseCardData.map((data, index) => (
              <PhaseCard
                key={index}
                index={index}
                features={data.features}
                primaryImage={data.primaryImage}
              />
            ))}
          </div>

          <div className="relative z-0 lg:block hidden">
            <div className="sticky top-64">
              <div
                className={`transition-opacity duration-300 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <PhaseCard
                  features={PhaseCardData[currentPhase].features}
                  primaryImage={PhaseCardData[currentPhase].primaryImage}
                />
              </div>
            </div>
            {PhaseCardData.map((_, index) => (
              <div
                key={index}
                ref={(el) => (phaseRefs.current[index] = el)}
                className="min-h-screen"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const PhaseCard = ({ primaryImage, features,index }) => {
  return (
    <div
      style={{
        background: "linear-gradient(125.65deg, #FAFAFA 0.81%, #FFDFDF 100%)",
        borderRadius: "176.08px 26.41px 26.41px 26.41px",
      }}
      className="min-h-[550px] w-full max-w-5xl p-8 grid lg:flex items-center gap-0 lg:gap-3"
    >
      <div className="lg:w-1/2">
        <div className="flex lg:hidden flex-col items-end mb-4">
          <h3>Phase {index+1}</h3>
          <h3 className="font-bold text-lg">{phaseLabel[index]}</h3>
        </div>
        <img
          src={primaryImage}
          alt="Phase illustration"
          className="w-full h-40 lg:h-80 object-contain rounded-xl " // Adjusted for a consistent image size
        />
      </div>
      <div className="flex flex-col lg:gap-2 lg:w-96">
        {features.map((data, featureIndex) => (
          <div key={featureIndex} className="flex gap-6 items-start">
            <img
              src={iconFour} // Updated to use the correct icon for each feature
              alt={`Icon for ${data.title}`}
              className="w-10 h-10 rounded-full rotate-90"
            />
            <div className="flex  flex-col items-start">
              <h3 className="font-semibold text-lg text-gray-800 text-left">
                {data.title}
              </h3>
              <span className="text-md text-gray-600 text-left leading-relaxed">
                {data.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
