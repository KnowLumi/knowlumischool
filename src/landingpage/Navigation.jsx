import { useState } from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { IoSearchOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
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
      <form className="flex items-center  h-10 rounded-lg px-2 border focus:outline-blue-500 hover:border-blue-500">
        <IoSearchOutline size={20} />
        <input
          type="text"
          className="px-2 focus:outline-none placeholder:text-[#1F1F1F] placeholder:opacity-60"
          placeholder="Search"
        />
      </form>
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
      </ul>
      <div className="md:flex gap-2 items-center hidden">
        <Button
          variant="text"
          className="capitalize font-inter font-bold text-sm"
        >
          Login
        </Button>
        <Button className="capitalize font-inter font-bold text-sm py-3 px-5">
          Signup
        </Button>
      </div>
      <button
        onClick={openDrawer}
        className="md:hidden block rounded-lg hover:bg-gray-500 p-1"
      >
        <BiMenuAltRight size={35} />
      </button>
      <Drawer placement="right" open={open} onClose={closeDrawer} className="">
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
        <div className="flex gap-4 m-5 items-center">
          <Button
            variant="text"
            className="capitalize  font-inter font-bold text-sm"
          >
            Login
          </Button>
          <Button className="capitalize  font-inter font-bold text-sm">
            Signup
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
