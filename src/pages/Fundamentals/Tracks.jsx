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
      <div className="flex flex-wrap items-center justify-center gap-6">
        {tracks.map((item, i) => (
          <div 
            key={`track_${i}`}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-96"
          >
            {/* Track Number Badge */}
            <div className="inline-flex items-center self-start bg-[#88DB1B] hover:bg-[#7ac718] transition-colors rounded-full py-2 px-4">
              <MdHdrStrong className="text-white w-4 h-4" />
              <span className="font-bold text-sm text-white ml-2">
                TRACK {i + 1}
              </span>
            </div>

            <div className="h-60">

            {/* Title */}
            <h2 className="font-semibold text-base text-gray-800 mt-4 mb-6 flex-grow">
              {item.title}
            </h2>

            {/* Technology Icons */}
            <div className="flex items-center gap-6 mb-6">
              <img src={mongo} alt="MongoDB" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={node} alt="Node.js" className="w-6 h-6 hover:scale-110 transition-transform" />
              <img src={reactjs} alt="React" className="w-6 h-6 hover:scale-110 transition-transform" />
            </div>

            {/* Stats */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 group">
                <MdVideoLibrary className="w-5 h-5 text-[#FF9F1C] group-hover:text-[#f39518] transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  41 Recorded Videos
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <TbFileFilled className="w-5 h-5 text-[#FF9F1C] group-hover:text-[#f39518] transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  4 Projects
                </span>
              </div>
            </div>
            </div>

            {/* Button */}
            <Link 
              to="/track" 
              state={{ data: i + 1 }}
              className="mt-auto w-full"
            >
              <button className="w-full flex items-center justify-center gap-2 bg-[#88DB1B] hover:bg-[#7ac718] rounded-full text-white py-3 px-6 font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-md">
                <span>View More</span>
                <MdKeyboardDoubleArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Tracks;
