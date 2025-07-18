import React from 'react'

const Value = () => {
  return (
    <div className='  text-center items-center mt-10 bg-gray-100'>
      <div className='font-bold text-[30px] text-center items-center mt-10'>
        <h1>Value Propositions</h1>
      </div>

       <div className='flex flex-wrap gap-6 md:gap-8 items-stretch lg:gap-10 justify-center mt-16 px-4 '>
      <div className=' w-full  md:w-[45%] lg:w-[22%] h-auto bg-white shadow-md rounded-b-md p-4 flex flex-col items-center  '>
        <img src="/images/Improve.png" alt="" className='h-[100px] w-[100px]' />
        <h1 className='font-bold text-[20px] text-teal-600'>Improve outcomes</h1>
        <p className='font-pacifico text-gray-700'>According to a McKinsey study, 40% of companies say poor work quality leads to costly delays and rework. TealPot helps you avoid that by connecting you with pre-vetted, skilled blue-collar professionals.</p>
      </div>
       

       <div className=' w-full md:w-[45%] lg:w-[22%] h-auto bg-white shadow-md rounded-b-md p-4 flex flex-col items-center'>
        <img src="/images/respond.png" alt="" className='h-[100px] w-[100px]' />
        <h2 className='font-bold text-[20px] text-teal-600'>Respond quickly</h2>
        <p className='font-pacifico text-gray-700'>A report from MBO Partners shows that 70% of businesses are turning to on-demand labor to fill skill gaps fast. With TealPot’s wide talent pool, you can respond to customer demands within hours —not days or weeks—boosting responsiveness and client satisfaction</p>
       </div>


       <div className='w-full md:w-[45%] lg:w-[22%] h-auto bg-white shadow-md rounded-b-md p-4 flex flex-col items-center'>
       <img src="/images/reduce.png" alt="" className='h-[100px] w-[100px]'/>
       <h3 className='font-bold text-[20px] text-teal-600'>Reduce costs</h3>
       <p className='font-pacifico text-gray-700'>According to the U.S. Bureau of Labor Statistics, the average employer pays 30% more in total compensation for W-2 employees due to benefits, taxes, and overhead. With TealPot, businesses save up to 30% by hiring skilled workers instead of full-time workers, and up to 20% compared to traditional staffing agencies by avoiding hidden margins and markups.</p>
       </div>


       <div className='w-full md:w-[45%] lg:w-[22%] h-auto bg-white shadow-md rounded-b-md p-4  flex flex-col items-center'>
        <img src="/images/invoice.png" alt="" className='h-[100px] w-[100px]' />
        <h4 className='font-bold text-[20px] text-teal-600'>Invoice payments</h4>
        <p className='font-pacifico text-gray-700'>TealPot provides a flexible and secure invoicing system that supports a variety of payment methods, giving you complete control over your transactions.</p>
       </div>
       </div>
      </div>
  )
}

export default Value
