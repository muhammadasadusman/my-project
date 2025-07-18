import React from 'react'

const Professional = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start gap-16 px-6 mt-[10%] bg-gray-100'>
      
      <div className='w-full lg:w-1/2'>
        <h1 className='font-bold text-[22px] lg:text-[30px] leading-tight mb-6'>
          Are you a blue-collar professional?
        </h1>
        <p className='font-pacifico text-gray-700 mb-4'>
          Are you a skilled worker or a blue-collar service provider looking for a steady stream of job opportunities? TealPot connects you with businesses actively seeking your expertise. Here's why joining us is a game-changer:
        </p>
         
        <h1 className='font-bold text-[20px]'>Consistent Work Opportunities</h1>
        <p className='font-pacifico text-gray-700 mb-4 mt-4'>
          Gain access to a wide range of jobs from reputable companies looking for skilled professionals like you.
        </p>
        
        <h2 className='font-bold text-[20px]'>No Paying for Leads</h2>
        <p className='font-pacifico text-gray-700 mb-4 mt-4'>
          Unlike other platforms that charge workers to access job listings, TealPot connects you with jobs for free—no lead fees, no hidden costs!
        </p>

        <h3 className='font-bold text-[20px]'>Secure Payments</h3>
        <p className='font-pacifico text-gray-700 mb-4 mt-4'>
          No more chasing after payments! We ensure timely and reliable payments for all completed jobs.
        </p>
        <p className='font-pacifico text-gray-700'>
          Join TealPot today and start getting matched with high-quality job opportunities!
        </p>                                           
           
        <div className='mt-5'>
          <button
            className='mt-4 bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2'
          >
            Get Started
          </button>
        </div>
      </div>

    
      <div className='w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
        <img
          src="/images/Blue.color.png"
          alt="Blue collar professional illustration"
          className='max-w-full h-auto rounded-xl'
          style={{ maxHeight: '500px' }}
        />
      </div>
    </div>
  )
}

export default Professional
