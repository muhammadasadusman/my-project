import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
  FaPhoneAlt
} from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { AiOutlinePinterest } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 px-8 py-14 bg-gray-100 text-gray-800">

      
      <div className="col-span-1 lg:col-span-2 space-y-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/logo.png" alt="TealPot Logo" className="h-8 w-8" />
          <h1 className="font-bold text-teal-600 text-3xl">TealPot</h1>
        </div>
        <p>
          Transforming the Freelance Ecosystem with a platform that empowers both Freelancers and Clients.
        </p>

        <div className="flex gap-4 mt-4 flex-wrap">
          <FaFacebookF size={20} />
          <FaInstagram size={20} />
          <FaTiktok size={20} />
          <SlSocialYoutube size={20} />
          <FaLinkedinIn size={20} />
          <AiOutlinePinterest size={20} />
        </div>

        <div className="flex gap-4 flex-wrap mt-4">
          <button className="bg-black text-white font-bold h-[40px] w-[150px] rounded-md flex items-center justify-center gap-2">
            <FaGooglePlay />
            Google Play
          </button>
          <button className="bg-black text-white font-bold h-[40px] w-[150px] rounded-md flex items-center justify-center gap-2">
            <FaApple size={24} />
            App Store
          </button>
        </div>
      </div>

      
      <div className="space-y-2">
        <h1 className="font-bold text-lg mb-2">About TealPot</h1>
        <p>Help Articles</p>
        <p>EU Licence Agreement</p>
        <p>Equal Opportunity</p>
        <p>Terms and Conditions</p>
        <p>FAQs</p>
        <p>About</p>
        <p>Help</p>
        <p>Resources</p>

      </div>


      
      <div className="space-y-3 col-span-1 lg:col-span-2">
        <h1 className="font-bold text-lg mb-2">Contact Us</h1>
        <p className="flex items-center gap-2">
          <FaLocationDot size={20} />
          United States Of America
        </p>
        <p className="flex items-center gap-2">
          <FaPhoneAlt size={20} />
          +1 877 547 0990
        </p>
        <p className="flex items-center gap-2">
          <MdEmail size={20} />
          support@tealpot.com
        </p>
      </div>



      <div className="space-y-2">
        <h1 className="font-bold text-lg mb-2">For Freelancers</h1>
        <p>Create Account</p>
      </div>

<div className="text-sm mt-4 text-gray-600 col-span-full space-y-1 text-center">
          <p>© 2024 TealPot. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy | Contact Us</p>
        </div>
    </div>
    
  );
};

export default Footer;   