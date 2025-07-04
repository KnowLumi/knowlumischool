import React, { useEffect } from 'react';
import Navigation from '../landingpage/Navigation';
import Footer from '../landingpage/Footer';
// import CourseHero from './individualPage/CourseHero';
import Hero from './individualPage/Hero';
import LearnerCount from "./individualPage/LearnerCount";
import Alumini from "./individualPage/Alumini";
import Certificate from "./individualPage/Certificate";
// import Fees from "./individualPage/Fees";
import Testimonials from "../landingpage/Testimonials";
// import Process from "../landingpage/Process";
import { tracks } from "./helpers/fundamentalhelpers";
import FaqSection from "../landingpage/FaqSection";

import FirstCard from "/Images/first-card.jpg"
import SecondCard from "/Images/second-card.jpg"
import ThirdCard from "/Images/third-card.jpg"
import IndividualTracks from './individualPage/individual-tracks';
import Companies from "../landingpage/Companies";
import { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { IoChevronForwardOutline } from 'react-icons/io5';
import { Icon } from 'lucide-react';
import { FiPlus } from 'react-icons/fi';
import ComparisonTable from './layouts/comparison-table';

const IndividualCourse = () => {

    // let { id } = useParams();
    // const courseId = parseInt(id, 10);

    const coursedetails = [
        {
            id: 1,
            title: "Level Up After Graduation",
            bold: "For Graduates Ready to Specialize",
            description:
                " Elevate your career with advanced, industry-focused courses. Stay ahead of the curve by mastering the latest tools and frameworks that employers demand.",
            image: FirstCard,
        }, 
        {
            id: 2,
            title: "Skill Up While You Study",
            bold: "For Current Engineering Students",
            description:
                "Still in college? Turn your years of study into real-world skills with hands-on courses in software development. Learn to create, innovate, and lead in tech, starting now!",
            image: SecondCard,
        },
        {
            id: 3,
            title: "Launch Your Startup Dream",
            bold: "For Every one",
            description:
                "  Whether you're in college or a graduate, our program equips you to transform your vision into a thriving business. From ideation to scaling, we'll guide your entrepreneurial path.",
            image: ThirdCard,
        },

    ];

    // const isValidId = /^[0-9]+$/.test(id);
    // const course = coursedetails.find((course) => course.id === courseId);

    // useEffect(() => {
    //     console.log("ID:", id);
    //     console.log("Course:", course);

    // }, []);

    // if (!isValidId || !course) {
    //     return (
    //         <div className="min-h-screen flex flex-col items-center justify-center">
    //             <h1 className="text-lg text-red-600 font-bold">Error: Invalid Course ID</h1>
    //         </div>
    //     );
    // }

    return (
        <>
            <Navigation />
            <div className="mt-[30%] md:mt-[7%] text-center bg-white">
                <Hero tracks={tracks} id={0} course={coursedetails[0]} />
                {/* <CourseHero course={course}/> */}
                <IndividualTracks itemShow={3}/>
                <Companies/>
                <LearnerCount title={"5.4M+ Learners"}/>
                <Alumini />
                <Certificate />
                <Testimonials />
                {/* <Process /> */} 
                {/* <ComparisonTable/> */}
                <FirstCoursePageFAQ  />
                {/* <Fees /> */}
            </div>
            <Footer />
        </>
    );
};

export default IndividualCourse;







  
  const FirstCoursePageFAQ = () => {
    const [open, setOpen] = useState(0);

    const faqs = [
        {
          title: "1. Who are these courses designed for?",
          desc: "These courses are specifically designed for graduates who want to specialize in their tech careers and gain advanced, industry-relevant skills."
        },
        {
          title: "2. What kind of skills can I learn in these courses?",
          desc: "You can master cutting-edge tools, frameworks, and advanced technologies that are highly valued by leading companies in the industry."
        },
        {
          title: "3. How are these courses different from traditional training programs?",
          desc: "Our programs focus on practical, project-based learning tailored for real-world applications, ensuring you're job-ready from day one."
        },
        {
          title: "4. Are these courses beginner-friendly?",
          desc: "Yes! Whether you're starting fresh or have some prior knowledge, our courses are structured to accommodate learners at different levels."
        },
        {
          title: "5. What certifications do I get after completing these courses?",
          desc: "You'll receive an industry-recognized certification that showcases your expertise and job readiness, helping you stand out in the job market."
        },
        {
          title: "6. Can these courses help me switch careers?",
          desc: "Absolutely! Our specialized programs are designed to help graduates pivot into in-demand tech roles with confidence."
        },
        {
          title: "7. Are there opportunities for mentorship?",
          desc: "Yes, you'll have access to expert mentors who guide you through the learning process and provide career advice."
        },
        {
          title: "8. What support do I get for job placement?",
          desc: "We assist with placement opportunities through our strong industry partnerships and career guidance, ensuring you land your dream job."
        },
        {
          title: "9. How do I enroll in these courses?",
          desc: "Simply click on the 'Enroll Now' button, choose your program, and follow the guided steps to get started!"
        }
      ];
  
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    function Icon({ id, open }) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className={`text-gray-50 ${
              id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        );
      }
    return (
      <div className="w-full py-2 px-2 lg:px-8 mt-8 lg:my-16 flex flex-col items-center bg-gradient-to-b from-white to-[#FAFAFA] font-archivo">
        <span className="font-bold text-xl text-black opacity-60 mb-3">
          Any Queries?
        </span>
        <span className="font-semibold text-3xl tracking-widest w-full text-center">
          Frequently Asked Questions
        </span>
        <div className="my-12">
        {faqs.map((item, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            className="bg-white my-6 px-6 rounded-2xl border-b-white w-full md:w-[45.125rem]"
            icon={<Icon id={index + 1} open={open === index + 1} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              aria-expanded={open === index + 1}
              className="font-archivo text-black border-0 text-sm font-semibold tracking-wide"
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className="font-archivo">
              {item.desc}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
        <button className="flex text-lg font-normal gap-1 items-center my-8 hover:text-blue-500 transition-all">
          <span className="text-gray-500">Not yet resolved?</span>
          <span>Find help!</span>
          <IoChevronForwardOutline className="ml-3" />
        </button>
      </div>
    );
  };
  