import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg transition duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300 whitespace-nowrap cursor-pointer">
          MyPortfolio
        </span>
        <div className="flex md:order-2">
          <button
            onClick={toggleDarkMode}
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1 transform transition-transform duration-300 hover:scale-110"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
          </button>
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                menuOpen ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:block items-center justify-between w-full md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-medium md:space-x-8 md:mt-0">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 cursor-pointer transition"
                >
                  {item}
                </Link>
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
