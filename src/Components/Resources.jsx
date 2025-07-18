import React from 'react';

const Resources = () => {
  return (
    <div className='bg-gray-100'>
      <div className='text-center mt-10 px-4'>
        <h1 className='font-bold text-[30px]'>Helpful Resources & Tools</h1>
      </div>

      <div className='flex flex-wrap items-stretch justify-center gap-6 md:gap-8 lg:gap-10 mt-16 px-4'>
        
        <div className='w-full md:w-[48%] lg:w-[30%] bg-white shadow-md rounded-b-md px-4 py-6'>
          <h1 className='font-bold text-[20px] text-teal-600 text-center'>
            Tealpot Service Cost Estimator
          </h1>
          <h2 className='text-center hover:text-teal-600 mt-2'>
            <a href="#">Details</a>
          </h2>
        </div>

        
        <div className='w-full md:w-[48%] lg:w-[30%] bg-white shadow-md rounded-b-md px-4 py-6'>
          <h1 className='font-bold text-[20px] text-teal-600 text-center'>
            Freelancers Invoice Generator
          </h1>
          <h2 className='text-center hover:text-teal-600 mt-2'>
            <a href="#">Details</a>
          </h2>
        </div>

        
        <div className='w-full md:w-[48%] lg:w-[30%] bg-white shadow-md rounded-b-md px-4 py-6'>
          <h1 className='font-bold text-[20px] text-teal-600 text-center'>
            Room Addition Cost Calculator
          </h1>
          <h2 className='text-center hover:text-teal-600 mt-2'>
            <a href="#">Details</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Resources;
