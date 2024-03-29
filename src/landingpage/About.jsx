import { Button } from "@material-tailwind/react";
import { MdHdrStrong } from "react-icons/md";

const About = () => {
  return (
    <div className="flex flex-col bg-[#E6F3D6]">
      <div className="flex justify-end bg-[#F7F7F7]">
        <div className="w-48 md:w-96 h-0 border-b-[3rem] md:border-b-[6rem] border-b-[#E6F3D6] border-l-[2.5rem] md:border-l-[5rem] border-l-transparent "></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center m-20 h-full">
        <div className="flex flex-col items-start md:items-end justify-between gap-6">
          <Button
            className="flex justify-around items-center gap-2 font-archivo text-black opacity-60 rounded-full tracking-wider"
            color="white"
          >
            <MdHdrStrong className="w-6 h-3 p-0 text-[#88DB1B]" />
            why KNOWLUMI
          </Button>
          <div className="flex flex-col items-start md:items-end">
            <span className="font-light text-4xl">About</span>
            <span className="font-light text-6xl">Knowlumi</span>
          </div>
        </div>
        <p className="font-archivo mt-8 md:mt-0 font-light text-sm text-black w-96">
          Discover transformative educational opportunities with KnowLumi&apos;s
          dynamic courses and programs: Turning Aspirations into Achievements!
          Have you ever felt limited by the resources available for your
          educational journey? KnowLumi breaks down these barriers, offering a
          diverse range of courses and programs that transcend traditional
          boundaries. Join a community of learners, access expert mentorship,
          and embark on a path where your personal growth contributes to a
          thriving collective.
        </p>
      </div>
    </div>
  );
};

export default About;
