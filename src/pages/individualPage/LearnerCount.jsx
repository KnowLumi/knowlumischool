import React from 'react'
import Profile from "../../assets/LearnerCountImage/profile.png";
import Company from "../../assets/LearnerCountImage/flipkart.svg";
import Marquee from "react-fast-marquee";

const LearnerCount = ({title}) => {
    const profileDetails = [
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
        {
            profile: Profile,
            company: Company,
        },
    ]
    return (
        <div className='w-full flex flex-row justify-center items-center'>
            <div className='container border border-gray rounded-lg w-[90%] h-[25vh] md:h-[47vh] max-h-max md:w-[70%] my-10 flex flex-col gap-1 p-4 md:p-8 text-left overflow-hidden' >
                <h1 className='text-3xl md:text-6xl font-archive'>{title}</h1>
                <p className='text-xs md:text-xl'>have reaped benefits from our programs</p>
                <Marquee
                    speed={120}
                    direction="right"
                    pauseOnHover
                    pauseOnClick
                    style={{ overflow: 'hidden' }}
                >
                    <div className='py-3 md:pt-10 flex flex-row justify-around items-center gap-6 overflow-hidden'>
                        {profileDetails.map((data, index) => {
                            return (
                                <div key={index} className='h-21 w-[70px] md:h-[100px] md:w-[90px] rounded border border-gray '>
                                    <div className='h-16 w-full md:h-[70px] rounded'>
                                        <img loading='lazy' className='select-none w-full h-full object-cover object-top rounded' src={data.profile} />
                                    </div>
                                    <div className='h-5 w-full md:h-[30px] rounded bg-slate-300'>
                                        <img loading='lazy' className='select-none w-full h-full object-fit object-center p-1' src={data.company} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default LearnerCount
