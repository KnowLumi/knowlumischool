import { Input, Button } from "@material-tailwind/react";
import {
  MdFilterAlt,
  MdAddBox,
  MdBorderColor,
  MdSwapVert,
} from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const TABLE_HEAD = ["Name", "Mobile No.", "Email", "Registered on", "Actions"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    mobile: 95622042841,
    email: "abc@example.com",
    date: "12-05-2024",
  },
  {
    name: "John Michael",
    mobile: 95622042841,
    email: "abc@example.com",
    date: "12-05-2024",
  },
];

const Students = () => {
  
  return (
    <div className="flex flex-col gap-9 px-11 py-8 h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Students</h1>
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search"
          className="!border !border-gray-300 font-archivo placeholder:font-archivo bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{
            className: "w-[21rem]",
          }}
        />
        <Button className="bg-[#EBF2D4] min-w-36 text-black gap-3 h-[42px] py-0 px-4 border border-[#2D2D2D33] rounded-lg flex justify-evenly items-center font-archivo">
          <span className="capitalize text-sm font-normal">Apply Filter</span>
          <MdFilterAlt className="w-4 h-4" />
        </Button>
        <Input
          type="text"
          placeholder="Enter Name"
          className="!border !border-gray-300 font-archivo placeholder:font-archivo bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{
            className: "w-[21rem]",
          }}
        />
        <Input
          type="tel"
          placeholder="Mobile Number"
          className="!border !border-gray-300 font-archivo placeholder:font-archivo bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{
            className: "w-[21rem]",
          }}
        />
        <Link to="addstudent">
          <Button className="bg-[#297045] min-w-40 text-white font-archivo rounded-lg flex justify-evenly items-center gap-2.5 py-2 px-3">
            <span className="capitalize font-bold text-[16px]">Add User</span>
            <MdAddBox className="w-6 h-6" />
          </Button>
        </Link>
      </div>
      <table className="w-full min-w-max table-auto text-left shadow-lg rounded-xl">
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
                <div className="flex items-center justify-center gap-11">
                  <span className="font-semibold text-[16px] text-[#2D2D2D] leading-none">
                    {head}
                  </span>
                  {head === "Name" && (
                    <MdSwapVert className="w-6 h-6 text-[#2D2D2D99] cursor-pointer" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, mobile, email, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={name} className="border-b-2">
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {name}
                  </span>
                </td>
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {mobile}
                  </span>
                </td>
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {email}
                  </span>
                </td>
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {date}
                  </span>
                </td>
                <td
                  className={`${classes} flex items-center justify-center gap-5 border-e-[1.5px] border-[#2D2D2D1A]`}
                >
                  <Button className="font-archivo font-bold text-xs tracking-wider text-white bg-[#00A156] rounded-md py-3">
                    RESET
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
    </div>
  );
};

export default Students;