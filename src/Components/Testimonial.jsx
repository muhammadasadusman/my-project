import React from 'react'

const Testimonial = () => {
  return (
    <div className='px-4 mt-10 bg-gray-100'>
      <div className='text-center mb-6'>
        <h1 className='font-bold text-[30px]'>Testimonials</h1>
        <p className='font-pacifico text-gray-700'>Here is what our clients have to say about us</p>
      </div>

      <div className='flex flex-wrap gap-6 md:gap-8 justify-center items-stretch lg:gap-10'>
        
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-b-md p-6 flex flex-col items-center text-center'>
          <img src="/images/Testimonial-1.png" alt="Brandon" className='h-[250px] w-[250px] mb-4 object-cover rounded-md' />
          <h2 className='font-bold text-teal-600 mb-2'>Brandon</h2>
          <p>Before TealPot, we relied on agencies to find skilled workers, but the process was slow and often unreliable. Now, we have immediate access to top workers and can hire precisely when we need them.</p>
        </div>

      
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-b-md p-6 flex flex-col items-center text-center'>
          <img src="/images/testimonial-2.png" alt="Angelina" className='h-[250px] w-[250px] mb-4 object-cover rounded-md' />
          <h3 className='font-bold text-teal-600 mb-2'>Angelina</h3>
          <p>In the past, hiring blue-collar workers involved lengthy negotiations and high costs. With TealPot, we save time and money by hiring directly and paying only for completed work.</p>
        </div>

        
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-b-md p-6 flex flex-col items-center text-center'>
          <img src="/images/testimonial-3.png" alt="Mark Smith" className='h-[250px] w-[250px] mb-4 object-cover rounded-md' />
          <h4 className='font-bold text-teal-600 mb-2'>Mark Smith</h4>
          <p>Previously, managing a fluctuating workforce was a challenge. TealPot’s on-demand platform gives us the flexibility to scale our team as needed, without the commitment of full-time hires.</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
