import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { MdClose } from "react-icons/md";
import Video from "../Categories/Video";

const ViewVideo = ({ open, handleOpen }) => {
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
                <Video />
                <div className="w-7 h-full"></div>
            </DialogBody>
        </Dialog>
    )
}

export default ViewVideo