import blogContentHelpers from './blogContentHelpers'
import { Button } from "@material-tailwind/react";
import { MdArrowForward, MdOutlinePhoneCallback, } from "react-icons/md";

const OurCourse = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center align-center md:mt-[10rem]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-center mb-4">Programs</h1>
      </div><div className="flex flex-col md:flex-row flex-wrap items-center justify-center mt-8">
        {blogContentHelpers.map((data, index) => (
          <div
            key={index}
            className="w-full md:w-[30%] max-w-lg  xl:h-[28rem] 2xl:h-[10%]  h-[35rem] p-2"
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl hover:shadow-gray-200 border border-[#88DB1B]">
              <div className="w-full h-[30vh] aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={data.image}
                  alt={`${data.title} thumbnail`}
                  className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover object-center transition duration-200 w-full h-full" />
              </div>
              <div className="p-4">
                <h2 className="text-center font-bold text-xl text-zinc-700">
                  {data.title}
                </h2>
                <h2 className="text-center font-bold text-lg text-gray-700">
                  {data.bold}
                </h2>
                <h2 className="font-normal text-center text-sm text-zinc-500">
                  {data.description}
                </h2>
                <div className="flex flex-col md:flex-row gap-x-4 my-6 justify-center items-center">
                  <Button className="w-60 lg:w-auto md:w-72 rounded-full flex border border-black bg-white items-center justify-center gap-3 capitalize font-archivo font-medium text-[14px] text-black py-2 px-4">
                    Request a Callback
                    <i className="flex w-6 h-6 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                      <MdOutlinePhoneCallback />
                    </i>
                  </Button>
                  <a href={`/course/${data.id}`}>
                    <Button className="w-60 lg:w-auto md:w-64 rounded-full bg-black flex items-center justify-center gap-3 capitalize font-archivo font-medium  py-2 pr-2 mt-4 md:mt-0">
                      Know More
                      <i className="flex icon w-6 h-6 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
                        <MdArrowForward />
                      </i>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OurCourse
