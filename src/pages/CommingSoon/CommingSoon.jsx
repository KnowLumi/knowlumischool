import Lottie from 'lottie-react';
import React from 'react'
import animation from "./animation.json"
import Navigation from '../../landingpage/Navigation';
import Footer from '../../landingpage/Footer';

export default function CommingSoon() {
  return (
    <main>
        <Navigation/>
        <div className="h-screen flex flex-col items-center justify-center ">
        <Lottie animationData={animation} loop={true} />
        </div>
        <Footer/>
    </main>
  )
}
