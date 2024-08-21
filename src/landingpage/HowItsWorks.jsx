import React from 'react'
import aboutbar from "../assets/about_bar1.png";

export default function HowItsWorks() {
  return (
    <div className='h-screen bg-white'>
          <div className="w-full flex justify-start ">
        <img src={aboutbar} className="w-fit h-8 md:h-16  rotate-180 " alt="" />
      </div>
        HowItsWorks</div>
  )
}
