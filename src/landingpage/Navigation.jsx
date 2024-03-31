import { useState } from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { pages } from "./landing_helpers";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <nav className="flex justify-between items-center w-full py-6 px-3 md:px-12 font-archivo border-b-2">
      <div className="flex items-center gap-2">
        <img src={logo1} className="h-10 w-10" alt="" />
        <div className="flex flex-col px-3 border-l-2">
          <span className="font-extrabold">KNOWLUMI</span>
          <span>Learn-Earn-Achieve</span>
        </div>
      </div>
      {/* <form className="hidden md:flex items-center  h-10 rounded-lg px-2 border focus:outline-black hover:border-black">
        <IoSearchOutline className="cursor-pointer" size={20} />
        <input
          type="text"
          className="px-2 focus:outline-none bg-inherit placeholder:text-[#1F1F1F] placeholder:opacity-60"
          placeholder="Search"
        />
      </form> */}
      <ul className="md:flex gap-8 items-center hidden">
        {pages.map((page, index) => (
          <li key={index}>
            <NavLink
              to={page.route}
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray-500"
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
        <Button className="flex items-center py-1 pr-1 pl-3 capitalize bg-black font-archivo  font-medium text-xs rounded-full">
          Explore&nbsp;<span className="lowercase"> our programs</span>
          <i className="rounded-full bg-gray-800 ml-2 w-6 h-6 flex items-center justify-center">
            <FaArrowRight className="text-[#F7F7F7] -rotate-45" />
          </i>
        </Button>
      </ul>

      <Button className="hidden md:block capitalize font-archivo font-semibold bg-black rounded-full text-sm py-1.5 px-4">
        Login/Sign Up
      </Button>

      <button
        onClick={openDrawer}
        className="md:hidden block rounded-lg hover:bg-gray-500 p-1"
      >
        <CgMenuLeftAlt size={35} />
      </button>
  
      <Drawer placement="right" open={open} onClose={closeDrawer}>
        <div className="my-3 mx-2 flex items-center justify-end">
          <button onClick={closeDrawer}>
            <RxCross1 size={25} />
          </button>
        </div>
        <ul className="flex flex-col gap-5 mx-5">
          {pages.map((page, index) => (
            <li key={index}>
              <NavLink to={page.route}>{page.name}</NavLink>
            </li>
          ))}
        </ul>
        <Button className="capitalize font-archivo font-semibold bg-black text-sm">
          Sign Up
        </Button>
      </Drawer>
    </nav>
  );
};

export default Navigation;
