import React from 'react'
import CommunityTitleBanner from './CommunityTitleBanner'

export default function CommunityAdvance() {
  return (
    <main className="mt-12 min-h-screen lg:flex grid items-center  justify-between w-full p-3">
    <section className="w-full flex flex-col items-end">
      <div className="relative mb-2 w-full mx-auto flex justify-end">
      <CommunityTitleBanner
      isRightFull={true}
      backgroundColor={"#726985"}
      title={"Yes, you can get into your dream university"}/>
      </div>
      <img
        src="/Images/community-advance.png"
        className="object-contain"
        alt="man thinking something  "
      />
    </section>
    <section className="w-full ">
      <h2 className="text-3xl lg:text-6xl font-thin max-w-lg">Advance 
Your Academic
Pursuits</h2>
      <p className="mt-6 text-gray-600 max-w-md">Join the Higher Studies Community to explore opportunities for further education. Connect with peers and mentors who share your academic interests, and receive guidance on applying to top universities, securing scholarships, and advancing your studies.</p>
      <div className="mt-5 flex gap-3">
        <img src="/Images/community-advance-avtar.png" className="rounded-full" alt="Mentor image" />
        <aside className="grid">
          <span className="text-sm">P.G Scholar</span>
          <span className="text-xs text-gray-700 tracking-widest">MSC stanford university</span>
        </aside>
      </div>
    </section>
  </main>
  )
}
