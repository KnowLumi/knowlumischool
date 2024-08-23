import { useState, useContext } from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { CgMenuLeftAlt, CgSearch } from "react-icons/cg";
import { Context } from "../App";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { pages } from "./landing_helpers";
import { NavLink, Link } from "react-router-dom";
import logo1 from "/Images/logo.png";
import NavMenu from "../Navigation/NavMenu";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [signedIn] = useContext(Context);
  return (
    <nav
      className={`flex justify-between fixed z-50 bg-[#FEFEFE] items-center w-full py-3 md:py-2.5 px-3 md:px-12 font-archivo border-b-2`}
    >
      <img
        src={logo1}
        alt=""
        className="object-cover w-56"
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
        <Link to={signedIn ? "/progress" : "/"}>
          <Button
            className={`flex items-center capitalize ${
              signedIn
                ? "bg-white py-1 px-2.5 border"
                : "bg-black py-1 pr-1 pl-3"
            } font-archivo rounded-full`}
          >
            {signedIn ? (
              <span className="capitalize text-black font-medium text-xs p-1">
                My Learning
              </span>
            ) : (
              <a href="#explore">
                <span className="font-medium text-xs">
                Explore&nbsp;<span className="lowercase"> our programs</span>
              </span>
              </a>
            )}

            {signedIn ? (
              <i></i>
            ) : (
              <i className="rounded-full bg-gray-800 ml-2 w-6 h-6 flex items-center justify-center">
                <FaArrowRight className="text-[#F7F7F7] -rotate-45" />
              </i>
            )}
          </Button>
        </Link>
      </ul>

      {signedIn ? (
        <NavMenu />
      ) : (
        <Link to="/signin">
          <Button className="hidden md:block capitalize font-archivo font-semibold bg-black rounded-full text-sm py-1.5 px-4">
            Login/Sign Up
          </Button>
        </Link>
      )}

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
        <ul className="flex flex-col gap-8 m-8">
          {pages.map((page, index) => (
            <li key={index}>
              <NavLink
                to={page.route}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"}`
                }
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {signedIn ? (
          <Link to="/progress" className="mx-7">
            <Button className="font-archivo capitalize rounded-full bg-white border text-black text-sm">
              My Learning
            </Button>
          </Link>
        ) : (
          <Link to="/signin">
            <Button className="capitalize font-archivo font-semibold bg-black text-sm mx-5">
              Login/Sign Up
            </Button>
          </Link>
        )}
      </Drawer>
    </nav>
  );
};

export default Navigation;
