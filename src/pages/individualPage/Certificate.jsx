import React from 'react'
import certificate from "../../assets/Certificate/certificate.avif";
import svgItemOne from "../../assets/Certificate/ready.svg";
import svgItemTwo from "../../assets/Certificate/share.svg";
import svgItemThree from "../../assets/Certificate/compete.svg";
import { Button } from "@material-tailwind/react";
import { MdArrowForward } from "react-icons/md";

const Certificate = () => {

    const certificateDetails = [
        {
            imageSrc: svgItemOne,
            title: "Industry-Ready Certification [IRC]",
            desc: "Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness.",
        },
        {
            imageSrc: svgItemTwo,
            title: "Shareable, Credible and Official",
            desc: "Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere.",
        },
        {
            imageSrc: svgItemThree,
            title: "Let companies compete for you",
            desc: "IRC certifies your industry-readiness and gets you placed with higher salaries.",
        }
    ]
    return (
        <div className="w-full flex flex-col justify-center items-center my-10 md:my-28">
            <div className='w-full'>
                <h1 className='text-3xl font-semibold md:text-5xl my-10'>Get Certified. Get Hired</h1>
            </div>
            <div className="w-[90%] flex flex-col md:flex-row justify-start items-start">
                <div className="w-full md:w-[50%] px-4 md:pt-3 pt-0 md:p-10 text-left flex flex-col justify-start items-start" >
                    <p>Yes, you’ll get a certificate representing your Industry Readiness once you submit your projects and clear the mock tests.</p>
                    {certificateDetails.map((data, index) => {
                        return (
                            <div className="flex flex-row justify-start items-start mt-4" key={index}>
                                <img src={data.imageSrc} />
                                <div className="flex flex-col justify-center items-center md:items-start px-3">
                                    <h3 className="font-semibold text-sm md:text-lg capitalize text-left">
                                        {data.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 text-left">
                                        {data.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full md:w-[50%]">
                    <img className="p-6" src={certificate} alt="Certificate Image" />
                </div>
            </div>
            <div className="flex justify-between items-center md:mt-6">
                <Button className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6">
                    Request A Call
                    <i className="flex icon w-8 h-8 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
                        <MdArrowForward />
                    </i>
                </Button>
            </div>
        </div>
    )
}

export default Certificate;
