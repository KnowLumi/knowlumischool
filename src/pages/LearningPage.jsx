import { useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import individualCourseData from "./individualPage/individualCourseData";

import Hero from "./LearningPage/Hero";
import { tracks } from "./helpers/fundamentalhelpers";

import Navigation from '../landingpage/Navigation';
import Footer from '../landingpage/Footer';
import ProgramOverview from './LearningPage/ProgramOverview'
import SkillsCovered from "./Fundamentals/SkillsCovered";
import Roadmap from "./Fundamentals/Roadmap";
import Companies from "../landingpage/Companies";
import IgniteGrowth from './LearningPage/IgniteGrowth';
// import OurCourse from './LearningPage/OurCourse';
import IndividualTracks from "./individualPage/individual-tracks";

const LearningPage = () => {
    let newSubCourse;
    const { id } = useParams();
    const navigate = useNavigate();
    const courseId = parseInt(id, 10);
    const course = individualCourseData.find((item) => item.id == courseId);

    const includedRef = useRef(null);
    const mainContainerRef = useRef(null);

    if (course) {
        newSubCourse = course;
    }

    const scrollToIncluded = () => {
        includedRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (mainContainerRef.current) {
            mainContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    if (!course) {
        return (
            <div>
                <h2>Error: Course Not Found</h2>
                <button onClick={() => navigate('/')}>Go Back to Home</button>
            </div>
        );
    }

    return (
        <>
            <Navigation />
            <Hero tracks={tracks} id={0} course={newSubCourse} />
            <ProgramOverview/>
            <SkillsCovered tracks={tracks} id={0} />
            <Roadmap tracks={tracks} id={0} />
            <Companies />
            <IgniteGrowth/>
            {/* <OurCourse/> */}
            <IndividualTracks/>
            <Footer />
        </>
    )
}

export default LearningPage
