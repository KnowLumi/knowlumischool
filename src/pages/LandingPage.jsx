import Footer from "../landingpage/Footer";
import FaqSection from "../landingpage/FaqSection";
import HeroSection from "../landingpage/HeroSection";
import Testimonials from "../landingpage/Testimonials";
import About from "../landingpage/About";
import Companies from "../landingpage/Companies";
import Enroll from "../landingpage/Enroll";
import Action from "../landingpage/Action";
import OurCourses from "../landingpage/OurCourses";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <HeroSection />
      <About />
      <Companies />
      <OurCourses />
      <Testimonials />
      <Action />
      <Enroll />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
