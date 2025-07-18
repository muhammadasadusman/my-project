import React from 'react';

const Collar = () => {
  return (
    <div className='bg-gray-100'>
      <div className='text-center text-sm sm:text-base md:text-lg lg:text-xl mt-14 px-4'>
        <p>
          Stay informed with industry trends, expert advice, and success stories from the world of blue-collar work. Check out our latest blog posts
        </p>
      </div>

      <div className='flex flex-wrap items-stretch gap-6 md:gap-8 lg:gap-10 justify-center mt-16 px-4'>
        
        <div className='w-full md:w-[48%] lg:w-[30%] min-h-[550px] bg-white shadow-md rounded-b-md p-4'>
          <img src="/images/collar-1.png" alt="" className='w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='font-bold text-teal-600 text-center mt-4'>
            Do Tenants Have to Pay for <br /> Plumbing Repairs?
          </h1>
          <h2 className='font-pacifico text-center hover:text-teal-600'>
            <a href="#">Details</a>
          </h2>
        </div>

        
        <div className='w-full md:w-[48%] lg:w-[30%] min-h-[550px] bg-white shadow-md rounded-b-md p-4'>
          <img src="/images/collar-2.png" alt="" className='w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='font-bold text-teal-600 text-center mt-4'>
            Are Healthcare Workers Considered <br /> Blue-Collar Workers?
          </h1>
          <h2 className='font-pacifico text-center hover:text-teal-600'>
            <a href="#">Details</a>
          </h2>
        </div>

        
        <div className='w-full md:w-[48%] lg:w-[30%] min-h-[550px] bg-white shadow-md rounded-b-md p-4'>
          <img src="/images/collar-3.png" alt="" className='w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-300 hover:scale-105' />
          <h1 className='font-bold text-teal-600 text-center mt-4'>
            Is Mechanical Engineering a Blue- <br /> Collar Job?
          </h1>
          <h2 className='font-pacifico text-center hover:text-teal-600'>
            <a href="#">Details</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Collar;
