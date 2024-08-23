import React from "react";
import { TracingBeam } from "../components/tracing-beam";
import { GoDotFill } from "react-icons/go";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-[#88DB1B] text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-sm prose prose-sm ">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "1. Explore Your Pathways",
    description: (
      <ul className="space-y-4 list-disc list-inside ">
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">
              AI-Powered Interest Identification:
            </span>{" "}
            Utilize our AI-powered platform to identify your area of interest
            and passion.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Introduction to Various Fields:</span>{" "}
            Explore careers in corporate roles, startups, higher studies, civil
            services, and more.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Interactive Sessions:</span> Participate
            in engaging sessions that provide insights into each field.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold"> Guidance and Resources: </span> Access
            resources and expert guidance to understand your options and
            identify your interests and strengths.
          </span>
        </li>
      </ul>
    ),
    badge: "Explore",
    image:
      "https://images.unsplash.com/photo-1507537231947-f2ff14bc1554?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "2. Set Your Goals",
    description: (
      <ul className="space-y-4 list-disc list-inside ">
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Clarify Your Objectives: </span>Identify
            and articulate your short-term and long-term career goals.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">AI-Driven Goal Setting:</span>Use our AI
            platform to set realistic and achievable goals tailored to your
            interests.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Expert Mentorship: </span>Collaborate
            with experienced mentors to refine and solidify your goals.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Strategic Planning: </span>Develop a
            strategic plan to achieve your goals with clear milestones.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Regular Check-Ins:</span>Monitor your
            progress and make adjustments with ongoing support from mentors.
          </span>
        </li>
      </ul>
    ),
    badge: "Goals",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "3. Navigate to Your Goals",
    description: (
      <ul className="space-y-4 list-disc list-inside ">
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Tailored Learning Paths: </span>Follow a
            curriculum customized to your chosen field and goals.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Expert Instruction:</span> Benefit from
            the knowledge and experience of our seasoned faculty. insights into
            each field.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Hands-On Experience:</span> Engage in
            practical projects and real-world applications. insights into each
            field.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Career Guidance: </span> Get
            professional advice and support through our career counseling
            services.
          </span>
        </li>
      </ul>
    ),
    badge: "Hardwork",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "4. Achieve Your Goals",
    description: (
      <ul className="space-y-4 list-disc list-inside ">
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Goal Achievement:</span> Follow a structured path to reach your professional goals.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Ongoing Mentorship:</span>  Receive continuous support and guidance from experienced mentors.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Success Tracking:</span> Monitor your progress and celebrate milestones along the way.

          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Skill Refinement:</span> Refine your skills with targeted feedback and advanced resources.

          </span>
        </li>
        <li className="flex items-start">
          <span className="mt-1 mr-2 text-[#88DB1B]">
            <GoDotFill />
          </span>
          <span>
            <span className="font-bold">Career Advancement: </span> Access exclusive opportunities for career growth and development.
          </span>
        </li>
      </ul>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
