import Lottie from "lottie-react";
import React from "react";
import animation from "./animation.json";
import Navigation from "../../landingpage/Navigation";
import Footer from "../../landingpage/Footer";
import { useEffect } from "react";
import { heroImages } from "../../landingpage/landing_helpers";
import {
  MdArrowForward,
  MdArrowForwardIos,
  MdKeyboardDoubleArrowRight,
  MdOutlineLocalLibrary,
} from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { IoArrowForward } from "react-icons/io5";
import { Fade } from "react-slideshow-image";

export default function CommingSoon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Navigation />
      <main className="lg:px-20 p-6 flex items-center h-screen justify-center">
        <Lottie animationData={animation} />
      </main>
    </main>
  );
}
