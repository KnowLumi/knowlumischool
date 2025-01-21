import certificate from "../../assets/Certificate/certificate-3.png";
// import svgItemOne from "../../assets/Certificate/ready.svg";
// import svgItemTwo from "../../assets/Certificate/share.svg";
// import svgItemThree from "../../assets/Certificate/compete.svg";
import rocketBulletPoint from "/rocke-bullet-point.svg"
import { Button } from "@material-tailwind/react";
import { MdArrowForward } from "react-icons/md";

const Certificate = () => {
  const certificateDetails = [
    {
      imageSrc: rocketBulletPoint,
      title: "Earn industry-recognized certificates upon course completion.",
      desc: "Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness.",
    },
    {
      imageSrc: rocketBulletPoint,
      title: "Showcase your skills and expertise to potential employers.",
      desc: "Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere.",
    },
    {
      imageSrc: rocketBulletPoint,
      title:
        "Enhance your resume and LinkedIn profile with verified credentials.",
      desc: "IRC certifies your industry-readiness and gets you placed with higher salaries.",
    },
    // {
    //     imageSrc: svgItemThree,
    //     title: "Demonstrate your commitment to continuous learning and growth.",
    //     desc: "IRC certifies your industry-readiness and gets you placed with higher salaries.",
    // },
    {
      imageSrc: rocketBulletPoint,
      title:
        "Demonstrate your commitment to continuous learning and growth.",
      desc: "IRC certifies your industry-readiness and gets you placed with higher salaries.",
    },
    {
      imageSrc: rocketBulletPoint,
      title:
        "Stand out in interviews and professional networks with credible achievements.",
      desc: "IRC certifies your industry-readiness and gets you placed with higher salaries.",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center my-10 md:my-28">
      <div className="w-full">
        <h1 className="text-3xl font-semibold md:text-5xl my-10">
          Get Certified. Get Hired
        </h1>
      </div>
      <div className="w-[90%] flex flex-col md:flex-row justify-start items-start">
        <div className="w-full md:w-[50%] px-4 md:pt-3 pt-0 md:p-10 text-left flex flex-col justify-start items-start">
          {/* <p>Yes, you’ll get a certificate representing your Industry Readiness once you submit your projects and clear the mock tests.</p> */}
          {certificateDetails.map((data, index) => {
            return (
              <div
                className="flex flex-row justify-start items-center mt-6"
                key={index}
              >
                <img loading="lazy" src={data.imageSrc} className="" />
                <div className="flex flex-col justify-center items-center md:items-start px-3">
                  <h3 className="font-medium text-sm md:text-lg capitalize text-left text-gray-800 font-inter">
                    {data.title}
                  </h3>
                  {/* <p className="text-xs md:text-sm text-gray-600 text-left">
                                        {data.desc}
                                    </p> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-[50%]">
          <img loading="lazy" className="p-6" src={certificate} alt="Certificate Image" />
        </div>
      </div>
      <div className="flex justify-between items-center md:mt-6">
        <Button className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6">
          Request A Call
          <i className="flex icon w-8 h-8 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
      </div>
    </div>
  );
};

export default Certificate;

// const BulletPointRocket = () => {
//   return (
//     <svg
//       width="44"
//       height="44"
//       viewBox="0 0 44 44"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlns:xlink="http://www.w3.org/1999/xlink"
//     >
//       <rect width="44" height="44" rx="22" fill="#DFDFD7" fill-opacity="0.4" />
//       <rect
//         x="10"
//         y="10"
//         width="24"
//         height="24"
//         fill="url(#pattern0_1377_5255)"
//       />
//       <defs>
//         <pattern
//           id="pattern0_1377_5255"
//           patternContentUnits="objectBoundingBox"
//           width="1"
//           height="1"
//         >
//           <use xlink:href="#image0_1377_5255" transform="scale(0.01)" />
//         </pattern>
//         <image
//           id="image0_1377_5255"
//           width="100"
//           height="100"
//           xlink:href="data:image/png;base64,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"
//         />
//       </defs>
//     </svg>
//   );
// };
