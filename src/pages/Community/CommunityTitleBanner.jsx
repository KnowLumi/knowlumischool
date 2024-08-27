import React from 'react'

export default function CommunityTitleBanner({title,backgroundColor,isRightFull}) {
  const borderType = isRightFull ? "rounded-l-full rounded-tr-full" : "rounded-r-full rounded-tl-full"
  return (
    <header 
    style={{background : `${backgroundColor}`}}
    className={`p-2  lg:w-3/5 w-full h-9   flex justify-center text-white shadow-xl  ${borderType}`}>
    {title}
    </header>
  )
}
