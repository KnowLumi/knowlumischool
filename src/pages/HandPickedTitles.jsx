import { FaPhoneAlt } from "react-icons/fa";
import aboutbar from "../assets/about_bar1.png";
import { Button } from "@material-tailwind/react";
import { MdArrowForward, MdOutlinePhoneCallback } from "react-icons/md";

function HandPickedTitles() {
  return (
    <div className="bg-white min-h-screen lg:p-12">
      <div className="w-full flex justify-start bg-white">
        <img src={aboutbar} className="w-fit h-8 md:h-16 rotate-180 " alt="" />
      </div>
      {/* // ? top section contet */}
      <div className="grid lg:flex  w-full justify-between items-center mt-12 mb-12 gap-6">
        {/* first section */}
        <div className="w-full flex flex-col items-start p-4 max-w-xl gap-6">
          <h3 className="font-light text-2xl lg:text-6xl">
            Program open For Enrollment
          </h3>
          <p className="mt-4 leading-loose">
            Get insights directly from people who have been there and done that.
            These masterclasses not only provide directions to reach your career
            goals but also keep you inspired to dream without limitations and
            achieve them.
          </p>
          <div className="mt-4">
            <Button className="rounded-full flex border border-black bg-white items-center gap-3 capitalize font-archivo font-medium text-xs text-black py-[3px] pr-[3px] pl-6">
              Request a Callback
              <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                <MdOutlinePhoneCallback />
              </i>
            </Button>
          </div>
        </div>
        <div className="w-full p-4 relative">
          <img
            className="w-full h-96 rounded-2xl"
            src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
            alt="Image not found"
          />
          <div className="p-3 h-20 bg-white  relative bottom-16 rounded-b-xl border-b border-r border-l border-black">
            <h3 className="font-bold text-xl">
              Sneak Peek Of Masterclass by Rakesh Misra
            </h3>
            <h4 className="font-body mt-2 test-sm text-gray-700">
              Co-Founder Uhana (Acquired by VMWare), Stanford, IIT Madras
            </h4>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-3 mt-16">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="w-96 mx-auto">
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={blogContent.image}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  {blogContent.title}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  {blogContent.description}
                </h2>
                <div className="flex flex-wrap gap-5 my-9 justify-center">
                  
                <Button
                    className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] text-black py-2 pr-2 pl-24 w-full"
                    variant="outlined"
                  >
                    Request a Callback
                    <i className="flex w-6 h-6 text-black border border-[#0101010D] bg-[#01010133] justify-center items-center rounded-full">
                      <MdOutlinePhoneCallback />
                    </i>
                  </Button>
                  <Button className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-24 w-full">
                    Enroll in the Program
                    <i className="flex icon w-6 h-6 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
                      <MdArrowForward />
                    </i>
                  </Button>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const blogContent = {
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image:
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
};

export default HandPickedTitles;
