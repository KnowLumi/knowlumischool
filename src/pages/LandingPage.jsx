import Footer from "../landingpage/Footer";
import FaqSection from "../landingpage/FaqSection";
import HeroSection from "../landingpage/HeroSection";
import Testimonials from "../landingpage/Testimonials";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* <HeroSection /> */}
      <Testimonials/>
      <FaqSection/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
