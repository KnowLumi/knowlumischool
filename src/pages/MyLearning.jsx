import { useState } from "react";
import Navigation from "../landingpage/Navigation";
import "./MyLearning/learning.css";
import Fundamentals from "./MyLearning/Fundamentals";
import WeekProgress from "./MyLearning/WeekProgress";
import DayLearning from "./MyLearning/DayLearning";

const MyLearning = () => {
  const [isWeek, setIsWeek] = useState(true);
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <Navigation />
      <div className="flex mx-6 md:mx-20 gap-8 mt-20 md:mt-28">
        <Fundamentals />
        {isWeek ? <WeekProgress setIsWeek={setIsWeek} /> : <DayLearning />}
      </div>
    </div>
  );
};

export default MyLearning;
