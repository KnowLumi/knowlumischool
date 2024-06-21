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
import { useRef } from "react";

const LandingPage = () => {
  const includedRef = useRef(null);
  const scrollToIncluded = () => {
    includedRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Navigation />
      <div className="flex flex-col bg-[#F7F7F7]">
        <HeroSection scrollToIncluded={scrollToIncluded} />
        <About />
        <Program scrollToIncluded={scrollToIncluded}/>
        <Companies />
        <Recognized />
        <Process scrollToIncluded={scrollToIncluded} />
        <Testimonials />
        <Action />
        <WhyKnowLumi scrollToIncluded={scrollToIncluded} />
        <Included ref={includedRef} />
        <Enroll />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
