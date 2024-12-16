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

const IndividualCourse = () => {
    // let { id } = useParams();
    // const courseId = parseInt(id, 10);

    const coursedetails = [
        {
            id: 1,
            title: "Level Up After Graduation",
            bold: "For Graduates & Beyond",
            description:
                "Take your tech career to the next level with advanced courses tailored for industry success. Master tools and frameworks to stay ahead.",
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
                "Got a startup idea? Whether you're in college or a graduate, our program equips you to transform your vision into a thriving business. From ideation to scaling, we'll guide your entrepreneurial path.",
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
            <div className="mt-[30%] md:mt-[7%] text-center">
                <Hero tracks={tracks} id={0} course={coursedetails[0]} />
                {/* <CourseHero course={course}/> */}
                <IndividualTracks itemShow={3}/>
                <Companies/>
                <LearnerCount title={"5.4M+ Learners"}/>
                <Alumini />
                <Certificate />
                <Testimonials />
                {/* <Process /> */} 
                <FaqSection itemShow={3}/>
                {/* <Fees /> */}
            </div>
            <Footer />
        </>
    );
};

export default IndividualCourse;
