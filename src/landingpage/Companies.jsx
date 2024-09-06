import { useState } from "react";
import Marquee from "react-fast-marquee";
import aboutbar from "../assets/about_bar1.png";

const Companies = () => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const companies = [
    // Updated company logos
    "/Images/swiggy.png", // Swiggy
    "/Images/paypal.png", // PayPal
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Intuit_logo_2022.svg/640px-Intuit_logo_2022.svg.png", // Intuit
    "https://1000logos.net/wp-content/uploads/2020/08/McAfee-Logo-500x313.png", // McAfee
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google
    "/Images/facebook.png", // Facebook
    "https://www.nokia.com/themes/custom/onenokia_reskin/logo.svg", // Nokia
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/Qualcomm-Logo.svg", // Qualcomm
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/GoTo_logo.svg/800px-GoTo_logo.svg.png", // GoTo
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Snapdeal_logo_new.png", // Snapdeal
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hike-logo-web.png/640px-Hike-logo-web.png", // Hike
    "/Images/microsoft.png", // Microsoft
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Razorpay_logo.png", // Razorpay
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Amazon
    "https://upload.wikimedia.org/wikipedia/en/d/d5/Myntra_logo.png", // Myntra
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Blinkit-yellow-rounded.svg" // Blinkit
  ];

  return (
    <div className="">
      <div className="w-full flex justify-end bg-white">
        <img src={aboutbar} className="w-12 h-12 md:h-16" alt="" />
      </div>
      <div className="flex flex-col items-center font-archivo w-full gap-16 my-24 mt-24">
        <div className="flex flex-col items-center gap-4 px-4">
          <span className="text-[#88DB1B] font-bold text-[20px] leading-5 tracking-wide">
            Exceptional Mentors
          </span>
          <span className="font-medium text-2xl md:text-4xl tracking-wider text-center">
            We have our mentors from
          </span>
        </div>
        <div className="w-full px-4 md:px-24">
          <Marquee
            speed={50}
            pauseOnClick
            pauseOnHover
            className="w-full flex items-center"
            direction="right"
          >
            {companies.map((company, index) => (
              <img
                key={`marquee_item_${index}`}
                src={company}
                alt={`company logo ${index}`}
                className={`w-28 h-28 object-contain mx-8 transition-all duration-300 ${
                  hoveredImageIndex === index ? "grayscale-0 scale-110" : "grayscale"
                }`}
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Companies;
