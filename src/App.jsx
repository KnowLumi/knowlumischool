import Navigation from "./landingpage/Navigation";
import About from "./pages/About";
import Community from "./pages/Community";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Earn from "./pages/Earn";
import "./App.css"
import AllCourses from "./pages/AllCourses";
import Course from "./pages/Course";
import OtpPage from "./pages/OtpPage";

function App() {


  return (
    <div className="h-screen bg-gray-50 font-archivo">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/refer&earn" element={<Earn />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/course:id" element={<Course />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
