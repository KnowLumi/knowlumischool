import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { MdClose } from "react-icons/md";
import { SiSwiggy } from "react-icons/si";
const MentorViewMore = ({ open, handleOpen }) => {
  return (
      <Dialog
        size="lg"
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
          <div className="rounded-2xl bg-white flex items-center p-9 gap-9">
            <img
              src=""
              className="w-[200px] h-[200px] rounded-full bg-cyan-500"
              alt=""
            />
            <div className="flex flex-col gap-8">
              <h4 className="font-bold tracking-[4%] text-3xl text-[#170312CC]">
                John Samuel
              </h4>
              <div className="flex items-center gap-9">
                <div className="p-4 bg-[#EEEEEE] flex items-center gap-3 rounded-lg">
                  <SiSwiggy className="w-14 h-14 p-2 bg-white rounded-full text-[#FF9F1C]" />
                  <div className="flex flex-col gap-2 text-[#170312B2]">
                    <span className="font-bold tracking-[4%] text-[16px]">
                      Swiggy
                    </span>
                    <span className="font-normal tracking-[4%] text-[16px]">
                      Full Stack developer
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-normal tracking-[4%] text-[16px]">
                    Joining Date: 14 - 01 - 2024
                  </span>
                  <span className="font-bold tracking-[4%] text-[16px]">
                    Contract Period: 6 months
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Button className="bg-[#2274A5] font-archivo capitalize font-bold text-sm tracking-wide p-3.5">Update Profile Picture</Button>
                <Button className="bg-[#2D2D2D] font-archivo capitalize font-bold text-sm tracking-wide p-3.5">Update Company Logo</Button>
              </div>
            </div>
          </div>
          <div className="w-7 h-full"></div>
        </DialogBody>
      </Dialog>
  );
};

export default MentorViewMore;
