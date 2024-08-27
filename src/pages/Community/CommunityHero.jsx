import React from "react";
import { useEffect } from "react";

export default function CommunityHero() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="min-h-screen lg:flex grid gap-y-40 items-center justify-center w-full lg:px-16 p-3">
      <div className="w-full">
        <h2 className="text-3xl lg:text-7xl font-light tracking-wide">
          Let’s Connect and Collaborate Across Fields
        </h2>
        <div>
        <p className="text-lg max-w-lg mt-5  font-archivo text-gray-700">Become a part of our main community where students, mentors, and professionals from all fields come together. Share insights, collaborate on ideas, and build lasting connections that support your journey to success.</p>
        <div className="relative mt-4">
            <img src="/Images/dot.png" className="absolute -left-12 top-12" alt="images of dots" />
            <div className="p-2 px-8 bg-white shadow-xl  rounded-xl py-4 absolute w-full flex gap-2 flex-wrap items-center justify-between">
               <div className="grid">
               <span className="text-gray-500">Register using email address</span>
                <input type="text" className="p-3 w-auto lg:w-96 border" placeholder="type your email address..." name="" id="" />
               </div>
               <div>
                <button className="p-2 bg-[#725BA1] text-white px-6 py-3 rounded-lg">Register</button>
               </div>
            </div>
        </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/Images/community-hero.png"
          className="h-auto w-auto"
          alt="Illustation of four friends"
        />
      </div>
    </div>
  );
}
