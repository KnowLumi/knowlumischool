import React from "react";
import CommunityTitleBanner from "./CommunityTitleBanner";

export default function CommunityIgnite() {
  return (
    <main className="lg:flex grid lg:px-20 p-4 w-full mt-12 gap-6">
      <section className="w-full ">
        <h3 className="text-3xl lg:text-6xl font-thin ">
          Ignite Your <br className="lg:block hidden" />
          Entrepreneurial Spirit
        </h3>
        <p className="mt-6 text-gray-600 max-w-md">
          Join the Job Community to explore corporate opportunities, gain
          insights from industry experts, and receive guidance on landing your
          dream job. Collaborate with peers and professionals to build a
          successful career in the corporate world.
        </p>
        <div className="mt-5 flex gap-3">
          <img
            src="/Images/community-founded.png"
            className="rounded-full"
            alt="Mentor image"
          />
          <aside className="grid">
            <span className="text-sm">Founder</span>
            <span className="text-xs text-gray-700 tracking-widest">
              startup
            </span>
          </aside>
        </div>
      </section>

      <section className="w-full ">
        <div className="w-full">
          <CommunityTitleBanner
          isRightFull={false}
            backgroundColor={"#7D6353"}
            title={"Yes, you can find your co-founder"}
          />
        </div>
        <img src="/Images/community-ignite.png" alt="Community Ignite" />
      </section>
    </main>
  );
}
