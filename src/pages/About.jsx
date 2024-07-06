import { useState, useEffect } from 'react';
import { MdHdrStrong, MdVideoLibrary, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { TbFileFilled } from 'react-icons/tb';


const About = () => {
  const [showBox, setShowBox] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setShowBox(true);
    } else {
      setShowBox(false);
    }
    setLastScrollTop(st <= 0 ? 0 : st);
  };
  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="relative">
      <div className="flex flex-col gap-4 mt-10 md:-ml-14 md:pl-">
        <h3 className="text-[#4258BE] font-semibold text-xl">Mastering Tracks</h3>
        <span className="font-light text-sm md:w-80">
          Choose your career track, or let us choose it for you!
        </span>
        <div className="flex flex-wrap gap-[18px] w-[500px]">
          {new Array(4).fill("").map((item, index) => (
            <div
              key={`Learning_fundamentals_track_${index + 1}`}
              className="bg-white rounded-xl w-[205px] h-[205px] py-4 px-3.5 flex flex-col gap-4"
            >
              <div className="flex items-center w-fit bg-[#88DB1B] rounded-full py-1 px-2 gap-1">
                <MdHdrStrong className="text-white w-2 h-2" />
                <span className="font-bold text-[8px] text-white">TRACK 1</span>
              </div>
              <h2 className="font-normal text-xs">
                Full-Stack Development with MERN Stack
              </h2>

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
              <div className="flex items-center gap-1">
                <span className="text-[#88DB1B] font-normal text-xs">
                  View More
                </span>
                <MdKeyboardDoubleArrowRight className="w-3.5 h-3.5 text-[#FF9F1C]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showBox && (
        <div className="absolute top-0 left-0 bg-gray-200 p-4 shadow-md ease-in">
          I am a box
        </div>
      )}
    </div>
  );
};

export default About