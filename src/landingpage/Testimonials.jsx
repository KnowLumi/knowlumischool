import Marquee from "react-fast-marquee";
import { reviews } from "./landing_helpers";
import { MdChevronRight } from "react-icons/md";
import "./landing.css";
const Testimonials = () => {
  return (
    <div className="flex flex-col">
      <svg
        width="1280"
        height="197"
        viewBox="0 0 1280 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full hidden md:block translate-y-[8.7rem]"
      >
        <path
          d="M-30 90C-30 76.7452 -19.2548 66 -6 66H640H938.473C946.322 66 953.675 62.1622 958.163 55.723L989.837 10.277C994.325 3.83784 1001.68 0 1009.53 0L1286 0C1299.25 0 1310 10.7452 1310 24V173C1310 186.255 1299.25 197 1286 197H-6.00004C-19.2549 197 -30 186.255 -30 173V90Z"
          fill="#010101"
        />
      </svg>
      <svg
        width="390"
        height="228"
        viewBox="0 0 390 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block md:hidden translate-y-[11.5rem]"
      >
        <path
          d="M-15 47.4823C-15 37.5411 -6.94112 29.4822 3 29.4822H115H184.13C190.015 29.4822 195.528 26.6059 198.894 21.7794L208.712 7.70285C212.078 2.87633 217.591 0 223.476 0H386C395.941 0 404 8.05887 404 18V210C404 219.941 395.941 228 386 228H3.00001C-6.94112 228 -15 219.941 -15 210V47.4823Z"
          fill="#010101"
        />
      </svg>

      <div className="bg-black font-archivo flex flex-col z-10 items-center h-full">
        <div className="flex flex-col items-center gap-3 md:gap-6 my-12 mx-16 text-center">
          <span className="text-[#88DB1B] font-bold text-xl">Wall of Love</span>
          <span className="text-white font-medium tracking-wide text-2xl md:text-5xl">
            What our students say about us
          </span>
        </div>
        <Marquee
          speed={120}
          direction="right"
          pauseOnHover
          pauseOnClick
          className="mt-6 review-bg"
        >
          {reviews.slice(0, 3).map((item, index) => (
            <div
              key={`review_${index}`}
              className=" flex flex-col w-[26.25rem] h-[13.5rem] p-9 rounded-3xl border mr-8 border-[#F7F7F726]"
            >
              <div className="flex items-center mb-6 gap-6">
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col h-full justify-between text-[#FEFEFE] opacity-80">
                  <span className="font-semibold text-[18px] leading-6 tracking-wider">
                    {item.name}
                  </span>
                  <span className="font-normal text-[16px] tracking-wider italic">
                    {item.role}
                  </span>
                </div>
              </div>
              <span className="text-[#FEFEFE] opacity-80 text-xs">
                {item.review}
              </span>
            </div>
          ))}
        </Marquee>
        <Marquee
          speed={200}
          direction="right"
          pauseOnHover
          pauseOnClick
          autoFill
          className="my-6 review-bg"
        >
          {reviews.slice(3, 5).map((item, index) => (
            <div
              key={`review_${index}`}
              className=" flex flex-col w-[26.25rem] h-[13.5rem] p-9 rounded-3xl border mr-6 border-[#F7F7F726]"
            >
              <div className="flex items-center mb-6 gap-6">
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col h-full justify-between text-[#FEFEFE] opacity-80">
                  <span className="font-semibold text-[18px] leading-6 tracking-wider">
                    {item.name}
                  </span>
                  <span className="font-normal text-[16px] tracking-wider italic">
                    {item.role}
                  </span>
                </div>
              </div>
              <span className="text-[#FEFEFE] opacity-80 text-xs">
                {item.review}
              </span>
            </div>
          ))}
        </Marquee>
        <button className="flex text-[#F7F7F7] items-center font-normal text-xs md:text-[18px] my-16">
          <span className="opacity-60 tracking-wide">Give a review.&nbsp;</span>
          <span className=" tracking-wide hover:text-[#88DB1B] transition">Express your Love!</span>
          <i className="w-6 h-6 flex justify-center items-center">
            <MdChevronRight />
          </i>
        </button>
      </div>
      <svg
        width="1280"
        height="197"
        viewBox="0 0 1280 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full hidden md:block -translate-y-[8.7rem] rotate-180"
      >
        <path
          d="M-30 90C-30 76.7452 -19.2548 66 -6 66H640H938.473C946.322 66 953.675 62.1622 958.163 55.723L989.837 10.277C994.325 3.83784 1001.68 0 1009.53 0L1286 0C1299.25 0 1310 10.7452 1310 24V173C1310 186.255 1299.25 197 1286 197H-6.00004C-19.2549 197 -30 186.255 -30 173V90Z"
          fill="#010101"
        />
      </svg>
      <svg
        width="390"
        height="228"
        viewBox="0 0 390 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block md:hidden -translate-y-[11.5rem] rotate-180"
      >
        <path
          d="M-15 47.4823C-15 37.5411 -6.94112 29.4822 3 29.4822H115H184.13C190.015 29.4822 195.528 26.6059 198.894 21.7794L208.712 7.70285C212.078 2.87633 217.591 0 223.476 0H386C395.941 0 404 8.05887 404 18V210C404 219.941 395.941 228 386 228H3.00001C-6.94112 228 -15 219.941 -15 210V47.4823Z"
          fill="#010101"
        />
      </svg>
    </div>
  );
};

export default Testimonials;
