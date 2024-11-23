import Lottie from 'lottie-react';
import React from 'react'
import animation from "./animation.json"
import Navigation from '../../landingpage/Navigation';
import Footer from '../../landingpage/Footer';
import { useEffect } from 'react';

export default function CommingSoon() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <main>
        <Navigation/>
        <div className="min-h-screen flex items-center justify-center">
          <h3 className="text-3xl">Know Lumi</h3>
        </div>
        <Footer/>
    </main>
  )
}
