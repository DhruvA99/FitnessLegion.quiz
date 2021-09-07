import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/Auth/auth-context";
import { logInUser } from "../../../Context/Auth/authActions";
import Navbar from "../../NavigationBar/NavBar";
var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [valid, setValid] = useState<boolean>(false);
  const { authState, authDispatch } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (authState.status === "authSuccess") navigate("/");
  }, [authState.status]);

  const LoginSubmitHandler = (
    e: React.MouseEvent<HTMLElement>,
    type: String
  ) => {
    e.preventDefault();
    let FormValid = true;
    if (password.length === 0 || password.length < 8) {
      setError((error) => {
        return {
          ...error,
          password: "Password should not be empty or less than 8 characters",
        };
      });
      FormValid = false;
    }
    if (!emailRegex.test(email)) {
      setError((error) => {
        return {
          ...error,
          email: "Enter a valid email format",
        };
      });
      FormValid = false;
    }
    FormValid ? setValid(true) : setValid(false);
    if (FormValid && type === "normal") {
      logInUser(authDispatch, email, password);
    } else {
      logInUser(authDispatch, "admin@da.com", "asdfghjkl");
    }
  };

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
              <span className="text-red-700">{error.email}</span>
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
              <span className="text-red-700">{error.password}</span>
            </div>
            <div className="flex flex-col my-3 mx-auto w-11/12">
              <button
                className="bg-main font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 hover:bg-blue-600 transition duration-500  text-white px-2 py-3 rounded-lg w-full"
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  LoginSubmitHandler(e, "normal")
                }
              >
                {authState.status === "loading" ? (
                  "Loading ..."
                ) : (
                  <span>Login &#8594;</span>
                )}
              </button>
              <span className="text-lg py-2">OR</span>
              <button
                className="bg-main font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 hover:bg-blue-600 transition duration-500  text-white px-2 py-3 rounded-lg w-full"
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  LoginSubmitHandler(e, "guest")
                }
              >
                {authState.status === "loading" ? (
                  "Loading ..."
                ) : (
                  <span>Login as Guest &#8594;</span>
                )}
              </button>
              <span className="font-bold text-red-600 tracking-wide">
                {authState.error}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
