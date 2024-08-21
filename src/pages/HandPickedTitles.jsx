import { FaPhoneAlt } from "react-icons/fa";
import aboutbar from "../assets/about_bar1.png";
import { Button } from "@material-tailwind/react";
import { MdArrowForward, MdOutlinePhoneCallback } from "react-icons/md";

function HandPickedTitles() {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full flex justify-start bg-white">
        <img src={aboutbar} className="w-fit h-8 md:h-16 rotate-180 " alt="" />
      </div>
      {/* // ? top section contet */}
      <div className="grid lg:flex  lg:p-12   justify-center items-center mt-12 ml-12 mb-12 gap-6">
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
        <div className="w-full p-4 relative flex flex-col justify-start items-start">
          <div className="w-[30rem] mx-auto">
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={blogContent.image}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className=" object-cover transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold  text-lg text-zinc-700">
                  {blogContent.title}
                </h2>
                <h2 className="font-normal  text-sm text-zinc-500">
                  {blogContent.description}
                </h2>
                <div className="flex items-center justify-center">
                  <Button className="rounded-full mt-6 bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6 border border-gray-600 text-white">
                    Register
                    <i className="flex icon w-6 h-6 text-black bg-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
                      <MdArrowForward />
                    </i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-3 mt-16 lg:px-16">
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
                <h2 className="font-bold  text-lg text-zinc-700">
                  {blogContent.title}
                </h2>
                <h2 className="font-normal  text-sm text-zinc-500">
                  {blogContent.description}
                </h2>
                <div className="flex flex-wrap gap-5 my-9 justify-center">
                  <Button className="rounded-full flex border border-black bg-white items-center gap-3 capitalize font-archivo font-medium text-xs text-black py-[3px] pr-[3px] pl-6">
                    Request a Callback
                    <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                      <MdOutlinePhoneCallback />
                    </i>
                  </Button>
                  <Button className="rounded-full bg-black flex items-center justify-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2  ">
                    Know More
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
      <div className="flex items-center justify-center mt-12 mb-6">
        <Button className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6 border border-gray-600 text-white">
          View All Programms
          <i className="flex icon w-6 h-6 text-black bg-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
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
