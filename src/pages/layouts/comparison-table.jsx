import React from 'react';

const ComparisonTable = () => {
  const comparisonData = [
    {
      knowLumi: "Your academic journey continues in college, while your career path is shaped by us.",
      otherPlatforms: "Traditional education focuses solely on academics, with no emphasis on career development.",
    },
    {
      knowLumi: "Tailored to your strengths and career goals.",
      otherPlatforms: "Generic learning paths not aligned with individual goals.",
    },
    {
      knowLumi: "Direct access to industry experts and mentors, bridging the gap between college education and industry demands.",
      otherPlatforms: "Limited or no mentorship from industry professionals.",
    },
    {
      knowLumi: "Focus on practical, real-world projects that complement your academic learning.",
      otherPlatforms: "Primarily theory-based with limited practical applications.",
    },
    {
      knowLumi: "Emphasis on mastering skills for career success, in addition to college academics.",
      otherPlatforms: "Skills may not be fully developed for real-world application.",
    },
    {
      knowLumi: "Certifications that validate job readiness, supporting both academic and career growth.",
      otherPlatforms: "Certifications based on completion, not necessarily job readiness.",
    },
    {
      knowLumi: "Courses and projects based on current industry trends, relevant to both academics and future careers.",
      otherPlatforms: "Less emphasis on real-world exposure and industry relevance.",
    },
    {
      knowLumi: "Continuous learning support even after graduation, helping to adapt to industry changes.",
      otherPlatforms: "Limited post-course support for upskilling.",
    },
    {
      knowLumi: "Opportunities to connect with like-minded peers and industry leaders to enhance career growth.",
      otherPlatforms: "Limited networking opportunities.",
    },
    {
      knowLumi: "Regular feedback from mentors and industry experts to keep you on track in both academics and career.",
      otherPlatforms: "Limited feedback, mostly from instructors.",
    },
    {
      knowLumi: "Engage with a vibrant community of students, mentors, and professionals in various fields.",
      otherPlatforms: "Limited community engagement, often restricted to course-related forums.",
    },
    {
      knowLumi: "Career services and job placement support to kickstart your career after graduation.",
      otherPlatforms: "May not provide career services or direct job placement support.",
    },
    {
      knowLumi: "Join KnowLumi's alumni network for continuous career development and collaboration.",
      otherPlatforms: "No structured alumni network for continued growth and networking.",
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Why Choose <span className="text-[#88DB1B]">KnowLumi</span>?
        </h1>
        <div className="overflow-hidden rounded-[24px] shadow-xl border border-gray-200">
          <table className="table-auto w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-[#88DB1B] to-[#76BD17] text-white">
                <th className="p-6 font-semibold text-lg w-1/2">KnowLumi</th>
                <th className="p-6 font-semibold text-lg w-1/2">Other Platforms</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className="group even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition-colors duration-200 text-left "
                >
                  <td className="p-6 text-gray-800 border-b border-gray-500 border-r">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#88DB1B] mt-1">•</span>
                      <span className="font-medium">{item.knowLumi}</span>
                    </div>
                  </td>
                  <td className="p-6 text-gray-600 border-b border-gray-500 ">
                    <div className="flex items-start space-x-3">
                      <span className="text-gray-300 mt-1">•</span>
                      <span>{item.otherPlatforms}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;