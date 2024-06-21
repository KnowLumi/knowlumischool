import { useState } from "react";
import { companyLogos } from "../helpers/adminhelper";
import { Button } from "@material-tailwind/react";
import { MdAddBox } from "react-icons/md";
import AddLogo from "./AddLogo";
const Companies = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex flex-col gap-9 px-6 py-8 h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Company Logo</h1>
      {companyLogos.map((item, i) => (
        <div
          key={`logo_type_${i}`}
          className="bg-white rounded-xl p-6 flex flex-col min-w-[63.25rem]"
        >
          <div className="w-full flex items-center justify-between pb-8 border-b-2">
            <div className="flex items-center gap-9">
              <i
                className={`bg-[${item.theme}] w-12 h-12 rounded-lg text-white flex justify-center items-center`}
              >
                {item.icon}
              </i>
              <h3 className={`text-[${item.theme}] font-bold text-[28px]`}>
                {item.type} Companies
              </h3>
            </div>
            <Button
              onClick={handleOpen}
              className={`bg-[${item.theme}] text-white font-archivo rounded-lg flex items-center gap-2.5 p-3`}
            >
              <span className="capitalize font-semibold text-xs">
                Add New Logo
              </span>
              <MdAddBox className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex items-center w-full justify-between pt-8">
            {item.logos.map((logo, j) => (
              <img
                key={`type_${i}_logo_${j}`}
                src={logo}
                alt=""
                className="w-14 h-10"
              />
            ))}
          </div>
        </div>
      ))}
      <h3 className="flex justify-center font-bold text-[#2D2D2D66] text-[10px] tracking-widest">
        ©2024 Knowlumi. All Rights Reserved
      </h3>
      <AddLogo open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default Companies;
