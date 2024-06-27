import {
  MdHdrStrong,
  MdVideoLibrary,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { TbFileFilled } from "react-icons/tb";
import mongo from "../../landingpage/Process_Components/logos/mongo.png";
import node from "../../landingpage/Process_Components/logos/node.png";
import reactjs from "../../landingpage/Process_Components/logos/react.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { tracks } from "../helpers/fundamentalhelpers";

const Tracks = () => {
  return (
    <div className="flex flex-col mx-6 my-20 px-3 md:m-20 items-center gap-12">
      <div className="flex flex-col gap-6 items-center">
        <h2 className="font-bold text-3xl md:text-4xl tracking-wide text-[#88DB1B]">
          Mastering Tracks
        </h2>
        <p className="font-light text-sm tracking-wider md:w-[46rem]">
          Have you ever felt limited by the resources available for your
          educational journey? KnowLumi breaks down these barriers, offering a
          diverse range of courses and programs that transcend traditional
          boundaries.
        </p>
      </div>
      <div className="flex flex-wrap gap-7">
        {tracks.slice(1).map((item, i) => (
          <div key={`track_${i}`} className="bg-white rounded-xl w-52 py-4 px-3.5 flex flex-col gap-4">
            <div className="flex items-center w-fit bg-[#88DB1B] rounded-full py-1 px-2 gap-1">
              <MdHdrStrong className="text-white w-2 h-2" />
              <span className="font-bold text-[8px] text-white">TRACK {i + 1}</span>
            </div>
            <h2 className="font-normal text-xs">
              {item.title}
            </h2>
            <div className="flex gap-5">
              <img src={mongo} alt="" className="w-4 h-4" />
              <img src={node} alt="" className="w-4 h-4" />
              <img src={reactjs} alt="" className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <MdVideoLibrary className="w-3.5 h-3.5 text-[#FF9F1C]" />
                <span className="font-normal text-[10px] text-[#01010199]">
                  41 Recorded Videos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TbFileFilled className="w-3.5 h-3.5 text-[#FF9F1C]" />
                <span className="font-normal text-[10px] text-[#01010199]">
                  4 projects
                </span>
              </div>
            </div>
            <Link to='/track' state={{ data: (i + 1) }} className="">
              <button className="flex items-center gap-1 bg-[#88DB1B] rounded font-archivo text-white  capitalize px-3 py-2">
                <span className=" font-normal text-xs tracking-wide w-fit">
                  View More
                </span>
                <MdKeyboardDoubleArrowRight className="w-3.5 h-3.5 fundamental_arrow" />
              </button>
            </Link>
          </div>
        ))}

      </div>
      <p className="font-light text-sm tracking-wider md:w-[46rem]">
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  );
};

export default Tracks;
