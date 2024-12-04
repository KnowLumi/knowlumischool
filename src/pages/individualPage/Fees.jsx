import React from 'react'

const Fees = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center -translate-y-20 my-5 mb-10 md:my-28">
      <div className='w-[90%] flex flex-col '>
      <h1 className='text-3xl md:text-5xl font-semibold'>Your Success is our Success</h1>
      <div  className='w-full p-5 md:py-8 border border-gray rounded-lg mt-16 h-auto md:max-h-[44vh] flex flex-col md:flex-row justify-start items-start md:justify-around md:items-center gap-10'>
        <h1 className='text-2xl font-semibold text-gray-700 text-left'>What's included?</h1>
        <div className='flex flex-col justify-start items-start gap-4 w-full md:w-[30vw] '>
            <h1 className='text-2xl font-bold'>Everything in Postpaid</h1>
            <h1 className='text-3xl md:text-5xl font-semibold'>+</h1>
            <p className='text-gray-600 text-left'>After you complete the course, if you don't get a job, the amount paid will be refunded with a deduction <br />(Terms and Conditions Apply).</p>
        </div>
        <div className='flex flex-col justify-center md:items-end justify-start'>
            <h2 className='text-2xl'><strike>₹1,50,000/-</strike></h2>
            <h1 className='text-4xl font-semibold'>₹90,000/-</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Fees
