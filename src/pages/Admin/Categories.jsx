import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  MdBorderColor,
  MdSchool,
  MdKeyboardDoubleArrowRight,
  MdPlayArrow,
  MdVisibility,
} from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import PopupMenu from "./Categories/PopupMenu";
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
const Card = ({ icon, title, color }) => (
  <div className="p-6 min-w-[21rem] bg-white rounded-xl shadow-md cursor-pointer">
    <div
      className={`bg-[${color}] text-white w-12 h-12 text-3xl mb-4 flex items-center justify-center p-3 rounded-lg`}
    >
      {icon}
    </div>
    <div className={`text-2xl mt-7 font-bold text-[${color}]`}>{title}</div>
    <div className={`mt-3 text-sm text-[${color}] font-semibold`}>
      VIEW MORE &nbsp; &nbsp; &raquo;
    </div>
  </div>
);

const Categories = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col gap-9 px-6 py-8 h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Categories</h1>
      <div className="flex justify-between space-x-4">
        <Card
          icon={
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
          }
          title="Fundamentals"
          color="#297045"
        />
        <Card icon={<MdSchool />} title="Master Tracks" color="#2D2D2D" />
        <Card
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.04511 0H8.95489C8.17504 0 7.5253 3.87789e-08 7.01003 0.0693976C6.46525 0.142265 5.9734 0.303615 5.5787 0.698313C5.18313 1.09388 5.02178 1.58573 4.94892 2.12964C4.87952 2.64578 4.87952 3.29639 4.87952 4.07537V4.14304C3.12636 4.20029 2.07325 4.40501 1.34198 5.13716C0.325302 6.15296 0.325302 7.78901 0.325302 11.0602C0.325302 14.3315 0.325302 15.9675 1.34198 16.9833C2.35778 18 3.99383 18 7.26506 18H10.7349C14.0062 18 15.6422 18 16.658 16.9833C17.6747 15.9675 17.6747 14.3315 17.6747 11.0602C17.6747 7.78901 17.6747 6.15296 16.658 5.13716C15.9267 4.40501 14.8736 4.20029 13.1205 4.14304V4.07537C13.1205 3.29639 13.1205 2.64578 13.0511 2.13051C12.9782 1.58574 12.8169 1.09388 12.4213 0.699181C12.0266 0.303614 11.5347 0.142265 10.99 0.0693976C10.4747 3.87789e-08 9.8241 0 9.04511 0ZM11.8193 4.12222V4.12048C11.8193 3.28424 11.8175 2.72212 11.762 2.30313C11.7074 1.90323 11.6146 1.73147 11.5018 1.6187C11.389 1.50593 11.2173 1.41311 10.8165 1.35846C10.3984 1.30294 9.83624 1.3012 9 1.3012C8.16376 1.3012 7.60164 1.30294 7.18265 1.35933C6.78275 1.41311 6.61099 1.50593 6.49822 1.61957C6.38545 1.73234 6.29263 1.90323 6.23798 2.30313C6.18333 2.72212 6.18072 3.28424 6.18072 4.12048V4.12222C6.52077 4.12048 6.88164 4.12048 7.26506 4.12048H10.7349C11.1184 4.12048 11.4792 4.12048 11.8193 4.12222ZM13.3374 6.72289C13.3374 6.95296 13.246 7.1736 13.0833 7.33629C12.9206 7.49897 12.6999 7.59036 12.4699 7.59036C12.2398 7.59036 12.0192 7.49897 11.8565 7.33629C11.6938 7.1736 11.6024 6.95296 11.6024 6.72289C11.6024 6.49282 11.6938 6.27218 11.8565 6.1095C12.0192 5.94682 12.2398 5.85542 12.4699 5.85542C12.6999 5.85542 12.9206 5.94682 13.0833 6.1095C13.246 6.27218 13.3374 6.49282 13.3374 6.72289ZM5.53012 7.59036C5.76019 7.59036 5.98083 7.49897 6.14352 7.33629C6.3062 7.1736 6.39759 6.95296 6.39759 6.72289C6.39759 6.49282 6.3062 6.27218 6.14352 6.1095C5.98083 5.94682 5.76019 5.85542 5.53012 5.85542C5.30005 5.85542 5.07941 5.94682 4.91673 6.1095C4.75405 6.27218 4.66265 6.49282 4.66265 6.72289C4.66265 6.95296 4.75405 7.1736 4.91673 7.33629C5.07941 7.49897 5.30005 7.59036 5.53012 7.59036Z"
                fill="white"
              />
            </svg>
          }
          title="Placement Assistance"
          color="#FF9F1C"
        />
      </div>
      <div className="flex justify-between items-center w-full ">
        <span className=" text-[#2D3648] font-semibold text-2xl">
          Latest Entries
        </span>
        <div className="flex items-center gap-2 text-[#297045]">
          <span className="font-semibold text-sm">VIEW ALL ENTRIES</span>
          <MdKeyboardDoubleArrowRight />
        </div>
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
                    onClick={() => {
                      setCurrentIndex(index);
                      handleOpen();
                    }}
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
      <PopupMenu
        data={TABLE_ROWS[currentIndex]}
        open={open}
        handleOpen={handleOpen}
      />
    </div>
  );
};

export default Categories;
