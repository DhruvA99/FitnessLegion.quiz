import React, { useState } from "react";
import Navbar from "../../NavigationBar/NavBar";
import { Link } from "react-router-dom";

const Signup = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [active, setActive] = useState<object>({
    email: false,
    password: false,
  });
  return (
    <div className="">
      <Navbar />
      <div className="bg-secondary w-full px-3 py-44 lg:pb-72">
        <div className="z-10 bg-white rounded-md w-11/12 mx-auto px-3 py-7 md:w-7/12  xl:w-4/12 shadow-md">
          <span className="block text-3xl font-semibold py-4">Signup</span>
          <span className="block text-sm font-normal pb-3">
            Already have an account?
            <Link to="/login" className="text-accent underline">
              Log In
            </Link>
          </span>
          <form className="flex flex-col ">
            <div className="flex flex-col my-3 text-sm">
              <input
                className="focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md px-2 py-3 bg-gray-50"
                name="username"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col my-3 text-sm">
              <input
                className="focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md px-2 py-3 bg-gray-50"
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col my-3 text-sm">
              <input
                className="focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md px-2 py-3 bg-gray-50"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col my-3 mx-auto w-11/12">
              <button className="bg-main font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 hover:bg-blue-600 transition duration-500  text-white px-2 py-3 rounded-lg w-full">
                Signup &#8594;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
