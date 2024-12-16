import React from 'react'
import Navigation from "../landingpage/Navigation";
import Hero from "./Fundamentals/Hero";
import ProgramOverview from "./LearningPage/ProgramOverview";
import SkillsCovered from "./Fundamentals/SkillsCovered";
import Roadmap from "./Fundamentals/Roadmap";
import Companies from "../landingpage/Companies";
import IgniteGrowth from "./LearningPage/IgniteGrowth";
import Tracks from "./Fundamentals/Tracks";
import Footer from "../landingpage/Footer";

import { tracks } from "./helpers/fundamentalhelpers";

const Fundamental = () => {
    return (
        <>
            <Navigation />
            <Hero tracks={tracks} id={0} />
            <ProgramOverview />
            <SkillsCovered tracks={tracks} id={0} />
            <Roadmap tracks={tracks} id={0} />
            <Companies />
            <IgniteGrowth />
            <Tracks />
            <Footer />
        </>
    )
}

export default Fundamental
