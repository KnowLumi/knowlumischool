import { useEffect } from "react";
import Footer from "../../landingpage/Footer";
import Navigation from "../../landingpage/Navigation";
import CommunityAdvance from "./CommunityAdvance";
import CommunityHero from "./CommunityHero";
import CommunityIgnite from "./CommunityIgnite";
import CommunityNavigate from "./CommunityNavigate";
import CommunityPrepare from "./CommunityPrepare";
import ScrollToTop from "../../ScrollToTop";

const Community = () => {
  useEffect(() => {
    console.log("Mounted")
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  return (
    <>
    <ScrollToTop/>
      <Navigation />
      <div className="min-h-screen mt-16 p-3">
        <CommunityHero />
        <CommunityNavigate />
        <CommunityIgnite />
        <CommunityAdvance />
        <CommunityPrepare />
      </div>
      <Footer />
    </>
  );
};

export default Community;
