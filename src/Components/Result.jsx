import React from 'react'

const Result = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 bg-gray-100">
      <div className="text-center mt-10">
        <h1 className="font-bold text-[30px]">Real Businesses, Real Results - Case Studies</h1>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 justify-center items-stretch mt-10">
        
        <div className="w-full md:w-[45%] lg:w-[30%] h-auto bg-white shadow-md rounded-b-md p-6 flex flex-col">
          <h2 className="font-bold text-[20px] text-teal-600 mb-4">
            Construction Company Saves 40% on Hiring Costs
          </h2>
          
          <h3 className="font-semibold text-lg mb-1">Challenge:</h3>
          <p className="font-pacifico text-gray-700 mb-4">
            A midsized construction company struggled with high turnover rates and excessive recruitment costs.
          </p>
          
          <h3 className="font-semibold text-lg mb-1">Solution:</h3>
          <p className="font-pacifico text-gray-700 mb-4">
            By using TealPot, they accessed pre-vetted blue-collar workers on demand, reducing hiring time by 65%.
          </p>
          
          <h3 className="font-semibold text-lg mb-1">Results:</h3>
          <p className="font-pacifico text-gray-700">
            • 40% reduction in recruitment expenses<br />
            • 50% faster project completion rates<br />
            • 90% worker retention after six months
          </p>
        </div>

        
        <div className="w-full md:w-[45%] lg:w-[30%] h-auto bg-white shadow-md rounded-b-md p-6 flex flex-col">
          <h2 className="font-bold text-[20px] text-teal-600 mb-4">
            Logistics Company Increases Workforce Efficiency by 60%
          </h2>
          
          <h3 className="font-semibold text-lg mb-1">Challenge:</h3>
          <p className="font-pacifico text-gray-700 mb-4">
            A logistics firm needed a scalable workforce to handle seasonal demand spikes without overstaffing.
          </p>
          
          <h3 className="font-semibold text-lg mb-1">Solution:</h3>
          <p className="font-pacifico text-gray-700 mb-4">
            TealPot enabled them to scale their workforce up instantly, providing experienced forklift operators, warehouse associates, and delivery personnel.
          </p>
          
          <h3 className="font-semibold text-lg mb-1">Results:</h3>
          <p className="font-pacifico text-gray-700 break-words">
            • 60% improvement in operational efficiency<br />
            • 35% lower overtime costs<br />
            • 20% higher customer satisfaction due to faster deliveries
          </p>
        </div>

        
        <div className="w-full md:w-[45%] lg:w-[30%] h-auto bg-white shadow-xl rounded-b-md p-6 flex flex-col">
          <h2 className="font-bold text-[20px] text-teal-600 mb-4">
            Manufacturing Company Cuts Workforce Shortages by 75%
          </h2>
          
          <h3 className="font-semibold text-lg mb-1">Challenge:</h3>
          <p className="font-pacifico text-gray-700 mb-4">
            A factory faced frequent labor shortages, leading to production delays and missed deadlines.
          </p>
          
          <h3 className="font-semibold text-lg mb-1">Solution:</h3>
          <p className="font-pacifico text-gray-700 mb-4">
            TealPot provided qualified technicians and factory workers, reducing vacancies within 48 hours.
          </p>
          
          <h3 className="font-semibold text-lg mb-1">Results:</h3>
          <p className="font-pacifico text-gray-700">
            • 75% reduction in unfilled job positions<br />
            • 30% increase in production output<br />
            • 100% compliance with safety and labor regulations
          </p>
        </div>
      </div>

      <div className="w-full text-center mt-6">
        <button className="mt-4 bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition">
          Schedule a free consultation today
        </button>
      </div>
    </div>
  )
}

export default Result