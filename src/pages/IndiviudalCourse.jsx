import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../landingpage/Navigation';
import Footer from '../landingpage/Footer';
import CourseHero from './individualPage/CourseHero';
import LearnerCount from "./individualPage/LearnerCount";
import Alumini from "./individualPage/Alumini";
import Certificate from "./individualPage/Certificate";
import Fees from "./individualPage/Fees";
import Testimonials from "../landingpage/Testimonials";
import Process from "../landingpage/Process";

const IndividualCourse = () => {
    let { id } = useParams();

    const courseId = parseInt(id, 10);

    const coursedetails = [
        {
            id: 1,
            title: "Artificial Intelligence",
            bold: "Master the Future of Technology",
            description: "Dive into the world of AI and machine learning. Learn to develop intelligent systems, neural networks, and cutting-edge algorithms that are shaping the future of technology across industries.",
            image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            title: "MERN Stack Development",
            bold: "Build Modern Web Applications",
            description: "Become a full-stack developer with MERN (MongoDB, Express.js, React, Node.js) stack. Create dynamic and responsive web applications from front-end interfaces to robust back-end systems.",
            image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Cybersecurity",
            bold: "Protect Digital Assets",
            description: "Learn to safeguard information systems from cyber threats. Master the techniques of ethical hacking, network security, and digital forensics to become a cybersecurity expert in high demand.",
            image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    const isValidId = /^[0-9]+$/.test(id);
    const course = coursedetails.find((course) => course.id === courseId);

    useEffect(() => {
        console.log("ID:", id);
        console.log("Course:", course);

    }, []);

    if (!isValidId || !course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-lg text-red-600 font-bold">Error: Invalid Course ID</h1>
            </div>
        );
    }

    return (
        <>
            <Navigation />
            <div className="mt-[30%] md:mt-[7%] text-center">
                <CourseHero course={course} />
                <LearnerCount />
                <Alumini/> 
                <Certificate/>
                <Testimonials/>
                <Process />
                <Fees />
            </div>
            <Footer />
        </>
    );
};

export default IndividualCourse;
