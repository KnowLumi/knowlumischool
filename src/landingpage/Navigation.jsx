import { useState } from "react"
import { Drawer, Button } from "@material-tailwind/react";
import { CgMenuLeftAlt, CgSearch } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { pages } from "./landing_helpers";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/navlogo.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <nav className={`flex justify-between fixed z-50 bg-[#FEFEFE] items-center w-full py-3 md:py-6 px-3 md:px-12 font-archivo border-b-2`}>
      <img
        src={logo1}
        alt=""
        className="object-contain w-[126px] h-[34px] md:w-[169px] md:h-[46px]"
      />
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

      <div className="md:hidden flex items-center gap-4">
        <i className="h-5 w-5 flex justify-center items-center">
          <CgSearch size={20} />
        </i>
        <i
          onClick={openDrawer}
          className="rounded-lg h-5 w-5 flex justify-center items-center"
        >
          <CgMenuLeftAlt size={20} />
        </i>
      </div>

      <Drawer placement="right" open={open} onClose={closeDrawer}>
        <div className="my-3 mx-2 flex items-center justify-end">
          <button onClick={closeDrawer}>
            <RxCross1 size={25} />
          </button>
        </div>
        <ul className="flex flex-col gap-8 mx-5 my-8">
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
        </ul>
        <Button className="capitalize font-archivo font-semibold bg-black text-sm mx-5">
          Login/Sign Up
        </Button>
      </Drawer>
    </nav>
  );
};

export default Navigation;
