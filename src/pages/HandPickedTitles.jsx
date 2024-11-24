import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import aboutbar from "../assets/about_bar1.png";
import image_one from "../assets/hero_img_1.jpg"
import { Button } from "@material-tailwind/react";
import {
  MdArrowForward,
  MdHdrStrong,
  MdOutlinePhoneCallback,
} from "react-icons/md";
import { Link } from "react-router-dom";

function HandPickedTitles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogContent = [
    {
      title: "Artificial Intelligence",
      bold: "Master the Future of Technology",
      description:
        "Dive into the world of AI and machine learning. Learn to develop intelligent systems, neural networks, and cutting-edge algorithms that are shaping the future of technology across industries.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "MERN Stack Development",
      bold: "Build Modern Web Applications",
      description:
        "Become a full-stack developer with MERN (MongoDB, Express.js, React, Node.js) stack. Create dynamic and responsive web applications from front-end interfaces to robust back-end systems.",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Cybersecurity",
      bold: "Protect Digital Assets",
      description:
        "Learn to safeguard information systems from cyber threats. Master the techniques of ethical hacking, network security, and digital forensics to become a cybersecurity expert in high demand.",
      image:
        "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogContent.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogContent.length) % blogContent.length);
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

      <div className="grid lg:flex lg:p-16 justify-center items-start mt-8 mb-12 gap-6 ">
        {/* First Section */}
        <div className="w-full flex flex-col items-start p-4 max-w-xl gap-4">
          <h3 className="font-light text-2xl md:text-4xl lg:text-6xl">
            Program Open For Enrollment
          </h3>
          <p className="mt-4 text-sm md:text-base leading-loose">
            Get insights directly from people who have been there and done that.
            These masterclasses not only provide directions to reach your career
            goals but also keep you inspired to dream without limitations and
            achieve them.
          </p>
          <a href="#" className="mt-4">
            <Button className="rounded-full flex border border-black bg-white items-center gap-3 capitalize font-archivo font-medium text-xs md:text-sm text-black py-2 px-4">
              Request a Callback
              <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                <MdOutlinePhoneCallback />
              </i>
            </Button>
          </a>
        </div>

        {/* Second Section - Animated */}
        <div className="w-full p-4 relative flex flex-col justify-start items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl mx-auto"
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                  <img
                    src={blogContent[currentIndex].image}
                    alt={`${blogContent[currentIndex].title} thumbnail`}
                    className="object-cover w-full h-full transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-lg text-zinc-700">
                    {blogContent[currentIndex].title}
                  </h2>
                  <h2 className="font-normal text-sm text-zinc-500">
                    <span className="font-bold">{blogContent[currentIndex].bold}:</span> {blogContent[currentIndex].description}
                  </h2>
                  <div className="flex items-center justify-center">
                    <Button className="rounded-full mt-6 bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6 border border-gray-600 text-white">
                      Register
                      <i className="flex icon w-6 h-6 text-black bg-white border border-[#0101010D] justify-center items-center rounded-full">
                        <MdArrowForward />
                      </i>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Buttons */}
      
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center  mt-8 ">
        {blogContent.map((data, index) => (
          <div
            key={index}
            className="w-full max-w-lg h-[35rem] p-2 "
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl hover:shadow-gray-200 border border-[#88DB1B]">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={data.image}
                  alt={`${data.title} thumbnail`}
                  className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-center font-bold text-lg text-zinc-700">
                  {data.title}
                </h2>
                <h2 className="font-normal text-center text-sm text-zinc-500">
                  <span className="font-bold">{data.bold}:</span>
                  {data.description}
                </h2>
                <div className="flex flex-col md:flex-row gap-x-4 my-6 justify-center items-center">
                  <Button className="w-60 lg:w-auto md:w-72 rounded-full flex border border-black bg-white items-center justify-center gap-3 capitalize font-archivo font-medium text-[16px] text-black py-2 px-4">
                    Request a Callback
                    <i className="flex w-6 h-6 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                      <MdOutlinePhoneCallback />
                    </i>
                  </Button>
                  <a href="/coming-soon">
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

      {/* Fourth Section */}
      <div className="flex items-center justify-center mt-12 mb-6">
        <Button className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium  py-2 pr-2 pl-6 border border-gray-600 text-white">
          View All Programs
          <i className="flex icon w-6 h-6 text-black bg-white border border-[#0101010D] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
      </div>
    </div>
  );
}

export default HandPickedTitles;

