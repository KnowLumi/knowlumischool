import { useParams, useNavigate, useLocation } from "react-router-dom";
import individualCourseData from "./individualPage/individualCourseData";

import Hero from "./LearningPage/Hero";
import { tracks } from "./helpers/fundamentalhelpers";

// import ScrollToTop from '../ScrollToTop';
import Navigation from "../landingpage/Navigation";
import Footer from "../landingpage/Footer";
import ProgramOverview from "./LearningPage/ProgramOverview";
import SkillsCovered from "./Fundamentals/SkillsCovered";
import Roadmap from "./Fundamentals/Roadmap";
// import Companies from "../landingpage/Companies";
import IgniteGrowth from "./LearningPage/IgniteGrowth";
import IndividualTracks from "./individualPage/individual-tracks";
import Included from "../landingpage/Included";
import Enroll from "../landingpage/Enroll";
import { useLayoutEffect } from "react";
import IndividualCourseData from "./individualPage/individualCourseData";

const LearningPage = () => {
  let newSubCourse;
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const courseId = parseInt(id, 10);
  const course = individualCourseData.find((item) => item.id === courseId);
  //?  based on the course id choose index number for course data 
  let courseDataIndexNumber = 0;
  switch (courseId) {
    case 4613:
      courseDataIndexNumber = 0;
      break;
    case 4632:
      courseDataIndexNumber = 1;
      break;
    case 4654:
      courseDataIndexNumber = 2;
      break;
    default:
      courseDataIndexNumber = 0;
      break;
  }
  if (course) {
    newSubCourse = course;
  }

  if (!course) {
    return (
      <div>
        <h2>Error: Course Not Found</h2>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
    );
  }

  const newData = individualCourseData.slice(4);
  const newSet = newData.find((item) => item.id === courseId);

  return (
    <>
      <Navigation />
      {/* <ScrollToTop /> */}
      <Hero tracks={tracks} id={0} course={newSubCourse} />
      <ProgramOverview />
      <SkillsCovered tracks={tracks} id={courseDataIndexNumber} />
      <Roadmap tracks={IndividualCourseData} id={courseDataIndexNumber} />
      <IgniteGrowth />
      {newSet ? "" : <Included />}
      <Enroll />
      {/* <Companies /> */}
      <IndividualTracks itemShow={3} />
      <Footer />
    </>
  );
};

export default LearningPage;
