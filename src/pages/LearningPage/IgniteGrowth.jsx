import { Link } from "react-router-dom";
import { MdElectricBolt, MdArrowForward } from "react-icons/md";
import { Button, Avatar } from "@material-tailwind/react";

const IgniteGrowth = () => {
    return (
        <div className="rounded-3xl bg-[#DFDFD7] flex flex-wrap items-center gap-6 justify-between md:py-9 py-4 pl-4 pr-2 md:px-12 mx-6 md:mx-20">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <i className="flex justify-center items-center bg-white w-11 h-11 rounded-full">
                        <MdElectricBolt className="w-5 h-5" />
                    </i>
                    <h1 className="text-[#010101E5] font-normal text-2xl md:text-4xl">
                        Ignite your Growth
                    </h1>
                </div>
                <p className="font-light text-sm tracking-wider md:w-[33.75rem]">
                    Whether you&apos;re a beginner or an intermediate professional
                    seeking to upskill, transition, or broaden your horizons in the
                    field, our program is designed to help you succeed.
                </p>
            </div>
            <div className="flex flex-col w-fit md:flex-row gap-6 md:gap-11 items-center">
                <Link to="/fundamentals">
                    <Button className="rounded-full flex items-center gap-3 capitalize font-archivo text-sm tracking-widest font-medium text-[16px] bg-black text-white py-2 pr-2 pl-6">
                        ENROLL NOW
                        <i className="flex w-8 h-8 text-white -rotate-45 border border-[#FFFFFF33] bg-[#FFFFFF4D] justify-center items-center rounded-full">
                            <MdArrowForward />
                        </i>
                    </Button>
                </Link>
                <div className="flex items-center gap-5">
                    <div className="flex items-center -space-x-2">
                        {new Array(3).fill("").map((_, i) => (
                            <Avatar
                                variant="circular"
                                key={i}
                                size="xs"
                                alt="user 1"
                                className="border border-white hover:z-10 focus:z-10"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                        ))}
                    </div>
                    <span className="font-medium text-[10px] md:text-xs underline">
                        420+ learners
                    </span>
                </div>
            </div>
        </div>
    )
}

export default IgniteGrowth
