import React from 'react';
import KnowLumiLogo from "/Images/knowlumi-brand.svg"

const WorkshopCard = () => {
    const mentorCardDetails = [
        {
            firstImage: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg",
            secondImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png",
            title: "Learn like top IITians and achieve high-paid software jobs",
        },
        {
            firstImage: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg",
            secondImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png",
            title: "Learn like top IITians and achieve high-paid software jobs",
        },
        {
            firstImage: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg",
            secondImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png",
            title: "Learn like top IITians and achieve high-paid software jobs",
        },
        {
            firstImage: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg",
            secondImage: "https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png",
            title: "Learn like top IITians and achieve high-paid software jobs",
        },
    ];

    return (
        <div className=" w-full flex flex-col justify-center max-auto items-center mt-[8%] my-10">
            <div className="w-[90%] flex flex-col justify-center items-center md:justify-center md:items-center">
                <div className='container text-black w-[90%] my-5 mb-[5%]'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-center'>Mentorship Programs</h1>
                </div>
                <div className='container w-[95%] flex flex flex-col md:flex-row justify-center items-center'>
                    {mentorCardDetails.map((data, index) => (
                        <div key={index} className="container w-[250px] flex flex-col shadow-lg bg-white mx-auto mt-10 rounded-lg border border-grey relative group">
                            <div className="container w-full h-[150px] flex flex-row justify-between">
                                {/* <div className="container w-[50%] h-full flex justify-center items-center">
                                    <img src={data.firstImage} alt="First Image" />
                                </div>
                                <div className="container w-[50%] relative flex justify-end items-end">
                                    <img
                                        className="translate-y-6 object-cover h-[200px] group-hover:translate-y-3 transition-all duration-200"
                                        src={data.secondImage}
                                        alt="Second Image"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                                </div> */}
                                <img className='p-4' src={KnowLumiLogo} alt="First Image" />
                            </div>  
                            <div className="container w-full bg-white text-black px-3 py-3 rounded-lg overflow-hidden relative z-2">
                                <h3 className="text-lg font-semibold">{data.title}</h3>
                                <button className="bg-black w-full hover:bg-slate-100 my-2 text-white rounded-full mx-auto py-2 px-2 text-sm">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default WorkshopCard;
