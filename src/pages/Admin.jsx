import { NavLink, Outlet } from "react-router-dom";
import { adminLinks } from "./helpers/adminhelper";
import { IoSettingsOutline, IoPowerOutline } from "react-icons/io5";
import logo1 from "../assets/navlogo.png";
import "./Admin/Admin.css"
const Admin = () => {
  return (
    <div className="flex w-full justify-between font-archivo bg-[#F7F7F7]">
      <div className="min-w-[270px] bg-[#DDE8B9] h-screen hidden md:flex flex-col items-center">
        <img src={logo1} className="h-11 w-fit my-6" alt="" />
        <div className="bg-[#EBF2D4] w-full">
          <div className="flex items-center gap-3 py-3 pl-9 pr-12">
            <div className="bg-black rounded-full w-10 h-10" />
            <h3 className="text-lg italic font-semibold leading-6 text-left">
              Admin
            </h3>
          </div>
        </div>
        <ul className="flex flex-col gap-3 w-full">
          {adminLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.route}
                className={({ isActive }) => `flex items-center gap-4 py-3 px-12 transition-all ${isActive ? "text-white bg-[#297045]" : "text-[#2D2D2D]"}`}
              >
                <i className="flex justify-center items-center">{link.icon}</i>
                <span className="font-semibold text-sm">
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="bg-[#EBF2D4] flex flex-col py-3 px-0 w-full">
          <li>
            <NavLink
              className="flex items-center gap-4 py-2 px-12"
            >
              <i className="flex justify-center items-center">
                <IoSettingsOutline className="w-5 h-5" />
              </i>
              <span className="text-[#2D2D2D] font-semibold text-sm">
                Settings
              </span>
            </NavLink>
          </li>
          <li className="flex items-center gap-4 py-2 px-12">
            <i className="flex justify-center items-center">
              <IoPowerOutline className="w-5 h-5" />
            </i>
            <span className="text-[#2D2D2D] font-semibold text-sm">Logout</span>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
