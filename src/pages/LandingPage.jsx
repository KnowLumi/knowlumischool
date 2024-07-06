import { useRef, useState, useEffect } from "react";
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

const LandingPage = () => {

  const includedRef = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const processRef = useRef(null);

  const scrollToIncluded = () => {
    includedRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const toggleScroll = (enabled) => {
  //   setScrollEnabled(enabled);
  //   if (enabled) {
  //     document.body.style.overflow = "auto";
  //   } else {
  //     document.body.style.overflow = "hidden";
  //   }
  // };

  // const handleScroll = () => {
  //   if (processRef.current && scrollEnabled) {
  //     const rect = processRef.current.getBoundingClientRect();
  //     if (rect.top <= 96 && rect.bottom >= 96) {
  //       toggleScroll(false);
  //     }
  //     else{
  //       toggleScroll(true)
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrollEnabled]);

  return (
    <>
      <Navigation />
      <div className="flex flex-col bg-[#F7F7F7]">
        <HeroSection scrollToIncluded={scrollToIncluded} />
        <About />
        <Program scrollToIncluded={scrollToIncluded} />
        <Companies />
        <Recognized />
        <Process ref={processRef}  />
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
