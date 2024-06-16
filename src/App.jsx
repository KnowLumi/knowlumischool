import { createContext, useState } from "react";
import About from "./pages/About";
import Community from "./pages/Community";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Earn from "./pages/Earn";
import "./App.css"
import AllCourses from "./pages/AllCourses";
import Course from "./pages/Course";
import OtpPage from "./pages/Authentication/OtpPage";
import Admin from "./pages/Admin";
import Fundamentals from "./pages/Fundamentals";
import Progress from "./pages/ProgressPage";
import MyLearning from "./pages/MyLearning";

export const Context = createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <div className="h-screen bg-gray-50 font-archivo">
        <Router>
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/refer&earn" element={<Earn />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/signin" element={<OtpPage />} />
            <Route path="/fundamentals" element={<Fundamentals />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/learning" element={<MyLearning />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/course:id" element={<Course />} />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
