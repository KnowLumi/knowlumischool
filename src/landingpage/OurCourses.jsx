import ReactStars from "react-rating-stars-component";
import { MdVideoLibrary, MdArrowForward, MdHdrStrong } from "react-icons/md";
import { TbFileFilled } from "react-icons/tb";
import "./landing.css";
import course from "../assets/course1.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const OurCourses = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  //bg-[#88DB1B26]
  return (
    <div className="flex flex-col items-center md:px-28 font-archivo">
      <div className="flex justify-between w-full py-20">
        <div className="flex flex-col gap-5">
          <Button
            className="flex justify-around items-center gap-2 font-archivo text-black opacity-60 rounded-full tracking-wider"
            color="white"
          >
            <MdHdrStrong className="w-6 h-3 p-0 text-[#88DB1B]" />
            why KNOWLUMI
          </Button>
          <div className="flex flex-col font-light text-black">
            <span className="text-4xl">Our</span>
            <span className="text-6xl">Courses</span>
          </div>
        </div>
        <p className="w-[24.25rem] font-light text-sm">
          Discover transformative educational opportunities with KnowLumi&apos;s
          dynamic courses and programs: Turning Aspirations into Achievements!
          Have you ever felt limited by the resources available for your
          educational journey? <br /> <br />
          KnowLumi breaks down these barriers, offering a diverse range of
          courses and programs that transcend traditional boundaries. Join a
          community of learners, access expert mentorship, and embark on a path
          where your personal growth contributes to a thriving collective.
        </p>
      </div>

      <div className="our-courses z-10 w-[71rem] h-[32.25rem] bg-no-repeat bg-contain">
        <div className="w-full flex flex-col items-center py-24 h-full">
          <div className="flex items-center justify-between"></div>
          <div className="rounded-2xl bg-white w-80 h-[25rem] flex flex-col pb-5 items-center px-5">
            <div className="relative w-64 h-[6.25rem] bg-[#88DB1B66] mt-9 rounded-xl">
              <div
                style={{ backgroundImage: `url('${course}')` }}
                className="absolute -translate-x-4 -translate-y-3 bg-contain bg-no-repeat w-72 h-[7.25rem]"
              ></div>
            </div>
            <span className="font-normal text-[16px] tracking-wide my-5">
              Full-Stack Web Development with MERN Stack
            </span>
            <div className="flex items-center gap-2 w-full">
              <span className="font-light text-xs text-black">Beginner</span>
              <span className="font-light text-xs text-black">
                (3-6 months)
              </span>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={12}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <span className="font-medium text-xs">4.6</span>
              <span className="font-medium text-[8px] text-[#01010199]">
                (20 reviews)
              </span>
            </div>
            <span className="text-[#01010199] font-light text-xs my-4">
              Master the Full Stack: Build Dynamic Web Applications with MERN!
            </span>
            <div className="flex items-center w-full gap-6">
              <div className="flex items-center gap-2">
                <MdVideoLibrary className="text-[#88DB1B]" />
                <span className="font-normal text-xs text-[#01010199]">
                  41 Recorded Videos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TbFileFilled className="text-[#88DB1B]" />
                <span className="font-normal text-xs text-[#01010199]">
                  4 projects
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Button className="bg-[#88DB1B] text-white capitalize font-archivo font-semibold text-sm py-2.5 px-7">
                Enroll now
              </Button>
              <Button
                variant="outlined"
                className="border-[#88DB1B] text-[#88DB1B] capitalize font-archivo font-semibold text-sm py-2.5 px-7"
              >
                Learn More
              </Button>
            </div>
          </div>
          <Link to='/courses'>
            <button className="flex items-center my-12 bg-white hover:bg-transparent rounded-full py-1 pr-1 pl-6 gap-2 border border-[#01010126]">
              <span className="text-sm">View all courses</span>
              <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-[#88DB1B] justify-center items-center rounded-full -rotate-45">
                <MdArrowForward />
              </i>
            </button>
          </Link>
        </div>
      </div>

      <div className="our-courses  w-[71rem] h-[32.25rem] -translate-y-80 rotate-180 bg-no-repeat bg-contain"></div>
    </div>
  );
};

export default OurCourses;
