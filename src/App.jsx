import React, { Suspense } from "react";
import { createContext, useState, useRef } from "react";
import About from "./landingpage/About";
import Community from "./pages/Community/Community";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Earn from "./pages/Earn";
import "./App.css";
import AllCourses from "./pages/AllCourses";
// import Course from "./pages/Course";
// import OtpPage from "./pages/Authentication/OtpPage";
const Admin = React.lazy(() => import("./pages/Admin"));
const Fundamentals = React.lazy(()=> ("./pages/Fundamentals"));
import Progress from "./pages/ProgressPage";
import MyLearning from "./pages/MyLearning";
import DayProgress from "./pages/DayProgress";
import Track from "./pages/Track";
const Dashboard = React.lazy(() => import("./pages/Admin/Dashboard"));
import Students from "./pages/Admin/Students";
import Mentors from "./pages/Admin/Mentors";
import Categories from "./pages/Admin/Categories";
import AddVideo from "./pages/Admin/AddVideo";
import Companies from "./pages/Admin/Companies";
import Testimonials from "./pages/Admin/Testimonials";
import AddDetails from "./pages/Admin/AddDetails";
import AddReview from "./pages/Admin/AddReview";
import AddMentor from "./pages/Admin/AddMentor";
import Demo from "./pages/Admin/Video/Demo";
import ProgramVideo from "./pages/Admin/Video/ProgramVideo";
import Login from "./pages/Admin/Login";
import Program from "./landingpage/Program";
// import NavMenu from "./Navigation/NavMenu";
const Footer = React.lazy(() => import("./landingpage/Footer"));
import Navigation from "./landingpage/Navigation";
import CommingSoon from "./pages/CommingSoon/CommingSoon";
const WhatsAppButton = React.lazy(() => import("./landingpage/WhatsappButton"));
import CardFirstPage from "./pages/CardFirstPage";
import CardSecondPage from "./pages/CardSecondPage";
import CardThirdPage from "./pages/CardThirdPage";
import LearningPage from "./pages/LearningPage";

export const Context = createContext();

const AboutRouteBody = () => {
  const includedRef = useRef(null);

  const scrollToIncluded = () => {
    if (includedRef.current) {
      includedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation />
      <About />
      <Program scrollToIncluded={scrollToIncluded} />
      {/* Pass the ref to other components as needed */}
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <div className="h-screen bg-gray-50 font-archivo overflow-x-hidden">
        <WhatsAppButton />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutRouteBody />} />
            <Route path="/community" element={<Community />} />
            {/* <Route path="/refer&earn" element={<Earn />} /> */}
            <Route path="/all-courses" element={<AllCourses />} />
            {/* <Route path="/signin" element={<OtpPage />} /> */}
            <Route path="/signin" element={<CommingSoon />} />
            <Route path="/coming-soon" element={<CommingSoon />} />
            {/* <Route path="/course/:id" element={<IndiviudalCourse />} /> */}
            <Route path='/course/1' element={<CardFirstPage />} />
            <Route path='/course/2' element={<CardSecondPage />} />
            <Route path='/course/3' element={<CardThirdPage />} />
            <Route path='/course/title/:id' element={<LearningPage />} />


            <Route path="/fundamentals" element={<Fundamentals />} />
            <Route path="/track" element={<Track />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="learning">
              <Route path="" element={<MyLearning />} />
              <Route path="day" element={<DayProgress />} />
            </Route>
            <Route path="admin/login" element={<Login />} />
            <Route path="admin/home" element={<Admin />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students">
                <Route path="" element={<Students />} />
                <Route path="addstudent" element={<AddDetails />} />
              </Route>
              <Route path="mentors">
                <Route path="" element={<Mentors />} />
                <Route path="addmentor" element={<AddMentor />} />
              </Route>
              <Route path="categories" element={<Categories />} />
              <Route path="video">
                <Route path="demo" element={<Demo />} />
                <Route path="program" element={<ProgramVideo />} />
                <Route path="addvideo" element={<AddVideo />} />
              </Route>
              <Route path="companies" element={<Companies />} />
              <Route path="testimonials">
                <Route path="" element={<Testimonials />} />
                <Route path="addreview" element={<AddReview />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
