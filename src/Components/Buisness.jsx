import React from 'react'

const Buisness = () => {
  return (
    <div className='mt-10 px-4 bg-gray-100'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10'>

        
        <div className='lg:w-1/2'>
          <h1 className='font-bold text-[22px] lg:text-[30px] leading-tight mb-6'>
            Why Businesses Choose TealPot
          </h1>

          <div className='space-y-5 text-gray-600 text-[18px]'>
            <div>
              <h2 className='font-bold text-[20px] text-gray-800'>Comprehensive Background Checks</h2>
              <p>We prioritize your peace of mind. Every blue-collar worker in our network undergoes rigorous background screenings, ensuring they meet the highest standards of integrity and competence.</p>
            </div>

            <div>
              <h3 className='font-bold text-[20px] text-gray-800'>Diverse Talent Pool</h3>
              <p>From construction and manufacturing to logistics and maintenance, our extensive database encompasses a wide range of skilled professionals ready to meet your specific needs.</p>
            </div>

            <div>
              <h4 className='font-bold text-[20px] text-gray-800'>Tailored Staffing Solutions</h4>
              <p>We recognize that each business is unique. Our team collaborates closely with you to understand your requirements and provide customized staffing solutions that align with your goals.</p>
            </div>

            <div>
              <h5 className='font-bold text-[20px] text-gray-800'>Swift and Efficient Placement</h5>
              <p>Time is of the essence. Our streamlined processes ensure that you are matched with the right candidates promptly, minimizing downtime and maximizing productivity.</p>
            </div>
          </div>

          <button className="mt-6 bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700 transition">
            Schedule a session
          </button>
        </div>

        
        <div className='lg:w-1/2'>
          <img
            src="/images/electrition-1.png"
            alt="Electrician"
            className='w-full max-h-[700px] object-cover rounded shadow-md'
          />
        </div>

      </div>
    </div>
  )
}

export default Buisness