import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../NavigationBar/NavBar";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<{ email: string; password: string }>({
    email: "false",
    password: "false",
  });
  return (
    <div className="">
      <Navbar />
      <div className="bg-secondary w-full px-3 py-44 lg:pb-72">
        <div className="z-10 bg-white rounded-md w-11/12 mx-auto px-3 py-7 md:w-7/12  xl:w-4/12 shadow-md">
          <span className="block text-3xl font-semibold py-4">Login</span>
          <span className="block text-sm font-normal pb-3">
            Don't have an account?
            <Link to="/signup" className="text-accent underline">
              Sign up
            </Link>
          </span>
          <form className="flex flex-col ">
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
              <span className="">{error.email}</span>
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
                Login &#8594;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
