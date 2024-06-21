import { Input, Button } from "@material-tailwind/react";
import { MdFilterAlt, MdAddBox, MdBorderColor } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["SI. No.", "Name", "Track", "Date", "Review", "Actions"];

const TABLE_ROWS = [
  {
    id: 1,
    name: "John Samuel",
    track: "Full stack Web Development MERN Stack",
    date: "11-05-2024",
    review:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. ",
  },
  {
    id: 2,
    name: "John Samuel",
    track: "Full stack Web Development MERN Stack",
    date: "11-05-2024",
    review:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. ",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-9 px-9 py-8 h-screen w-full overflow-y-scroll">
      <h1 className="font-bold text-4xl">Testimonials</h1>
      <div className="flex items-center justify-between gap-4 w-full ">
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search"
            className="!border !border-gray-300 font-archivo placeholder:font-archivo bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "w-[21.5rem]",
            }}
          />
          <Button className="bg-[#EBF2D4] text-black gap-3 h-[42px] py-0 px-4 border border-[#2D2D2D33] rounded-lg flex justify-evenly items-center font-archivo">
            <span className="capitalize text-sm font-normal">Apply Filter</span>
            <MdFilterAlt className="w-4 h-4" />
          </Button>
        </div>

        <Link to="addreview">
          <Button className="bg-[#297045] min-w-40 text-white font-archivo rounded-lg flex items-center justify-evenly gap-2.5 py-2 px-3">
            <span className="capitalize font-bold text-[16px]">
              Add New Review
            </span>
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
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={`testimonial_${row.id}`} className="border-b-2">
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {row.id}
                  </span>
                </td>
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {row.name}
                  </span>
                </td>
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {row.track}
                  </span>
                </td>
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <span className="font-light text-sm text-[#2D2D2D]">
                    {row.date}
                  </span>
                </td>
                <td
                  className={`${classes} border-e-[1.5px] border-[#2D2D2D1A] text-center`}
                >
                  <p className="font-light text-sm text-[#2D2D2D] w-[13rem]">
                    {row.review}
                  </p>
                </td>
                <td className={`flex flex-col items-center gap-5 p-4`}>
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

export default Testimonials;
