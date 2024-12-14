import { useState, useContext } from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { CgMenuLeftAlt, CgSearch } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Context } from "../App";
import { pages } from "./landing_helpers";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo1 from "/Images/knowlumi-brand.svg";
import NavMenu from "../Navigation/NavMenu";
import CustomArrow from "./CustomArrow";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [signedIn] = useContext(Context);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = (tabName) => {
    setActiveTab(tabName);
    console.log(`Active tab changed to: ${tabName}`); // Debugging purpose
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  const navItems = [
    { itemName: "Data" },
    { itemName: "Design" },
    { itemName: "Product" },
    { itemName: "Growth" },
    { itemName: "Gen Ai" },
  ];

  return (
    <nav className="flex justify-between fixed z-50 bg-[#FEFEFE] items-center w-full py-3 md:py-2.5 px-3 md:px-12 font-archivo border-b-2">
      {/* Logo */}
      <Link to="/">
        <img loading="lazy" src={logo1} alt="" className="object-cover w-56" />
      </Link>

      {/* Desktop Navigation */}

      {/* Explore Our program */}
      <ul className="md:flex gap-8 items-center hidden">
        <div className="relative">
          <button
            onClick={handleExploreClick}
            className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 focus:outline-none flex items-center gap-2"
          >
            Explore&nbsp;<span className="lowercase">our programs</span>
            <FaArrowRight
              className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-90" : "-rotate-45"}`}
            />
          </button>
          {/* Dropdown Content */}

          <motion.div
            className="absolute top-full left-0  rounded mt-5 bg-white shadow-lg rounded-lg overflow-hidden z-50"
            initial="closed"
            animate={isDropdownOpen ? "open" : "closed"}
            variants={dropdownVariants}
          >
            <div className="flex flex-row ">
              <ul className="flex flex-col pt-4 py-2 w-[22vw]">
                {navItems.map((data, index) => (
                  <li
                    key={index}
                    onClick={() => handleDropdownClick(data.itemName)}
                    className={`px-4 m-2 py-2 rounded-full cursor-pointer flex justify-between items-center transition-transform duration-250 ${activeTab === data.itemName ? "bg-black text-white" : "hover:bg-black hover:text-white"
                      }`}
                  >
                    {data.itemName}
                    <span>
                      <CustomArrow className="transition-transform duration-300" />
                    </span>
                  </li>
                ))}
              </ul>
              {/* <div className="w-[22vw] border-left border-gray">

              </div> */}
            </div>
          </motion.div>
        </div>
        {pages.map((page, index) => (
          <li key={index}>
            <NavLink
              to={page.route}
              className={({ isActive }) => (isActive ? "text-black" : "text-gray-500")}
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User Navigation */}
      {signedIn ? (
        <NavMenu />
      ) : (
        <Link to="/signin">
          <Button className="hidden md:block capitalize font-archivo font-semibold bg-black rounded-full text-sm py-1.5 px-4">
            Login/Sign Up
          </Button>
        </Link>
      )}

      {/* Mobile Drawer */}
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
