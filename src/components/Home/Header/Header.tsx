import React from "react";
import heroImage from "../../../assets/images/undraw_fitness_1.png";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="relative  overflow-hidden py-24 ">
        <div className="relative  max-w-full flex flex-col md:flex-row ">
          <div className="container p-6 self-center lg:max-w-screen-xl">
            <span className="text-3xl text-primary  font-semibold block sm:my-5">
              <span className="text-green-600 font-semibold">Fitness</span>
              Legion Quiz
            </span>
            <span className="text-lg lg:text-2xl font-medium py-4 block text-secondary sm:mb">
              Bored? Want to have fun? Take a Quiz and Enjoy learning with Fun
            </span>
            <div>
              <button className="py-3 focus:outline-none focus:ring-3 focus:ring-blue-400 focus:ring-opacity-70 cursor-pointer  px-5 text-sm lg:text-base lg:mt-8 rounded-md shadow-md bg-custom-blue-700   text-white inline-block uppercase tracking-wide font-semibold hover:bg-blue-600 transition duration-200">
                Take a Look{" "}
              </button>
            </div>
          </div>
          <div className="w-auto px-auto mx-auto">
            <img
              className=" mt-6 rounded-lg shadow-lg mx-auto w-11/12"
              src={heroImage}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
