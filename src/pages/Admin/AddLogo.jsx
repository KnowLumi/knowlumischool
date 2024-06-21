import { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { MdClose } from "react-icons/md";
const AddLogo = ({ open, handleOpen }) => {
  const [imageSrc, setImageSrc] = useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Filename: ${file.name}`); // This logs the filename

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Dialog
      size="md"
      className="bg-transparent shadow-none"
      open={open}
      handler={handleOpen}
    >
      <DialogHeader className="flex justify-end p-0">
        <MdClose
          onClick={handleOpen}
          className="bg-white hover:bg-gray-200 cursor-pointer text-black rounded-full p-0.5 w-6 h-6"
        />
      </DialogHeader>
      <DialogBody className="flex items-center p-0 font-archivo">
        <form className="rounded-2xl w-[37rem] bg-white flex flex-col x p-9 gap-9">
          <div className="gap-4 flex flex-col items-start">
            <label
              htmlFor="companyName"
              className="block text-[16px] font-bold text-[#2D2D2DCC]"
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Enter Company Name"
              className="mt-1 px-3 py-2 w-full border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm"
              required
            />
          </div>
          <div className="flex w-full justify-center">
            <img
              src={imageSrc}
              alt=""
              className="w-[8.25rem] h-20 rounded-xl border-[1.5px] border-[#2D2D2D99]  object-contain"
            />
          </div>
          <div className="gap-4 flex flex-col items-start">
            <label
              htmlFor="companyLogo"
              className="block text-[16px] font-bold text-[#2D2D2DCC]"
            >
              Upload PNG File
            </label>
            <input
              type="file"
              name="companyLogo"
              id="companyLogo"
              accept="image/png"
              placeholder="Enter Company Name"
              className="company_logo_input mt-1 w-full border border-[#2D2D2D33] rounded-xl shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm"
              onChange={handleImageUpload}
              required
            />
          </div>
          <Button type="submit" className="w-full capitalize text-sm font-bold font-archivo bg-[#00A156] py-3.5 px-3 rounded-md text-white">
            Save Changes
          </Button>
        </form>
        <div className="w-7 h-full"></div>
      </DialogBody>
    </Dialog>
  );
};

export default AddLogo;
