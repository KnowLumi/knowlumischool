import Footer from "../landingpage/Footer";
import FaqSection from "../landingpage/FaqSection";
import HeroSection from "../landingpage/HeroSection";
import Testimonials from "../landingpage/Testimonials";
import About from "../landingpage/About";

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <HeroSection />
      <About />
      <Testimonials />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
