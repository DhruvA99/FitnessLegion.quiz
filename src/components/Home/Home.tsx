import React, { useState } from "react";
import Navbar from "../NavigationBar/NavBar";
import Category from "./Category/Category";
import Header from "./Header/Header";

const Home = (): JSX.Element => {
  const [mode, setMode] = useState("light");
  return (
    <div className="bg-primary">
      <Navbar />
      <Header />
      <Category />
    </div>
  );
};

export default Home;
