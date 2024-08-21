import React from 'react'
import aboutbar from "../assets/about_bar1.png";

export default function HowItsWorks() {
  return (
    <div className='h-screen bg-[#F7F7F7]'>
          <div className="w-full flex justify-end bg-white">
        <img src={aboutbar} className="w-fit h-8 md:h-16  " alt="" />
      </div>
        HowItsWorks</div>
  )
}
