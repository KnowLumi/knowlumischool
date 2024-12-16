import Companies from "../landingpage/Companies";
import Footer from "../landingpage/Footer";
import Navigation from "../landingpage/Navigation";
import Roadmap from "./Fundamentals/Roadmap";
import SkillsCovered from "./Fundamentals/SkillsCovered";
import Hero from "./Fundamentals/Hero";
import Tracks from "./Fundamentals/Tracks";
import { tracks } from "./helpers/fundamentalhelpers";
import Process from "../landingpage/Process";
// import { useEffect, useRef } from "react";
import IgniteGrowth from "./LearningPage/IgniteGrowth";
import ProgramOverview from "./LearningPage/ProgramOverview";

const Fundamentals = () => {
  // const includedRef = useRef(null);
  // const processRef = useRef(null);
  // const mainContainerRef = useRef(null);

  // const scrollToIncluded = () => {
  //   includedRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   if (mainContainerRef.current) {
  //     mainContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);

  return (
    <div className="flex flex-col w-full bg-[#F7F7F7]">
      <Navigation />
      <Hero tracks={tracks} id={0} />
      <Process  ref={processRef}/>
      <ProgramOverview/>
      <SkillsCovered tracks={tracks} id={0}/>
      <Roadmap tracks={tracks} id={0}/>
      <Companies />
      <IgniteGrowth/>
      <Tracks />
      <Footer />
    </div>
  );
};

export default Fundamentals;
