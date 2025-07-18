import React, { useState } from 'react';
import Hamburger from './Components/Hamburger';
import Part2 from './Components/part2';
import Services from './Components/Services';
import Buisness from './Components/Buisness';
import Work from './Components/Work';
import Result from './Components/Result'
import Value from './Components/Value';
import Testimonial from './Components/Testimonial';
import Professional from './Components/Professional';
import Collar from './Components/Collar';
import Resources from './Components/Resources';
import Footer from './Components/Footer';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
    <nav className="bg-white shadow-md px-4 relative z-[999]">
      <div className="h-20 flex items-center justify-between">
      
        <div className="flex items-center space-x-2 flex-shrink-0 z-20">
          <img src="/images/logo.png" alt="logo" className="h-8 w-8" />
          <h1 className="text-3xl font-bold text-teal-600">TealPot</h1>
        </div>
           
          
          
        <div className=" block lg:hidden relative z-[1000]">
          <Hamburger onClick={toggleMenu} isOpen={menuOpen} />
          
        </div>

        
        <div className="hidden lg:flex items-center space-x-6 ml-12 z-20">
          <ul className="flex space-x-6 text-black">
            <li><a href="#" className="hover:text-teal-600">Home</a></li>
            <li><a href="#" className="hover:text-teal-600">Services</a></li>
            <li><a href="#" className="hover:text-teal-600">Available Work Orders</a></li>
            <li><a href="#" className="hover:text-teal-600">Contact</a></li>
            <li><a href="#" className="hover:text-teal-600">Blog</a></li>
            <li><a href="#" className="hover:text-teal-600">Help</a></li>
          </ul>
            </div>
          <div className="hidden md:flex flex-wrap items-center gap-3 ml-4" >
            <button className="border-2 border-teal-600 text-teal-600 text-[16px] px-3 py-1.5 rounded hover:bg-teal-600 hover:text-white leading-none">
              Schedule a session
            </button>
            <button className="border-2 border-teal-600 text-teal-600 text-[16px] px-3 py-1.5 rounded hover:bg-teal-600 hover:text-white leading-none">
              Invest With Us
            </button>
            <button className="border-2 border-teal-600 text-teal-600 text-[16px] px-3 py-1.5 rounded hover:bg-teal-600 hover:text-white leading-none">
              Login/Signup
            </button>
          
        </div>
      </div>

    
      {menuOpen &&(

        <div className="lg:hidden absolute top-full right-0 w-auto  bg-white shadow-md rounded-b-md p-4 z-50 overflow-y-auto max-h-[calc(100vh-80px)]">

         <div className='w-full  flex  mb-7'>
            <div className="flex items-center space-x-2 ">
               <img src="images/logo.png" alt="logo" className="h-8 w-8" />
              <h1 className="text-3xl font-bold text-teal-600">TealPot</h1>
             </div>
          </div>



          <ul className="flex flex-col space-y-4 text-black">
            <li><a href="#" className=" hover:text-teal-600">Home</a></li>
            <li><a href="#" className=" hover:text-teal-600">Services</a></li>
            <li><a href="#" className=" hover:text-teal-600">Available Work Orders</a></li>
            <li><a href="#" className=" hover:text-teal-600">Contact</a></li>
            <li><a href="#" className=" hover:text-teal-600">Blog</a></li>
            <li><a href="#" className=" hover:text-teal-600">Help</a></li>
          </ul>

          <div className="flex flex-col space-y-3 mt-4">
            <button className="  border-2 border-teal-600 text-teal-600 text-[16px] px-4 py-1.5 rounded hover:bg-teal-600 hover:text-white leading-none">
              Schedule a session
            </button>
            <button className=" border-2 border-teal-600 text-teal-600 text-[16px] px-4 py-1.5 rounded hover:bg-teal-600 hover:text-white leading-none ">
              Invest With Us
            </button>
            <button className=" border-2 border-teal-600 text-teal-600 text-[16px] px-4 py-1.5 rounded hover:bg-teal-600 hover:text-white leading-none">
              Login/Signup
            </button>
          </div>
        </div>
      )}
    </nav>
    <div>
    <Part2/>
    <Services/>
    <Buisness/>
    <Work/>
    <Result/>
    <Value/>
    <Testimonial/>
    <Professional/>
    <Collar/>
    <Resources/>
    <Footer/>
    </div>
    </>
  );
};

export default App;