import React from 'react'
import { IoIosVideocam } from 'react-icons/io'

export default function CommunityPrepare() {
  return (
    <main className="lg:flex grid lg:px-20 p-4 w-full mt-12 gap-6">
    <section className="w-full ">
        <div className='flex justify-end mb-12 '>
          <div className="flex items-end">
            <button className='p-3 bg-white shadow-2xl  h-16 rounded-full  flex items-center gap-3 mt'>
                <h2 className='p-2 text-white w-8 bg-green-500 rounded-full'>
                <IoIosVideocam/>
                </h2>
                <div className='grid'>
                    <span className='font-archivo'>Start live call</span>
                    <span className='text-gray-500 text-nowrap'>connect your mentor</span>
                </div>
            </button>
          <div className=' p-3 border rounded-full w-24 lg:w-44 flex items-center justify-center border-gray-600'>
            <img src="/Images/prepare-avatar.png" className='w-44' alt="Good Preparations" />
            </div>
          </div>
        </div>
      <h3 className="text-3xl lg:text-5xl font-thin ">
      Prepare for a <br className='lg:block hidden'/>
Career in Public 
Service
      </h3>
      <p className="mt-8 text-gray-600 max-w-md">
      The Civil Service Community is dedicated to those aspiring to serve the nation. Connect with peers and mentors who share your passion for public service, and access resources and guidance to help you succeed in civil service exams and beyond
      </p>
    </section>

    <section className="w-full mt-16">
      <img src="/Images/overworked-man.png" alt="Community Ignite" />
    </section>
  </main>
  )
}
