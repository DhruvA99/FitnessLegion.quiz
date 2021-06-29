import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Context/theme/theme-context";

const Navbar = (): JSX.Element => {
  const { theme, setThemeFunction } = useTheme();

  return (
    <div className="flex flex-wrap py-2 bg-main ">
      <div className="w-full px-4 ">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-500 rounded">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <NavLink
                to="/"
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              >
                Fitness Legion
              </NavLink>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div
              className="flex lg:flex-grow items-center"
              id="example-navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <NavLink
                    className="px-3 py-2 flex items-center align-middle text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <div
                    onClick={() => {
                      setThemeFunction();
                    }}
                    className={`relative px-4 py-2.5 rounded-2xl m-3 w-10 inline-block bg-gray-300 `}
                  >
                    <div
                      className={`rounded-full p-2 absolute top-0.5  transition-all duration-500 transform  ${
                        !theme ? "bg-main left-1" : " bg-green-600 right-1"
                      }`}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
