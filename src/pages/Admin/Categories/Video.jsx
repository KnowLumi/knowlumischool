import { LuCalendarClock } from "react-icons/lu";
import { Button } from "@material-tailwind/react";
const Video = () => {
  return (
    <div className="bg-white w-full rounded-xl p-7 flex flex-col items-center gap-5">
      <iframe
        width="100%"
        height="264"
        src="https://www.youtube-nocookie.com/embed/-yIsQPp31L0?si=FfM4nzqIBKSj_IdE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded-lg"
      ></iframe>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-between items-center text-[#2D2D2DCC]">
          <h3 className="font-bold text-2xl tracking-wide">Video Name</h3>
          <div className="flex items-center gap-2">
            <LuCalendarClock className="w-4 h-4" />
            <span className="font-normal text-sm ">Uploaded on 01-05-2024</span>
          </div>
        </div>
        <div className="flex items-center gap-6 font-bold text-lg tracking-wide">
          <span className="text-[#297045]">Fundamentals</span>
          <span className="text-[#2D2D2D]">Order: 10</span>
        </div>
        <p className="text-[#2D2D2D] text-xs tracking-wide">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
        </p>
      </div>
      <div className="flex items-center gap-5 text-white">
        <Button className="capitalize font-archivo font-bold text-sm rounded-md bg-[#00A156] px-12">
          Save Changes
        </Button>
        <Button className="capitalize font-archivo font-bold text-sm rounded-md bg-[#FF9F1C] px-12">
          Edit Assessment
        </Button>
      </div>
    </div>
  );
};

export default Video;
