import { Carousel, Badge, Avatar, Button } from "@material-tailwind/react";
import { freeAddons } from "./process_helpers";
import { MdArrowForward } from "react-icons/md";
import { companies } from "../landing_helpers";
const PlacementAssistance = () => {
  return (
    <div className="flex flex-col h-fit w-full  md:-translate-y-0 mt-12 md:mt-24">
      <div className="flex items-center gap-7 -translate-x-12 md:-translate-x-20 lg:-mt-16">
        <div className="rounded-full min-h-10 min-w-10 md:min-w-[52px] md:min-h-[52px] bg-[#4258BE] flex justify-center items-center text-white font-extrabold">
          3
        </div>
        <h1 className="font-normal text-4xl md:text-[42px] md:w-full w-fit">
          Placement Assistance
        </h1>
      </div>
      <p className="w-[13.25rem] md:w-[31.875rem] text-xs font-light tracking-wider text-left mt-8">
        Gain Access to Top Companies and Personalized Training with Our
        Comprehensive Placement Assistance Program!
      </p>
      <div className="flex flex-col mt-9 w-fit gap-4">
        <h3 className="text-[#4258BE] font-semibold text-xl  text-left">
          Referrals to top companies
        </h3>
        <div className="flex items-center gap-2 md:gap-7">
          <div className="bg-white flex items-center justify-center rounded-2xl w-[8.25rem] h-[72px] border border-[#0101011A]">
            <Carousel
              className="h-fit w-1/2"
              autoplay
              loop
              prevArrow={""}
              nextArrow={""}
              navigation={""}
            >
              {companies.map((comp, i) => (
                <img
                  key={`company_p_${i}`}
                  className="w-fit"
                  src={comp}
                  alt=""
                />
              ))}
            </Carousel>
          </div>
          <p className="w-[110px] md:w-[16.5rem] text-[10px] md:text-xs font-light tracking-wider">
            Unlock Referral Opportunities to Top Companies and Propel Your
            Career Forward
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[267px] md:w-[534px] relative items-center mt-8 gap-4 rounded-2xl bg-[#88DB1B0D] px-6 py-4">
        <h3 className="text-[#4258BE] font-semibold text-left text-[16px] md:text-xl tracking-wider">
          Our Exceptional Mentors
        </h3>
        <Carousel
          autoplay
          loop
          className="rounded-xl pb-4 md:w-[522px]"
          prevArrow={""}
          nextArrow={""}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i
                    ? "w-8 bg-[#4258BE]"
                    : "w-2 bg-[#4258BE66]"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {new Array(2).fill("").map((_, i) => (
            <div key={`exceptional_mentor_${i + 1}`} className="flex flex-wrap pb-7 justify-evenly gap-5">
              <div className="flex flex-col h-[153px] bg-white rounded-xl px-7 py-4">
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
                  Senior Product designer
                </span>
              </div>
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
          ))}

        </Carousel>
      </div>
      <div className="flex flex-col mt-8 gap-6">
        <h3 className="text-[#4258BE] font-semibold text-left text-xl tracking-wider">
          Free Add-ons:
        </h3>
        <ul className="md:w-[33.5rem] flex flex-wrap gap-6">
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
      <div className="flex flex-col md:flex-row w-fit gap-8 items-center mt-7">
        <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-sm bg-black text-white py-1 pr-1 pl-6">
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
