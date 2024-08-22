import { useRef, useEffect } from "react";
import Footer from "../landingpage/Footer";
import FaqSection from "../landingpage/FaqSection";
import HeroSection from "../landingpage/HeroSection";
import Testimonials from "../landingpage/Testimonials";
import About from "../landingpage/About";
import Companies from "../landingpage/Companies";
import Enroll from "../landingpage/Enroll";
import Action from "../landingpage/Action";
import Process from "../landingpage/Process";
import Program from "../landingpage/Program";
import WhyKnowLumi from "../landingpage/WhyKnowLumi";
import Included from "../landingpage/Included";
import Navigation from "../landingpage/Navigation";
import Recognized from "../landingpage/Recognized";
import HandPickedTitles from "./HandPickedTitles";
import HowItsWorks from "../landingpage/HowItsWorks";

const LandingPage = () => {

  const includedRef = useRef(null);
  const processRef = useRef(null);
  const mainContainerRef = useRef(null);

  const scrollToIncluded = () => {
    includedRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <Navigation />
      <div ref={mainContainerRef} className="flex flex-col bg-[#F7F7F7]">
        <HeroSection scrollToIncluded={scrollToIncluded} />
        <HandPickedTitles/>
        <Companies />
        <Recognized />
        <HowItsWorks/>
        <About />
        <Program scrollToIncluded={scrollToIncluded} />
       
        {/* <Process ref={processRef} /> */}
        <Testimonials />
        <Action />
        <WhyKnowLumi scrollToIncluded={scrollToIncluded} />
        {/* <Included ref={includedRef} /> */}
        <Enroll />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
