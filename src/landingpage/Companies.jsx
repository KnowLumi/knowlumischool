import { useState } from "react";
import Marquee from "react-fast-marquee";
import aboutbar from "../assets/about_bar1.png";

const Companies = () => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const companies = [
    "https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ=w240-h480-rw",
    "https://play-lh.googleusercontent.com/xOKbvDt362x1uzW-nnggP-PgO9HM4L1vwBl5HgHFHy_n1X3mqeBtOSoIyNJzTS3rrj70=w240-h480-rw",
    "https://media.mcafeeassets.com/content/dam/npcld/ecommerce/en/company-logo/McAfeeHzRed.svg",
    "https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg",
    "https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg",
    "https://www.nokia.com/themes/custom/onenokia_reskin/logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/512px-Qualcomm-Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/GoTo_logo.svg/800px-GoTo_logo.svg.png?20210525092456",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Snapdeal_logo_new.png/640px-Snapdeal_logo_new.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hike-logo-web.png/640px-Hike-logo-web.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/640px-Reliance_Jio_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Razorpay_logo.png/640px-Razorpay_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/d/d5/Myntra_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Blinkit-yellow-rounded.svg/640px-Blinkit-yellow-rounded.svg.png",
    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Intuit_logo_2022.svg/640px-Intuit_logo_2022.svg.png"
  ] 

  return (
    <div className="">
      <div className="w-full flex justify-end bg-white">
    <img src={aboutbar} className="w-fit h-8 md:h-16   " alt="" />
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
          {companies.map((_, index) => (
            <img
              key={`marquee_item_${index}`}
              src={companies[index]}
              alt={companies[index]}
              className={`w-20 h-full mx-14 ${
                hoveredImageIndex === index ? "grayscale-0" : "grayscale"
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
