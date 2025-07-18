import React from 'react';

const Part2 = () => {
  return (
    <div className="relative bg-gray-100">
      
      <div className='flex flex-col lg:flex-row items-start mt-10 lg:mt-0'>
        
        <h1 className='font-bold text-[32px] lg:text-[50px] mb-6 lg:mb-0 lg:w-1/2 px-4 sm:px-6 lg:px-14 text-center lg:text-left mt-10'>
          Hire Trusted Blue-Collar <br /> Pros on a Project Basis <br /> Fast, Safe, and Free!
        </h1>

        
        <div className='w-full flex justify-center lg:hidden'>
          <img
            src="images/image-4.png"
            alt="Worker"
            className='w-full max-w-full h-auto object-cover rounded-xl mt-6'
          />
        </div>

        
        <div className='hidden lg:flex w-full lg:w-1/2 justify-end relative'>
          <div className='relative bg-yellow-300 p-4 w-full max-w-[600px] h-[700px] shadow-lg rounded-xl mt-0 mr-0'>
            <img
              src="images/image-4.png"
              alt="Worker"
              className='absolute -left-6 top-0 h-[600px] w-[90%] max-w-[500px] object-cover rounded-xl'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap items-center gap-2 px-4 sm:px-6 lg:px-14 mt-6'>
        <img src="images/image-1.png" alt="" className='rounded-full h-12 w-12 object-cover' />
        <img src="images/img-2.png" alt="" className='rounded-full h-12 w-12 object-cover' />
        <img src="images/image-3.png" alt="" className='rounded-full h-12 w-12 object-cover' />
        <p className='font-bold text-sm lg:text-base ml-2'>824 companies joined us!</p>
      </div>

      <div className='mt-6 font-bold px-4 sm:px-6 lg:px-14'>
        <h3>
          <a href="https://example.com/dallas-services" target="_blank" rel="noopener noreferrer" className="hover:underline">
            View services in Dallas
          </a>
        </h3>
      </div>

      <div className='font-pacifico text-base sm:text-lg md:text-xl lg:text-2xl mt-8 text-gray-600 text-center sm:text-left px-4 sm:px-6 lg:px-14'>
        <p>
          At TealPot, we understand that the backbone of any thriving enterprise is a dedicated and skilled workforce. That is why we specialize in connecting businesses of all sizes and industries with top-tier blue-collar professionals. Our commitment to excellence ensures that you receive not only the manpower you need but also the quality and reliability you deserve.
        </p>
      </div>
    </div>
  );
};

export default Part2;