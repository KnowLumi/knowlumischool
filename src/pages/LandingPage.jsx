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
  return (
    <>
      <Navigation/>
      <div className="flex flex-col bg-[#F7F7F7]">
        <HeroSection />
        <About />
        <Program />
        <Companies />
        <Recognized/>
        <Process />
        <Testimonials />
        <Action />
        <WhyKnowLumi />
        <Included />
        <Enroll />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
