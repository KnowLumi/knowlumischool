import React from "react";
import CommunityTitleBanner from "./CommunityTitleBanner";

export default function CommunityNavigate() {
  return (
    <main className="mt-12 min-h-screen lg:flex grid items-center  justify-between w-full p-3">
      <section className="w-full flex flex-col items-end">
        <div className="relative right-16 w-full mx-auto flex justify-end">
        <CommunityTitleBanner 
        isRightFull={true}
        backgroundColor={"#726985"}
        title={"Yes, you can find your path"}/>
        </div>
        <img
          src="/Images/navigate.png"
          className="object-contain"
          alt="Team communicating "
        />
      </section>
      <section className="w-full ">
        <h2 className="text-3xl lg:text-6xl font-thin max-w-lg">Navigate Your Path to Employment</h2>
        <p className="mt-6 text-gray-600 max-w-md">Join the Job Community to explore corporate opportunities, gain insights from industry experts, and receive guidance on landing your dream job. Collaborate with peers and professionals to build a successful career in the corporate world.</p>
        <div className="mt-5 flex gap-3">
          <img src="/Images/community-avatar.png" className="rounded-full" alt="Mentor image" />
          <aside className="grid">
            <span className="text-sm">Mentor</span>
            <span className="text-xs text-gray-700 tracking-widest">google Inc</span>
          </aside>
        </div>
      </section>
    </main>
  );
}
