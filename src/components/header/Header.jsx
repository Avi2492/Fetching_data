import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden focus:outline-none text-black"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <span className="text-black text-3xl">&#10005;</span>
            ) : (
              <span className="text-black text-3xl">&#9776;</span>
            )}
          </button>
          {/* Mobile Menu */}
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } lg:hidden w-full mt-4 font-medium text-black`}
          >
            <ul className="flex flex-col space-y-2">
              <li>
                <NavLink
                  to={"/"}
                  className="block duration-200 py-2 pl-3 text-gray-500 hover:bg-gray-50 hover:text-orange-700"
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/transaction"}
                  className="block duration-200 py-2 pl-3 text-gray-500 hover:bg-gray-50 hover:text-orange-700"
                  onClick={toggleMobileMenu}
                >
                  Transaction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/data"}
                  className="block duration-200 py-2 pl-3 text-gray-500 hover:bg-gray-50 hover:text-orange-700"
                  onClick={toggleMobileMenu}
                >
                  Data
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Desktop Menu */}
          <div
            className="hidden text-black justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="desktop-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/transaction"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Transaction
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/data"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-500"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
