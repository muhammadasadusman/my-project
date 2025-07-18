import React from 'react';

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col space-y-1.5 cursor-pointer z-50"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-6 bg-teal-600 transition-transform duration-300 origin-center ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-teal-600 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-teal-600 transition-transform duration-300 origin-center ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
