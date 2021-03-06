import React, { useState } from 'react';

export let Navbar = ({ children, title, padding }) => {
  let [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={`flex justify-between ${padding} bg-gray-100 flex-col w-full px-2 py-3 items-center md:border-b ${
        !mobileOpen ? 'border-b' : 'border-0'
      }`}
    >
      <div className="hidden md:flex justify-between w-full items-center">
        <div className="text-2xl md:text-xl text-blue-600">{title}</div>
        {children}
      </div>
      <div className="flex md:hidden justify-between w-full items-center">
        <div className="text-2xl md:text-xl text-blue-600">{title}</div>
        <div className="flex space-x-2 flex md:hidden">
          <button
            id="menubtn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto md:hidden flex justify-center items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-blue-200 text-blue-600 relative transition duration-500 ease-in-out focus:outline-none rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`relative flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 font-semibold w-screen md:w-auto bg-gray-100 dark:bg-black border-b border-gray-300 dark:border-gray-800 md:border-none md:shadow-none md:bg-transparent p-2 pt-0 mt-2 md:p-0 md:items-center ${
          mobileOpen ? 'flex' : 'hidden'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        {children}
      </div>
    </div>
  );
};
