import React, { useState } from "react";
import Category from "./Category/Category";
import Header from "./Header/Header";

const Home = (): JSX.Element => {
  const [mode, setMode] = useState("light");
  return (
    <div className="bg-gray-100 ">
      <div
        onClick={() => setMode((mode) => (mode === "light" ? "dark" : "light"))}
        className={`relative px-4 py-2.5 rounded-2xl m-3 w-10 inline-block bg-gray-300 `}
      >
        <div
          className={`rounded-full p-2 absolute top-0.5  transition-all duration-500 transform  ${
            mode === "light" ? "bg-blue-500 left-1" : " bg-gray-700 right-1"
          }`}
        ></div>
      </div>
      <Header />
      <Category />
    </div>
  );
};

export default Home;
