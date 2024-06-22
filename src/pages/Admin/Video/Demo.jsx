import { useState } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import { MdFilterAlt, MdAddBox } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { Link } from "react-router-dom";
import ViewVideo from "./ViewVideo";


const Card = ({ title, date, thumbnail, handleOpen }) => {
  return (
    <div className="flex items-center p-4 gap-12 w-fit rounded-xl bg-white shadow-md">
      <div className="flex flex-col gap-6">
        {title === "Fundamentals" && (
          <div
            className={`bg-[#2D2D2D] text-white w-12 h-12 text-3xl flex items-center justify-center p-3 rounded-lg`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1C0 0.447715 0.447715 0 1 0H7.1C7.65228 0 8.1 0.447715 8.1 1V7.1C8.1 7.65228 7.65228 8.1 7.1 8.1H1C0.447715 8.1 0 7.65228 0 7.1V1ZM13.95 0C16.2 0 18 1.8 18 4.05C18 6.3 16.2 8.1 13.95 8.1C11.7 8.1 9.9 6.3 9.9 4.05C9.9 1.8 11.7 0 13.95 0ZM3.78853 11.2648C3.90322 11.0609 4.19678 11.0609 4.31147 11.2648L7.84852 17.5529C7.96101 17.7529 7.81649 18 7.58705 18H0.512954C0.283506 18 0.138992 17.7529 0.251482 17.5529L3.78853 11.2648ZM15.3 13.2C15.3 13.3657 15.4343 13.5 15.6 13.5H17.7C17.8657 13.5 18 13.6343 18 13.8V15C18 15.1657 17.8657 15.3 17.7 15.3H15.6C15.4343 15.3 15.3 15.4343 15.3 15.6V17.7C15.3 17.8657 15.1657 18 15 18H13.8C13.6343 18 13.5 17.8657 13.5 17.7V15.6C13.5 15.4343 13.3657 15.3 13.2 15.3H11.1C10.9343 15.3 10.8 15.1657 10.8 15V13.8C10.8 13.6343 10.9343 13.5 11.1 13.5H13.2C13.3657 13.5 13.5 13.3657 13.5 13.2V11.1C13.5 10.9343 13.6343 10.8 13.8 10.8H15C15.1657 10.8 15.3 10.9343 15.3 11.1V13.2Z"
                fill="white"
              />
            </svg>
          </div>
        )}

        <h3
          className={`font-bold max-w-[12rem] ${
            title === "Fundamentals"
              ? "text-[#2D2D2D] text-[28px]"
              : "text-[#297045] text-xl"
          }`}
        >
          {title}
        </h3>
        <div
          className={`flex items-center gap-2 ${
            title === "Fundamentals" ? "text-[#2D2D2D]" : "text-[#297045]"
          }`}
        >
          <LuCalendarClock className="w-4 h-4" />
          <span className="text-sm font-normal">Uploaded on {date}</span>
        </div>
        <Button
          onClick={handleOpen}
          className="font-archivo w-fit font-bold capitalize text-sm tracking-wider text-white bg-[#297045] rounded-lg py-2 px-3"
        >
          View Video
        </Button>
      </div>
      <img
        src={thumbnail}
        className="w-60 h-[10rem] rounded-lg object-cover"
        alt=""
      />
    </div>
  );
};

const Demo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex flex-col gap-9 w-full px-4 py-8 h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Demo Videos</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Select
            label="Search"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "w-[16rem]",
            }}
            className="!border !border-gray-300 font-archivo placeholder:font-archivo bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
          >
            <Option defaultChecked className="text-[#2D2D2DCC] font-archivo">
              Fundamentals
            </Option>
            <Option className="text-[#2D2D2DCC] font-archivo">Track-1</Option>
          </Select>
          <Input
            type="text"
            placeholder="Search"
            className="!border !border-gray-300 font-archivo placeholder:font-archivo bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "w-[16rem]",
            }}
          />
          <Button className="bg-[#EBF2D4] text-black gap-3 h-[42px] min-w-36 py-0 px-4 border border-[#2D2D2D33] rounded-lg flex justify-evenly items-center font-archivo">
            <span className="capitalize text-sm font-normal">Apply Filter</span>
            <MdFilterAlt className="w-4 h-4" />
          </Button>
        </div>
        <Link to="/admin/home/video/addvideo" state={{ data: true }}>
          <Button className="bg-[#297045] min-w-40 text-white font-archivo rounded-lg flex items-center justify-evenly gap-2.5 py-2 px-3">
            <span className="capitalize font-bold text-[16px]">
              Add new Video
            </span>
            <MdAddBox className="w-6 h-6" />
          </Button>
        </Link>
      </div>
      <Card
        title={"Fundamentals"}
        date={"01-05-2024"}
        thumbnail={"/src/pages/Admin/Video/Images/image-0.png"}
        open={open}
        handleOpen={handleOpen}
      />
      <h4 className="text-[#2D3648] font-semibold text-2xl">Master Tracks</h4>
      <div className="flex flex-wrap gap-6 w-full">
        <Card
          title={"Full Stack Web Development"}
          date={"01-05-2024"}
          thumbnail={"/src/pages/Admin/Video/Images/image-0.png"}
          open={open}
          handleOpen={handleOpen}
        />
        <Card
          title={"UI/UX Designing"}
          date={"01-05-2024"}
          thumbnail={"/src/pages/Admin/Video/Images/image-1.png"}
          open={open}
          handleOpen={handleOpen}
        />
        <Card
          title={"Data Science a preview"}
          date={"01-05-2024"}
          thumbnail={"/src/pages/Admin/Video/Images/image-2.png"}
          open={open}
          handleOpen={handleOpen}
        />
        <Card
          title={"Data Analytics Glimpse"}
          date={"01-05-2024"}
          thumbnail={"/src/pages/Admin/Video/Images/image-3.png"}
          open={open}
          handleOpen={handleOpen}
        />
      </div>
      <ViewVideo open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default Demo;
