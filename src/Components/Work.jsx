import React from 'react'

const Work = () => {
  return (
    <div className='bg-gray-100'>
      <div className='mt-16 flex items-center justify-center flex-wrap gap-6 '>
        <img src="/images/licolin.png" alt="" className='h-[100px] w-[200px]' />
        <img src="https://www.tealpot.com/_next/static/media/leprizone.e8192f7a.svg" alt="" className='h-[300px] w-[300px]' />
         <img src="/images/tsa.png" alt="" className='h-[100px] w-[200px]' />
      </div>
       

       <div className='flex flex-wrap justify-center items-center mt-10'> 
        <div className='w-full md:w-1/2 px-4 md:px-6 lg:px-8'>
            <img src="/images/mobile.png" alt="" className='h-[600px] w-[400px]' />
        </div>
        
        <div className=' w-full md:w-1/2 px-4 md:px-6 lg:px-8'>
            <h1 className='font-bold text-[30px]'>How It Works</h1>
            <h2 className='font-bold text-[20px]'>Tell Us Your Hiring Needs</h2>
            <p className='font-pacifico text-[20px] text-gray-600'>Companies submit their staffing requirements, specifying the type of blue-collar workers they need, skill levels, and duration of employment.</p>
            <h3 className='font-bold text-[20px]'>We Find the Best Matches</h3>
            <p className='font-pacifico text-[20px] text-gray-600'>Our team carefully evaluates our pool of pre-screened service providers to identify the most qualified workers that fit your criteria.</p>
            <h4 className='font-bold text-[20px]'>You Get the Right Workers</h4>
            <p className='font-pacifico text-[20px] text-gray-600'>We provide you with reliable, background-checked workers ready to contribute to your business immediately.</p>
        </div>
       </div>

      </div>
  )
}

export default Work
