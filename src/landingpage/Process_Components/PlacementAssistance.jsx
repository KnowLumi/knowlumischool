import { Carousel, Badge, Avatar, Button } from "@material-tailwind/react";
import { freeAddons } from "./process_helpers";
import { MdArrowForward } from "react-icons/md";
const PlacementAssistance = () => {
  return (
    <div className="flex flex-col h-fit mb-20">
      <h1 className="font-normal text-5xl">Placement Assistance</h1>
      <p className="w-[32rem] text-xs font-light tracking-wider mt-8">
        Gain Access to Top Companies and Personalized Training with Our
        Comprehensive Placement Assistance Program!
      </p>
      <div className="flex flex-col mt-9 gap-4">
        <h3 className="text-[#4258BE] font-semibold text-xl">
          Referrals to top companies
        </h3>
        <div className="flex items-center gap-7">
          <div className="bg-white rounded-2xl w-[8.25rem] h-20 border border-[#0101011A]"></div>
          <p className="w-[16.5rem] text-xs font-light tracking-wider">
            Unlock Referral Opportunities to Top Companies and Propel Your
            Career Forward
          </p>
        </div>
      </div>
      <div className="flex flex-col relative items-center mt-9 gap-4 rounded-2xl bg-[#88DB1B0D] p-6">
        <h3 className="text-[#4258BE] font-semibold text-xl tracking-wider">
          Our Exceptional Mentors
        </h3>
        <Carousel
          autoplay
          loop
          className="rounded-xl pb-7"
          prevArrow={""}
          nextArrow={""}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 bg-[#4258BE]"
                      : "w-2 bg-[#4258BE66]"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="flex pb-7 justify-between gap-5">
            <div className="flex flex-col h-40 bg-white rounded-xl px-7 py-5">
              <div className="flex w-[11.5rem] justify-between">
                <Badge
                  content={
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      className=" rounded-full"
                    />
                  }
                  overlap="circular"
                  placement="bottom-end"
                  className="bg-white w-9 h-9"
                >
                  <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="profile picture"
                    size="xl"
                  />
                </Badge>
                <div className="flex flex-col p-3.5 gap-3.5">
                  <span className="text-sm font-semibold leading-4 tracking-wider text-left w-16 h-6">
                    John Samuel
                  </span>
                  <span className="text-xs font-medium leading-4 tracking-wider text-left text-[#01010199]">
                    Swiggy
                  </span>
                </div>
              </div>
              <span className="text-xs italic pt-3 mt-3 border-t-2 text-[#010101] font-normal leading-4 tracking-wider text-left">
                Senior Producr designer
              </span>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col mt-9 gap-7">
        <h3 className="text-[#4258BE] font-semibold text-xl tracking-wider">
          Free Add-ons:
        </h3>
        <ul className="w-[33.5rem] flex flex-wrap gap-7">
          {freeAddons.map((item, i) => (
            <li key={`freeAddon_${i}`} className="flex gap-3.5 w-60">
              {item.icon}
              <span className="font-light text-sm tracking-wider">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-8 items-center mt-9">
        <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] bg-black text-white py-1 pr-1 pl-6">
          Join Our Program
          <i className="flex w-8 h-8 text-white -rotate-45 border border-[#0101010D] bg-[#FFFFFF4D] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {new Array(3).fill("").map((_, i) => (
              <Avatar
                variant="circular"
                key={i}
                size="xs"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            ))}
          </div>
          <span className="font-medium text-[10px] md:text-xs underline">
            100+ successful students
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlacementAssistance;
