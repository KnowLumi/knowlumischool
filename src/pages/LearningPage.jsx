import { useParams, useNavigate, useLocation } from 'react-router-dom';
import individualCourseData from "./individualPage/individualCourseData";

import Hero from "./LearningPage/Hero";
import { tracks } from "./helpers/fundamentalhelpers";

// import ScrollToTop from '../ScrollToTop';
import Navigation from '../landingpage/Navigation';
import Footer from '../landingpage/Footer';
import ProgramOverview from './LearningPage/ProgramOverview';
import SkillsCovered from "./Fundamentals/SkillsCovered";
import Roadmap from "./Fundamentals/Roadmap";
// import Companies from "../landingpage/Companies";
import IgniteGrowth from './LearningPage/IgniteGrowth';
import IndividualTracks from "./individualPage/individual-tracks";
import Included from "../landingpage/Included";
import Enroll from "../landingpage/Enroll";
import { useLayoutEffect } from "react";

const LearningPage = () => {
    let newSubCourse;
    const location = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    const { id } = useParams();
    const navigate = useNavigate();
    const courseId = parseInt(id, 10);
    const course = individualCourseData.find((item) => item.id === courseId);

    if (course) {
        newSubCourse = course;
    }

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
            {/* <ScrollToTop /> */}
            <Hero tracks={tracks} id={0} course={newSubCourse} />
            <ProgramOverview />
            <SkillsCovered tracks={tracks} id={0} />
            <Roadmap tracks={tracks} id={0} />
            <Included />
            <Enroll />
            {/* <Companies /> */}
            <IgniteGrowth />
            <IndividualTracks itemShow={3} />
            <Footer />
        </>
    );
};

export default LearningPage;
