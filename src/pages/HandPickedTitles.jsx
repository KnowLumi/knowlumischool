import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import aboutbar from "../assets/about_bar1.png";
import aboutbar2 from "../assets/aboutbar.png"
// import image_one from "../assets/hero_img_1.jpg"
import { Button } from "@material-tailwind/react";
import {
  MdArrowForward,
  MdHdrStrong,
  MdOutlinePhoneCallback,
} from "react-icons/md";
// import { Link } from "react-router-dom";
// import WorkshopCard from "../landingpage/WorkshopCard";
import FirstCard from "/Images/first-card.jpg"
import SecondCard from "/Images/second-card.jpg"
import ThirdCard from "/Images/third-card.jpg"
import TimeIcon from "../landingpage/IconsJSX/TimeIcon"
import DateIcon from "../landingpage/IconsJSX/DateIcon"
import VenueIcon from "../landingpage/IconsJSX/VenueIcon"
import FullDay from "../landingpage/IconsJSX/FullDay"
import { Link } from "react-router-dom";

function HandPickedTitles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogContent = [
    {
      id: 1,
      title: "Level Up After Graduation",
      bold: "For Graduates & Beyond",
      description:
        "Take your tech career to the next level with advanced courses tailored for industry success. Master tools and frameworks to stay ahead.",
      image: FirstCard,
      link: "/course/1"
      
    },
    {
      id: 2,
      title: "Skill Up While You Study",
      bold: "For Current Engineering Students",
      description:
        "Still in college? Turn your years of study into real-world skills with hands-on courses in software development. Learn to create, innovate, and lead in tech, starting now!",
      image: SecondCard,
      link: "/course/2"
    },
    {
      id: 3,
      title: "Launch Your Startup Dream",
      bold: "For Every one",
      description:
        "  Whether you're in college or a graduate, our program equips you to transform your vision into a thriving business. From ideation to scaling, we'll guide your entrepreneurial path.",
      image: ThirdCard,
      link: "/coming-soon"
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogContent.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, [blogContent.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div id="explore" className="bg-white min-h-screen">
      <div className="w-full flex justify-start bg-white">
        <img
          src={aboutbar}
          className="w-full md:w-fit h-8 md:h-16 rotate-180"
          alt="Decorative bar"
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button className="flex justify-around items-center gap-2 font-archivo text-sm md:text-lg text-[#01010199] bg-[#F7F7F7] border border-[#01010108] rounded-full tracking-wider px-4 py-2">
          <MdHdrStrong className="w-4 h-4 p-0 text-[#88DB1B]" />
          START YOUR JOURNEY
        </Button>
      </div>

      <div className="grid lg:flex lg:p-16 lg:pb-0 justify-center items-center mt-8 mb-0 gap-6 ">
        {/* First Section */}
        <div className="w-full flex flex-col justify-center items-center p-4 max-w-xl gap-4">
          <h3 className="font-light text-2xl md:text-4xl lg:text-6xl">
            Program Open For Enrollment
          </h3>
          <p className="mt-4 text-sm md:text-base leading-loose">
            Get insights directly from people who have been there and done that.
            These masterclasses not only provide directions to reach your career
            goals but also keep you inspired to dream without limitations and
            achieve them.
          </p>
          {/* <a href="#" className="mt-4">
            <Button className="rounded-full flex border border-black bg-white items-center gap-3 capitalize font-archivo font-medium text-xs md:text-sm text-black py-2 px-4">
              Request a Callback
              <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                <MdOutlinePhoneCallback />
              </i>
            </Button>
          </a> */}
        </div>

        {/* Second Section - Animated */}
        <div className="w-[50%] h-[80%] p-4 relative flex flex-col justify-center items-center">
          <div className="w-full h-auto">
            <h1 className="text-center text-5xl font-light tracking-tight text-bold mb-2">Workshop</h1>
          </div>
          <AnimatePresence mode="wait">
            {blogContent.map((blog, index) =>
              index === currentIndex ? ( // Render only the card matching the current index
                <motion.div
                  key={blog.id || index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-xl mx-auto flex justify-center items-center mt-[15%] md:mt-4"
                >
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    {/* Dynamic Image */}
                    <div className="relative bg-gray-100 h-48 flex justify-center items-center">
                      <img
                        src={blog.image} // Use the dynamic image from `blogContent`
                        alt={blog.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="p-4">
                      {/* Dynamic Heading */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-black">{blog.title}</span>
                      </div>

                      {/* Dynamic Subheading */}
                      <p className="text-red-600 text-sm font-medium mb-4">
                        8 hours left at this price
                      </p>

                      {/* Register Button */}
                      <div className="flex flex-col gap-3">
                        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-700 transition">
                          Register Now
                        </button>
                      </div>

                      {/* Dynamic Features Section */}
                      <div className="mt-4">
                        <h3 className="text-gray-700 font-semibold mb-2">More details:</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-center">
                            <span className="w-5 h-5 flex items-center justify-center mr-2">
                              <TimeIcon />
                            </span>
                            11 AM
                          </li>
                          <li className="flex items-center">
                            <span className="w-5 h-5 flex items-center justify-center mr-2">
                              <DateIcon />
                            </span>
                            28 January 2025
                          </li>
                          <li className="flex items-center">
                            <span className="w-5 h-5 flex items-center justify-center mr-2">
                              <VenueIcon />
                            </span>
                            Kochi
                          </li>
                          <li className="flex items-center">
                            <span className="w-5 h-5 flex items-center justify-center mr-2">
                              <FullDay />
                            </span>
                            Full Day Workshop
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : null // Hide other cards
            )}
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex mt-4 gap-2">
            {blogContent.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"
                  }`}
                initial={{ scale: 1 }}
                animate={{
                  scale: index === currentIndex ? 1.3 : 1,
                  opacity: index === currentIndex ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>


      </div>
      <div id="programs"></div>

      {/* Third Section */}
      <div className="w-full flex flex-col justify-center align-center md:mt-[10rem]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-center mb-4">Programs</h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center mt-8">
        {blogContent.map((data, index) => (
          <div
            key={index}
            className="w-full md:w-[30%] max-w-lg  xl:h-[28rem] 2xl:h-[10%]  h-[35rem] p-2"
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl hover:shadow-gray-200 border border-[#88DB1B]">
              <div className="w-full h-[30vh] aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={data.image}
                  alt={`${data.title} thumbnail`}
                  className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover object-center transition duration-200 w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-center font-bold text-xl text-zinc-700">
                  {data.title}
                </h2>
                <h2 className="text-center font-bold text-lg text-gray-700">
                  {data.bold}
                </h2>
                <h2 className="font-normal text-center text-sm text-zinc-500">
                  {data.description}
                </h2>
                <div className="flex flex-col md:flex-row gap-x-4 my-6 justify-center items-center">
                  <Button className="w-60 lg:w-auto md:w-72 rounded-full flex border border-black bg-white items-center justify-center gap-3 capitalize font-archivo font-medium text-[14px] text-black py-2 px-4">
                    Request a Callback
                    <i className="flex w-6 h-6 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                      <MdOutlinePhoneCallback />
                    </i>
                  </Button>
                  <a href={data.link}>
                    <Button className="w-60 lg:w-auto md:w-64 rounded-full bg-black flex items-center justify-center gap-3 capitalize font-archivo font-medium  py-2 pr-2 mt-4 md:mt-0">
                      Know More
                      <i className="flex icon w-6 h-6 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
                        <MdArrowForward />
                      </i>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end  bg-white mt-6">
        <img
          src={aboutbar}
          className="w-full md:w-fit h-8 md:h-16 "
          alt="Decorative bar"
        />
      </div>

      {/* Fourth section : Mentorship Program card */}
      {/* <WorkshopCard /> */}

      {/* Fourth Section */}
      {/* <div className="flex items-center justify-center mt-12 mb-6">
        <Button className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium  py-2 pr-2 pl-6 border border-gray-600 text-white">
          View All Programs
          <i className="flex icon w-6 h-6 text-black bg-white border border-[#0101010D] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
      </div> */}
    </div>
  );
}

export default HandPickedTitles;

