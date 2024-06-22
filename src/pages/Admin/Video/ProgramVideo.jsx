import { useState } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import {
  MdBorderColor,
  MdFilterAlt,
  MdAddBox,
  MdPlayArrow,
  MdVisibility,
} from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ViewVideo from "./ViewVideo";
const TABLE_HEAD = ["Order", "category", "Type", "Week & Day", "Actions"];
const TABLE_ROWS = [
  {
    order: 12,
    category: "Fundamentals",
    type: "Video",
    weekDay: "Week 2, Day 5",
  },
  {
    order: 12,
    category: "Full Stack",
    type: "Assessment",
    weekDay: "Week 2, Day 5",
  },
  {
    order: 12,
    category: "Fundamentals",
    type: "Video",
    weekDay: "Week 2, Day 5",
  },
  {
    order: 12,
    category: "Full Stack",
    type: "Assessment",
    weekDay: "Week 2, Day 5",
  },
  {
    order: 12,
    category: "Fundamentals",
    type: "Video",
    weekDay: "Week 2, Day 5",
  },
];
const ProgramVideo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex flex-col gap-9 w-full px-4 py-8 h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Program Videos</h1>
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
        <Link to="/admin/home/video/addvideo" state={{ data: false }}>
          <Button className="bg-[#297045] min-w-40 text-white font-archivo rounded-lg flex items-center justify-evenly gap-2.5 py-2 px-3">
            <span className="capitalize font-bold text-[16px]">
              Add new Video
            </span>
            <MdAddBox className="w-6 h-6" />
          </Button>
        </Link>
      </div>
      <table className="w-full min-w-max table-auto text-left shadow-md rounded-xl">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className={`border-b-2 border-[#2D2D2D33] bg-[#EBF2D4] p-4 text-center ${
                  index === 0 ? "rounded-tl-xl" : ""
                } ${
                  index === TABLE_HEAD.length - 1 ? "rounded-tr-xl" : "border-e"
                }`}
              >
                <span className="font-semibold text-[16px] text-[#2D2D2D] leading-none">
                  {head}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ order, category, type, weekDay }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = `${
              isLast ? "p-4" : "p-4 border-b border-blue-gray-50"
            } border-e-[1.5px] border-[#2D2D2D1A] `;
            return (
              <tr key={`cat-row-${index + 1}`} className="border-b-2">
                <td className={`${classes} gap-3 flex items-center`}>
                  <span className="font-light border-[1.5px] border-[#2D2D2D66] text-sm text-[#2D2D2D] bg-[#2D2D2D0D] py-2 px-6 rounded-lg">
                    {order}
                  </span>
                  <Button className="font-archivo font-bold capitalize text-xs tracking-wider text-white bg-[#00A156] rounded-md py-3">
                    Save
                  </Button>
                </td>
                <td className={classes}>
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {category}
                  </span>
                </td>
                <td className={classes}>
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {type}
                  </span>
                </td>
                <td className={classes}>
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {weekDay}
                  </span>
                </td>
                <td
                  className={`${classes} flex items-center justify-center gap-5`}
                >
                  <Button
                    onClick={handleOpen}
                    className="font-archivo font-bold text-xs tracking-wider text-white bg-[#2D2D2D] rounded-md py-2 px-4"
                  >
                    {type === "Assessment" ? (
                      <MdVisibility className="w-6 h-6" />
                    ) : (
                      <MdPlayArrow className="w-6 h-6" />
                    )}
                  </Button>
                  <Button className="font-archivo font-bold text-xs tracking-wider text-white bg-[#FF9F1C] rounded-md py-3 px-4">
                    <MdBorderColor className="w-4 h-4" />
                  </Button>
                  <Button className="font-archivo font-bold text-xs tracking-wider text-white bg-[#EC2020] rounded-md py-3 px-4">
                    <RiDeleteBin6Fill className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3 className="flex justify-center font-bold text-[#2D2D2D66] text-[10px] tracking-widest">
        ©2024 Knowlumi. All Rights Reserved
      </h3>
      <ViewVideo open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default ProgramVideo;
