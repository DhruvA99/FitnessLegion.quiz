import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import QuizList from "./components/QuizList/QuizList";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/list" element={<QuizList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
